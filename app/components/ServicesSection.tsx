"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card" // Import Card
import { Badge } from "@/components/ui/badge" // Import Badge

const services = [
  {
    title: "Automatización de procesos",
    description:
      "Analizamos tus procesos actuales y creamos automatizaciones a medida que eliminan tareas repetitivas, reducen errores y optimizan la eficiencia operativa sin alterar tu flujo de trabajo.",
    image:
      "https://cdn.jsdelivr.net/gh/lucasespinosaai-lang/svg@8a2602a1a558011aa4343b540f9b6810c8faa548/primer%20imagen.png",
  },
  {
    title: "Chatbots de atención al cliente",
    description:
      "Entendemos los objetivos y el perfil de tus clientes para crear asistentes conversacionales que respondan con criterio, tono humano y tecnología avanzada.",
    image: "https://cdn.jsdelivr.net/gh/lucasespinosaai-lang/svg@8a2602a1a558011aa4343b540f9b6810c8faa548/chat2.png",
  },
  {
    title: "Prospección personalizada en frío",
    description:
      "Analizamos los datos de tus contactos y generamos correos personalizados que mejoran la tasa de respuesta y aumentan la conversión. Sin plantillas genéricas, con intención real.",
    image: "https://cdn.jsdelivr.net/gh/lucasespinosaai-lang/svg@main/7.png",
  },
  {
    title: "Creación de contenido automatizada",
    description:
      "Analizamos tu negocio y tu audiencia para generar contenido útil, claro y alineado con tus objetivos. Nada genérico, todo alineado a lo que realmente necesitas comunicar.",
    image: "https://cdn.jsdelivr.net/gh/lucasespinosaai-lang/svg@main/5.png",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      id="servicios"
      className="py-20 px-4 bg-gradient-to-b from-black via-[#3C2F29]/10 to-black relative overflow-hidden scroll-mt-[80px]"
    >
      <div className="container mx-auto px-4">
        <motion.div style={{ y, opacity }}>
          <div className="text-center mb-6">
            <Badge variant="secondary" className="bg-white text-[#3C2F29] px-4 py-2 rounded-full text-sm font-semibold">
              Servicios
            </Badge>
          </div>

          <motion.h2
            className="text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Soluciones con inteligencia,
            <br />
            <span className="text-[#BFA97A]">no solo con IA</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="rounded-xl p-0 bg-black/30 border border-[#BFA97A]/20 backdrop-blur-lg hover:border-[#BFA97A]/40 transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="mb-6 relative">
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-[#BFA97A]/10 to-transparent rounded-xl transform -rotate-1 group-hover:rotate-1 transition-transform duration-300"></motion.div>
                      <div className="relative overflow-hidden rounded-xl bg-black/20 border border-[#BFA97A]/20 group-hover:border-[#BFA97A]/40 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#BFA97A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      {" "}
                      {/* Added padding for text content */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#BFA97A] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
