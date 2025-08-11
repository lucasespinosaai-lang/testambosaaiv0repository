"use client"

import Header from "../components/Header" 
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function PrivacidadPage() {
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

          <h1 className="text-5xl font-bold mb-12 text-center">Política de Privacidad</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">1. Información que Recopilamos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">En Ambosa AI recopilamos la siguiente información:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Información de contacto (nombre, email, teléfono)</li>
                <li>Información de la empresa (nombre, sector, tamaño)</li>
                <li>Datos técnicos necesarios para la implementación de soluciones</li>
                <li>Información de uso de nuestros servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">2. Cómo Utilizamos su Información</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Utilizamos su información para:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Comunicarnos con usted sobre proyectos y actualizaciones</li>
                <li>Personalizar nuestras soluciones según sus necesidades</li>
                <li>Cumplir con obligaciones legales y contractuales</li>
                <li>Enviar información relevante sobre nuestros servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">3. Compartir Información</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Cuando sea necesario para proporcionar nuestros servicios</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Cuando sea requerido por ley o autoridades competentes</li>
                <li>Con su consentimiento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">4. Seguridad de los Datos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos
                personales contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Cifrado de datos en tránsito y en reposo</li>
                <li>Controles de acceso estrictos</li>
                <li>Auditorías regulares de seguridad</li>
                <li>Capacitación del personal en protección de datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">5. Sus Derechos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bajo el RGPD y otras leyes de protección de datos, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Suprimir sus datos personales</li>
                <li>Limitar el procesamiento de sus datos</li>
                <li>Portabilidad de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">6. Retención de Datos</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conservamos sus datos personales solo durante el tiempo necesario para cumplir con los propósitos para
                los que fueron recopilados, incluyendo requisitos legales, contables o de informes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">7. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, analizar el
                tráfico y personalizar el contenido. Puede gestionar sus preferencias de cookies en la configuración de
                su navegador.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">8. Contacto</h2>
              <p className="text-gray-300 leading-relaxed">
                Para ejercer sus derechos o realizar consultas sobre esta política de privacidad, contacte con nosotros
                en{" "}
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
