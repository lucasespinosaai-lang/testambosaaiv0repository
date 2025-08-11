"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Bot, Zap, Target, TrendingUp } from "lucide-react"

const FloatingParticle = ({ delay }: { delay: number }) => {
  const y = useMotionValue(0)
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

  useEffect(() => {
    const moveParticle = () => {
      y.set(Math.random() * -100)
      setTimeout(moveParticle, Math.random() * 5000 + 3000)
    }
    setTimeout(moveParticle, delay)
  }, [y, delay])

  return (
    <motion.div
      className="relative pt-[clamp(80px,16vw,192px)] pb-[clamp(24px,6vw,64px)] px-4 sm:px-6 w-full"
      style={{
        x: `${Math.random() * 100}%`,
        y: ySpring,
        opacity: 0.1,
      }}
    />
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const [isHovered, setIsHovered] = useState(false)

  const stats = [
    { icon: <Bot className="w-6 h-6" />, label: "Procesos Automatizados", value: "40+" },
    { icon: <Zap className="w-6 h-6" />, label: "Horas Ahorradas", value: "1k+" },
    { icon: <Target className="w-6 h-6" />, label: "Clientes Satisfechos", value: "25+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "ROI Promedio", value: "150%" },
  ]

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden w-full">
      {/* Fondo full width sin restricciones */}
      <div className="absolute inset-0 w-screen h-full overflow-hidden left-1/2 transform -translate-x-1/2">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#3C2F29] to-black"></div>
        {[...Array(50)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 100} />
        ))}
      </div>

      {/* Contenido visual, sin restricciones laterales */}
      <motion.div
        style={{ y, opacity }}
        className="relative pt-28 sm:pt-36 md:pt-48 pb-12 md:pb-16 px-4 sm:px-6 w-full"
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BFA97A]">
                Automatiza lo esencial.
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BFA97A] to-white">
                Mantén lo auténtico.
              </span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Aprovecha el poder de la inteligencia artificial para automatizar procesos clave, ahorrar tiempo y reducir
              costos sin perder control.
            </p>
            <div className="relative inline-block">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                <Button
                  size="lg"
                  className="bg-[#BFA97A] text-white hover:bg-[#BFA97A]/90 text-lg px-8 py-6 rounded-full transition-colors relative overflow-hidden group font-semibold"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  asChild
                >
                  <a href="https://cal.com/lucas-espinosa/ia-para-tu-negocio" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">EMPIEZA A AUTOMATIZAR HOY</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-[#BFA97A]/80 to-[#BFA97A]"
                      initial={{ x: "100%" }}
                      animate={{ x: isHovered ? "0%" : "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2 relative z-10"
                    >
                      →
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/30 rounded-xl p-4 sm:p-6 backdrop-blur-lg border border-[#BFA97A]/20 transition-colors hover:border-[#BFA97A]/40 h-full"
                >
                  <div className="mb-2 text-[#BFA97A] flex justify-center">{stat.icon}</div>
                  <motion.div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</motion.div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
