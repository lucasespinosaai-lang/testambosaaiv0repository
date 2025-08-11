"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Zap, DollarSign, TrendingUp, User, Maximize, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card" // Import Card
import { Badge } from "@/components/ui/badge" // Import Badge

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8 text-[#BFA97A]" />,
    title: "Eficiencia real",
    description: "Automatizamos procesos clave sin complicar tus flujos.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#BFA97A]" />,
    title: "Ahorro tangible",
    description: "Menos errores, mejor redistribución, menos costos.",
  },
  {
    icon: <User className="w-8 h-8 text-[#BFA97A]" />,
    title: "Experiencias personalizadas",
    description: "IA que se adapta a cada usuario.",
  },
  {
    icon: <Maximize className="w-8 h-8 text-[#BFA97A]" />,
    title: "Escalabilidad sin fricción",
    description: "Crecemos contigo sin necesidad de contratar más.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#BFA97A]" />,
    title: "Decisiones acertadas",
    description: "Convertimos datos en decisiones y oportunidades.",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#BFA97A]" />,
    title: "Soluciones adaptativas",
    description: "Adaptamos la IA a tus procesos, no al revés.",
  },
]

export default function BenefitsSection() {
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
      id="beneficios"
      className="py-20 px-4 bg-gradient-to-b from-black via-[#3C2F29]/15 to-black relative overflow-hidden scroll-mt-[80px]"
    >
      <div className="container mx-auto px-4">
        <motion.div style={{ y, opacity }}>
          <div className="text-center mb-6">
            <Badge variant="secondary" className="bg-white text-[#3C2F29] px-4 py-2 rounded-full text-sm font-semibold">
              Beneficios
            </Badge>
          </div>
          <motion.h2
            className="text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué elegir Ambosa AI?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-black/30 rounded-xl p-8 border border-[#BFA97A]/20 backdrop-blur-lg hover:border-[#BFA97A]/40 transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="text-[#BFA97A] mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
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
