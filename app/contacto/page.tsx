"use client"

import Header from "../components/Header" 
import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // Import Input
import { Textarea } from "@/components/ui/textarea" // Import Textarea
import { useEffect, useState } from "react"

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xzzvjnzj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        const data = await response.json()
        setSubmitStatus("error")
        setErrorMessage(data.error || "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Error de conexión. Por favor, verifica tu conexión a internet e inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3C2F29] to-black text-white relative">
          {/* Header fijo */}
      <Header />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Button asChild variant="ghost" className="mb-8 text-[#BFA97A] hover:text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-gray-300">
              Cuéntanos tu proyecto y descubre cómo la IA puede transformar tu negocio
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/30 rounded-2xl p-8 border border-[#BFA97A]/20 backdrop-blur-lg"
          >
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-green-500">¡Mensaje enviado con éxito!</h3>
                <p className="text-gray-300 mb-6">
                  Gracias por contactarnos. Responderemos a tu mensaje en menos de 24 horas.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  className="bg-[#BFA97A] text-white hover:bg-[#BFA97A]/90"
                >
                  Enviar otro mensaje
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campo oculto para Formspree */}
                <input type="hidden" name="_subject" value="Nuevo mensaje de contacto desde Ambosa AI" />
                <input type="hidden" name="_next" value="https://ambosaai.com/contacto?success=true" />
                <input type="hidden" name="_captcha" value="false" />

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <p className="text-red-300 text-sm">{errorMessage}</p>
                  </motion.div>
                )}

                {/* Nombre completo */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    disabled={isSubmitting}
                    placeholder="Escribe tu nombre completo"
                    className="bg-black/50 border border-[#BFA97A]/30 text-white placeholder-gray-400 focus-visible:ring-[#BFA97A]"
                  />
                </div>

                {/* Correo electrónico */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo electrónico *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    placeholder="Escribe tu correo electrónico"
                    className="bg-black/50 border border-[#BFA97A]/30 text-white placeholder-gray-400 focus-visible:ring-[#BFA97A]"
                  />
                </div>

                {/* Teléfono de contacto */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono de contacto *
                  </label>
                  <Input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    disabled={isSubmitting}
                    placeholder="Incluye un número al que podamos llamarte"
                    className="bg-black/50 border border-[#BFA97A]/30 text-white placeholder-gray-400 focus-visible:ring-[#BFA97A]"
                  />
                </div>

                {/* Nombre de empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre de empresa
                  </label>
                  <Input
                    type="text"
                    id="empresa"
                    name="empresa"
                    disabled={isSubmitting}
                    placeholder="Nombre de tu empresa"
                    className="bg-black/50 border border-[#BFA97A]/30 text-white placeholder-gray-400 focus-visible:ring-[#BFA97A]"
                  />
                </div>

                {/* Tu rol en la empresa */}
                <div>
                  <label htmlFor="rol" className="block text-sm font-medium text-gray-300 mb-2">
                    Tu rol en la empresa *
                  </label>
                  <Input
                    type="text"
                    id="rol"
                    name="rol"
                    required
                    disabled={isSubmitting}
                    placeholder="¿Cuál es tu cargo o función?"
                    className="bg-black/50 border border-[#BFA97A]/30 text-white placeholder-gray-400 focus-visible:ring-[#BFA97A]"
                  />
                </div>

                {/* ¿Cómo te podemos ayudar? */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                    ¿Cómo te podemos ayudar? *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    disabled={isSubmitting}
                    rows={5}
                    placeholder="Cuéntanos brevemente tu necesidad o idea"
                    className="bg-black/50 border border-[#BFA97A]/30 text-white placeholder-gray-400 focus-visible:ring-[#BFA97A] resize-none"
                  />
                </div>

                {/* Botón de envío */}
                <motion.div
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-gray-100 text-lg py-4 rounded-lg font-semibold transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm mb-4">También puedes contactarnos directamente:</p>
            <div className="space-y-2">
              <a href="mailto:soporte@ambosaai.com" className="text-[#BFA97A] hover:underline block">
                soporte@ambosaai.com
              </a>
              <a href="tel:+34627914263" className="text-[#BFA97A] hover:underline block">
                +34 627 914 263
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-6">Responderemos a tu mensaje en menos de 24 horas</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
