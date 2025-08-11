"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export default function ContactSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section
      id="contacto"
      ref={ref}
      className="pt-20 pb-0 px-4 bg-gradient-to-b from-black via-black to-[#3C2F29] relative overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-5xl font-bold mb-8">
            ¿Listo para automatizar tu negocio?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Agenda una demo personalizada y descubre cómo la IA puede transformar tu empresa en menos de 30 días.
          </motion.p>
          <div className="flex justify-center items-center">
            <Button
            className="hidden md:inline-flex bg-[#BFA97A] text-white hover:bg-[#BFA97A]/90
                       text-sm md:text-base px-5 py-3 rounded-full
                       transition-colors relative overflow-hidden group font-semibold shadow shadow-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            asChild
          >
            <a
              href="https://cal.com/lucas-espinosa/ia-para-tu-negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 relative z-10 text-center"
            >
              <span>EMPIEZA A AUTOMATIZAR HOY</span>
              <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                →
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#BFA97A]/80 to-[#BFA97A]"
                initial={{ x: "100%" }}
                animate={{ x: isHovered ? "0%" : "100%" }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </Button>
          </div>
          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#BFA97A] mb-2">30 min</div>
              <div className="text-gray-400">Duración de la demo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#BFA97A] mb-2">100%</div>
              <div className="text-gray-400">Personalizada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#BFA97A] mb-2">0€</div>
              <div className="text-gray-400">Completamente gratis</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
