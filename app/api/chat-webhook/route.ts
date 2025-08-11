import { NextResponse } from "next/server"
import { z } from "zod"

const RequestSchema = z
  .object({
    message: z.string().min(1, "El campo 'message' es obligatorio"),
    metadata: z
      .object({
        path: z.string().optional(),
        timestamp: z.number().optional(), // Cambiado a number para el timestamp
      })
      .optional(),
  })
  .passthrough() // Permite campos adicionales

const corsHeaders = { 
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

// Preflight CORS
export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders })
}

export async function POST(req: Request) {
  try {
    // Validar Content-Type
    const contentType = req.headers.get("content-type") || ""
    if (!contentType.includes("application/json")) {
      console.error("Invalid Content-Type:", contentType); // Added log
      return NextResponse.json(
        { ok: false, error: "Content-Type debe ser application/json" },
        { status: 415, headers: corsHeaders }
      )
    }

    const json = await req.json()
    const parsed = RequestSchema.safeParse(json)
    if (!parsed.success) {
      console.error("Invalid payload:", parsed.error.issues); // Added log
      return NextResponse.json(
        {
          ok: false,
          error: "Payload inválido",
          issues: parsed.error.issues.map((i) => ({
            path: i.path.join("."),
            message: i.message,
          })),
          expectedShape: {
            message: "string",
            metadata: { path: "string?", timestamp: "number?" },
          },
        },
        { status: 400, headers: corsHeaders }
      )
    }

    const data = parsed.data as Record<string, unknown>

    // Recoger metadatos útiles del request
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      // @ts-ignore - may exist in some runtimes
      (req as any).ip ||
      undefined
    const userAgent = req.headers.get("user-agent") || undefined
    const referer = req.headers.get("referer") || undefined
    const origin = req.headers.get("origin") || undefined

    const payloadToForward = {
      ...data,
      serverMeta: {
        ip,
        userAgent,
        referer,
        origin,
        receivedAt: new Date().toISOString(),
      },
    }

    // FIX: Leer la variable de entorno correctamente
    const webhookUrl = process.env.WEBHOOK_URL;
    console.log("WEBHOOK_URL:", webhookUrl ? "Set" : "Not Set"); // Added log
    if (!webhookUrl) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Falta configurar la variable de entorno WEBHOOK_URL en el proyecto para reenviar el mensaje al webhook.",
        },
        { status: 500, headers: corsHeaders }
      )
    }

    console.log("Forwarding payload to webhook:", payloadToForward); // Added log
    const forwardRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payloadToForward),
    })

    console.log("Webhook response status:", forwardRes.status); // Added log
    if (forwardRes.ok) {
      // Asumimos que el webhook devuelve JSON con la respuesta del asistente
      const webhookResponseBody = await forwardRes.json()
      console.log("Webhook response body:", webhookResponseBody); // Added log
      return NextResponse.json(webhookResponseBody, { status: 200, headers: corsHeaders })
    } else {
      // El webhook devolvió un error
      let webhookErrorDetails = "Error desconocido del webhook."
      try {
        const errorJson = await forwardRes.json()
        webhookErrorDetails = errorJson.error || JSON.stringify(errorJson)
      } catch {
        webhookErrorDetails = await forwardRes.text()
      }
      console.error("Error from webhook:", forwardRes.status, webhookErrorDetails); // Added log
      return NextResponse.json(
        { error: "Error al enviar el mensaje", details: webhookErrorDetails },
        { status: 502, headers: corsHeaders } // 502 Bad Gateway para errores del servicio upstream
      )
    }
  } catch (err) {
    // Errores generales del servidor o de parseo de JSON
    console.error("Server error in /api/chat-webhook:", err)
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500, headers: corsHeaders }
    )
  }
}
