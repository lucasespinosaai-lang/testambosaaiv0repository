"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" // Import Badge
import Image from "next/image"

export default function ProcesoSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  const steps = [
    {
      number: "01",
      title: "Descubrimiento y análisis",
      description:
        "Nos integramos con tu equipo para entender cómo trabajas. Analizamos procesos, identificamos cuellos de botella y detectamos automatizaciones que generen impacto real.",
      image:
        "https://raw.githubusercontent.com/lucasespinosaai-lang/svg/d6a3a6fb4f3eae7c77cf22871147fadd8906f4e9/location.png",
    },
    {
      number: "02",
      title: "Desarrollo a medida",
      description:
        "Diseñamos soluciones simples, útiles y bien pensadas. Interfaces sin distracciones, integraciones fluidas y tecnología avanzada puesta al servicio del negocio.",
      image:
        "https://raw.githubusercontent.com/lucasespinosaai-lang/svg/d6a3a6fb4f3eae7c77cf22871147fadd8906f4e9/lista.png",
    },
    {
      number: "03",
      title: "Despliegue sin fricción",
      description:
        "Implementamos con cuidado, sin interrumpir tu operación. Capacitamos a tu equipo y te acompañamos para que todo funcione como debe. Sin sorpresas. Sin improvisaciones.",
      image:
        "https://raw.githubusercontent.com/lucasespinosaai-lang/svg/d6a3a6fb4f3eae7c77cf22871147fadd8906f4e9/nave.png",
    },
  ]

  return (
    <section
      ref={ref}
      id="proceso"
      className="py-20 px-4 bg-gradient-to-b from-black via-[#3C2F29]/10 to-black relative overflow-hidden scroll-mt-[80px]"
    >
      <div className="container mx-auto px-4">
        <motion.div style={{ y, opacity }}>
          <div className="text-center mb-6">
            <Badge variant="secondary" className="bg-white text-[#3C2F29] px-4 py-2 rounded-full text-sm font-semibold">
              Proceso
            </Badge>
          </div>

          <motion.h2
            className="text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nuestro método probado,
            <br />
            <span className="text-[#BFA97A]">paso a paso</span>
          </motion.h2>

          <div className="space-y-20 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-1">
                  <motion.div className="relative group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#BFA97A]/20 to-transparent rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <Card className="bg-black/30 border border-[#BFA97A]/20 rounded-2xl shadow-lg h-80 overflow-hidden relative z-10 backdrop-blur-lg hover:border-[#BFA97A]/40 transition-all duration-300">
                      <CardContent className="flex items-center justify-center p-0 h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#BFA97A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          width={360}
                          height={240}
                          className="object-contain max-h-full max-w-full relative z-10 group-hover:scale-110 transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-6xl font-bold text-[#BFA97A]/20 mb-3">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-base text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
