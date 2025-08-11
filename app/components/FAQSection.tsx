"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDownIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" // Import Accordion components
import { Badge } from "@/components/ui/badge" // Import Badge

const faqs = [
  {
    question: "¿Qué es la automatización con inteligencia artificial y cómo puede beneficiar a mi negocio?",
    answer:
      "La automatización con IA combina procesos automatizados con capacidades de aprendizaje y toma de decisiones inteligentes. Esto permite no solo ejecutar tareas repetitivas, sino también adaptarse a diferentes situaciones, personalizar respuestas y optimizar procesos de manera continua.",
  },
  {
    question: "¿Qué servicios ofrece Ambosa AI?",
    answer:
      "Ofrecemos automatización de procesos empresariales, desarrollo de chatbots inteligentes, prospección personalizada, creación de contenido automatizada y soluciones de IA personalizadas para diferentes industrias.",
  },
  {
    question: "¿Cuánto tiempo se tarda en implementar una solución de automatización con IA?",
    answer:
      "El tiempo de implementación varía según la complejidad del proyecto. Proyectos simples pueden tomar 2-4 semanas, mientras que soluciones más complejas pueden requerir 2-3 meses. Siempre proporcionamos un cronograma detallado durante la fase de análisis.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen después de la implementación?",
    answer:
      "Proporcionamos soporte técnico continuo, actualizaciones regulares, monitoreo del rendimiento y capacitación adicional según sea necesario. Nuestro objetivo es asegurar que tu solución funcione de manera óptima a largo plazo.",
  },
  {
    question: "¿Cuál es el costo de una solución de automatización con IA?",
    answer:
      "Los costos varían según el alcance y complejidad del proyecto. Ofrecemos diferentes modelos de precios incluyendo proyectos únicos y suscripciones mensuales. Contactanos para una cotización personalizada basada en tus necesidades específicas.",
  },
]

export default function FAQSection() {
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
      id="faq"
      className="py-20 px-4 bg-gradient-to-b from-[#3C2F29] to-black relative overflow-hidden scroll-mt-[50px]"
    >
      <div className="container mx-auto px-4">
        <motion.div style={{ y, opacity }}>
          <div className="text-center mb-6">
            <Badge variant="secondary" className="bg-white text-[#3C2F29] px-4 py-2 rounded-full text-sm font-semibold">
              FAQ
            </Badge>
          </div>
          <motion.h2
            className="text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Preguntas Frecuentes
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger
  className="
    w-full text-left p-5 md:p-6 bg-black/30 rounded-lg
    border border-[#BFA97A]/20 hover:border-[#BFA97A]/40
    transition-all duration-300 backdrop-blur-lg
    [&[data-state=open]>svg]:rotate-180
    [&>svg]:text-[#BFA97A] [&>svg]:h-5 [&>svg]:w-5
  "
>
  <span className="text-base md:text-lg font-semibold pr-4 text-white">
    {faq.question}
  </span>
</AccordionTrigger>
                    <AccordionContent className="p-5 md:p-6 pt-0 bg-black/20 rounded-b-lg border border-t-0 -mt-px border-[#BFA97A]/20 backdrop-blur-lg">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
