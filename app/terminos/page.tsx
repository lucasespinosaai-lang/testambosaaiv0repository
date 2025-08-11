"use client"

import Header from "../components/Header" 
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function TerminosPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3C2F29] to-black text-white">
          {/* Header fijo */}
      <Header />
      <div className="container mx-auto px-4 py-20">
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

          <h1 className="text-5xl font-bold mb-12 text-center">Términos y Condiciones</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">1. Aceptación de los Términos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Al acceder y utilizar los servicios de Ambosa AI, usted acepta cumplir con estos términos y condiciones
                en su totalidad. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros
                servicios.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">2. Descripción de los Servicios</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ambosa AI proporciona soluciones de automatización e inteligencia artificial para empresas, incluyendo:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Automatización de procesos empresariales</li>
                <li>Desarrollo de chatbots inteligentes</li>
                <li>Prospección personalizada en frío</li>
                <li>Creación de contenido automatizada</li>
                <li>Consultoría en implementación de IA</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">3. Responsabilidades del Cliente</h2>
              <p className="text-gray-300 leading-relaxed mb-4">El cliente se compromete a:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Proporcionar información precisa y completa necesaria para la implementación</li>
                <li>Colaborar activamente durante el proceso de desarrollo</li>
                <li>Cumplir con los plazos de pago acordados</li>
                <li>Utilizar los servicios de manera ética y legal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">4. Propiedad Intelectual</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Todos los derechos de propiedad intelectual sobre las soluciones desarrolladas por Ambosa AI permanecen
                con la empresa, salvo acuerdo específico por escrito. El cliente recibe una licencia de uso para la
                solución implementada.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">5. Limitación de Responsabilidad</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ambosa AI no será responsable de daños indirectos, incidentales, especiales o consecuentes que puedan
                surgir del uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por los
                servicios en cuestión.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">6. Modificaciones</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán
                en vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">7. Contacto</h2>
              <p className="text-gray-300 leading-relaxed">
                Para cualquier consulta sobre estos términos, contacte con nosotros en{" "}
                <a href="mailto:soporte@ambosaai.com" className="text-[#BFA97A] hover:underline">
                  soporte@ambosaai.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">Última actualización: Enero 2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
