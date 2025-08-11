"use client"

import Header from "./components/Header"
import Footer from "./components/Footer"
import InteractiveBackground from "./components/InteractiveBackground"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import {
  Bot,
  Zap,
  Target,
  TrendingUp,
  ArrowRight,
  Calendar,
  CheckCircle,
  MessageSquare,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react"
import FAQSection from "./components/FAQSection"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const stats = [
    { icon: <Bot className="w-6 h-6" />, label: "Procesos Automatizados", value: "40+" },
    { icon: <Zap className="w-6 h-6" />, label: "Horas Ahorradas", value: "1k+" },
    { icon: <Target className="w-6 h-6" />, label: "Clientes Satisfechos", value: "25+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "ROI Promedio", value: "150%" },
  ]

  const services = [
    {
      icon: <Bot className="w-10 h-10 sm:w-12 sm:h-12 text-[#BFA97A]" />,
      title: "Automatización de procesos",
      description:
        "Eliminamos tareas repetitivas y optimizamos tu flujo de trabajo con IA inteligente que se adapta a tu negocio.",
    },
    {
      icon: <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-[#BFA97A]" />,
      title: "Chatbots inteligentes",
      description: "Asistentes conversacionales que entienden a tus clientes y responden con criterio humano las 24/7.",
    },
    {
      icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#BFA97A]" />,
      title: "Prospección personalizada",
      description: "Generamos contactos cualificados con mensajes personalizados que aumentan tu tasa de conversión.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-[#BFA97A]" />,
      title: "Análisis predictivo",
      description: "Convertimos tus datos en insights accionables para tomar decisiones más inteligentes y rentables.",
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-[#BFA97A]" />,
      title: "Eficiencia real",
      description: "Automatizamos procesos clave sin complicar tus flujos.",
    },
    {
      icon: <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#BFA97A]" />,
      title: "Ahorro tangible",
      description: "Menos errores, mejor redistribución, menos costos.",
    },
    {
      icon: <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#BFA97A]" />,
      title: "Resultados medibles",
      description: "Cada automatización genera ROI cuantificable.",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Análisis profundo",
      description: "Estudiamos tu negocio para identificar oportunidades de automatización con mayor impacto.",
    },
    {
      number: "02",
      title: "Desarrollo personalizado",
      description: "Creamos soluciones a medida que se integran perfectamente con tus procesos existentes.",
    },
    {
      number: "03",
      title: "Implementación sin fricción",
      description: "Desplegamos gradualmente para no interrumpir tu operación y garantizar una adopción exitosa.",
    },
  ]

  return (
    <div className="min-h-screen text-white relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />

        <main className="w-full">
          {/* Hero Section */}
          <section ref={containerRef} className="min-h-screen relative overflow-hidden w-full">
            <div className="absolute inset-0 w-screen h-full overflow-hidden left-1/2 transform -translate-x-1/2">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#3C2F29] to-black"></div>
            </div>

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
                    Aprovecha el poder de la inteligencia artificial para automatizar procesos clave, ahorrar tiempo y
                    reducir costos sin perder control.
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
                        <a
                          href="https://cal.com/lucas-espinosa/ia-para-tu-negocio"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
          {/* Process Section */}
          <section
            id="proceso"
            className="py-20 px-4 bg-gradient-to-b from-black to-[#3C2F29] relative overflow-hidden scroll-mt-[50px]"
          >
            {" "}
            {/* Ajustado scroll-mt */}
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <div className="inline-block bg-white text-[#3C2F29] px-4 py-2 rounded-full text-sm font-semibold">
                  Proceso
                </div>
              </div>

              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Nuestro método probado,
                <br />
                <span className="text-[#BFA97A]">paso a paso</span>
              </motion.h2>

              <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row items-center gap-6 sm:gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#BFA97A] to-[#BFA97A]/60 flex items-center justify-center">
                        <span className="text-xl sm:text-2xl font-bold text-black">{step.number}</span>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{step.title}</h3>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section
            id="servicios"
            className="py-20 px-4 bg-gradient-to-b from-[#3C2F29] to-black relative overflow-hidden scroll-mt-[50px]"
          >
            {" "}
            {/* Ajustado scroll-mt */}
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <div className="inline-block bg-white text-[#3C2F29] px-4 py-2 rounded-full text-sm font-semibold">
                  Servicios
                </div>
              </div>

              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Soluciones con inteligencia,
                <br />
                <span className="text-[#BFA97A]">no solo con IA</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
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
                    <div className="bg-black/30 rounded-xl p-6 sm:p-8 border border-[#BFA97A]/20 backdrop-blur-lg hover:border-[#BFA97A]/40 transition-all duration-300 h-full">
                      <div className="mb-4 sm:mb-6">{service.icon}</div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 group-hover:text-[#BFA97A] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section
            id="beneficios"
            className="py-20 px-4 bg-gradient-to-b from-black to-[#3C2F29] relative overflow-hidden scroll-mt-[50px]"
          >
            {" "}
            {/* Ajustado scroll-mt */}
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <div className="inline-block bg-white text-[#3C2F29] px-4 py-2 rounded-full text-sm font-semibold">
                  Beneficios
                </div>
              </div>
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                ¿Por qué elegir AMBOSA?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="bg-black/30 rounded-xl p-6 sm:p-8 border border-[#BFA97A]/20 backdrop-blur-lg hover:border-[#BFA97A]/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-[#BFA97A] mb-3 sm:mb-4">{benefit.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection />

          {/* Contact Section */}
          <section id="contacto" className="py-20 px-4 bg-black relative overflow-hidden scroll-mt-[40px]">
            {" "}
            {/* Ajustado scroll-mt */}
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-8">¿Listo para automatizar tu negocio?</h2>
                <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
                  Agenda una demo personalizada y descubre cómo la IA puede transformar tu empresa en menos de 30 días.
                </p>
                <div className="flex justify-center items-center">
                  {" "}
                  {/* Wrapper div for centering */}
                  <Button
                    className="bg-[#BFA97A] text-white hover:bg-[#BFA97A]/90
                         w-auto mx-auto inline-flex items-center justify-center
                         !whitespace-nowrap text-sm md:text-lg px-4 py-3 md:px-8 md:py-6
                         rounded-full"
                    asChild
                  >
                    <a
                      href="https://cal.com/lucas-espinosa/ia-para-tu-negocio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      EMPIEZA A AUTOMATIZAR HOY
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#BFA97A] mb-2">30 min</div>
                    <div className="text-gray-400 text-sm sm:text-base">Duración de la demo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#BFA97A] mb-2">100%</div>
                    <div className="text-gray-400 text-sm sm:text-base">Personalizada</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#BFA97A] mb-2">0€</div>
                    <div className="text-gray-400 text-sm sm:text-base">Completamente gratis</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
