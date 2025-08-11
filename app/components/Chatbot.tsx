"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] })

type ChatMessage = {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  status?: "pending" | "sent" | "error"
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [sending, setSending] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || sending) return

    const userMsgId = crypto.randomUUID()
    const newMsg: ChatMessage = {
      id: userMsgId,
      role: "user",
      content: text,
      status: "pending",
    }
    setMessages((prev) => [...prev, newMsg])
    setInput("")
    setSending(true)

    try {
      const res = await fetch("/api/chat-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          metadata: {
            path: typeof window !== "undefined" ? window.location.pathname : "",
            timestamp: Date.now(),
          },
        }),
      })

      const responseData = await res.json()

      if (res.ok) {
        setMessages((prev) =>
          prev.map((m) => (m.id === userMsgId ? { ...m, status: "sent" } : m)),
        )
        if (responseData.reply) {
          setMessages((prev) => [
            ...prev,
            { id: crypto.randomUUID(), role: "assistant", content: responseData.reply },
          ])
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              role: "assistant",
              content: "Lo siento, no pude obtener una respuesta clara del asistente.",
            },
          ])
        }
      } else {
        setMessages((prev) =>
          prev.map((m) => (m.id === userMsgId ? { ...m, status: "error" } : m)),
        )
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              responseData.error ||
              "Hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.",
          },
        ])
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) => (m.id === userMsgId ? { ...m, status: "error" } : m)),
      )
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Error de conexión. Por favor, verifica tu conexión a internet e inténtalo de nuevo.",
        },
      ])
    } finally {
      setSending(false)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      sendMessage()
    }
  }

  // Scroll al último mensaje
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  // Mensaje inicial automático cuando se abre el chat
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Hola, soy Isa, tu asistente virtual de Ambosa AI. ¿En qué puedo ayudarte?",
        },
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        aria-label="Abrir chat"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[70] h-14 w-14 rounded-full flex items-center justify-center shadow-lg focus:outline-none"
        style={{ backgroundColor: "#BFA97A" }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </motion.button>

      {/* Ventana de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-5 right-5 z-[75] w-[360px] max-w-[calc(100vw-2.5rem)]"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ backgroundColor: "#302929" }}
              >
                {/* Nombre y subtítulo */}
                <div>
                  <div
                    className={`text-white text-sm ${montserrat.className}`}
                    style={{ fontWeight: 600 }}
                  >
                    Isa
                  </div>
                  <div className="text-white/70 text-xs">
                    Asistente virtual de Ambosa AI
                  </div>
                </div>

                {/* Botón de cerrar */}
                <button
                  aria-label="Cerrar chat"
                  className="text-white/80 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Área de mensajes */}
              <div className="bg-white text-black h-[320px] overflow-y-auto" ref={scrollRef}>
                <div className="p-4 space-y-3">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`max-w-[80%] text-sm rounded-lg px-3 py-2 ${
                        m.role === "user"
                          ? "ml-auto bg-[#F3F3F3] border border-black/10"
                          : "bg-white border border-black/10"
                      }`}
                      title={m.status === "error" ? "No se pudo enviar" : undefined}
                    >
                      <div className="whitespace-pre-wrap break-words">{m.content}</div>
                      {m.role === "user" && (
                        <div className="mt-1 text-[10px] text-black/50">
                          {m.status === "pending" && "Enviando..."}
                          {m.status === "sent" && "Enviado"}
                          {m.status === "error" && "Error al enviar"}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Input + enviar */}
              <div className="bg-white border-t border-black/10 p-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Escribe tu mensaje…"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    className="flex-1 h-10 rounded-md border border-black/20 px-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/30"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={sending || input.trim().length === 0}
                    className="h-10 px-3 text-black hover:opacity-90 disabled:opacity-50"
                    style={{ backgroundColor: "#BFA97A" }}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
