"use client"

import Header from "../components/Header" 
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function AvisoLegalPage() {
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

          <h1 className="text-5xl font-bold mb-12 text-center">Aviso Legal</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">1. Información General</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de
                Comercio Electrónico, le informamos de los siguientes datos:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <strong>Denominación social:</strong> Ambosa AI
                </li>
                <li>
                  <strong>Domicilio social:</strong> Madrid, España
                </li>
                <li>
                  <strong>Correo electrónico:</strong> soporte@ambosaai.com
                </li>
                <li>
                  <strong>Teléfono:</strong> +34 627 914 263
                </li>
                <li>
                  <strong>Sitio web:</strong> https://ambosaai.com
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">2. Objeto</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                El presente aviso legal regula el uso del sitio web https://ambosaai.com (en adelante, "el sitio web"),
                del que es titular Ambosa AI (en adelante, "el titular").
              </p>
              <p className="text-gray-300 leading-relaxed">
                La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena
                y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">3. Condiciones de Uso</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                El acceso y uso de este sitio web se rige por las siguientes condiciones:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  El uso del sitio web es gratuito, salvo en lo relativo al coste de la conexión a través de la red de
                  telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios.
                </li>
                <li>
                  Los usuarios se comprometen a hacer un uso adecuado de los contenidos y servicios que ofrece el sitio
                  web.
                </li>
                <li>Queda prohibido utilizar el sitio web con fines ilícitos o no autorizados.</li>
                <li>
                  Los usuarios se comprometen a no realizar actividades publicitarias o de explotación comercial
                  remitiendo mensajes que no hubieran sido solicitados.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">4. Propiedad Intelectual e Industrial</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo, textos,
                fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos
                fuente, constituyen una obra cuya propiedad pertenece al titular, sin que puedan entenderse cedidos al
                usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario
                para el correcto uso del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">5. Exclusión de Garantías y Responsabilidad</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                El titular se exime de cualquier tipo de responsabilidad derivada de la información publicada en su
                sitio web siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
              </p>
              <p className="text-gray-300 leading-relaxed">
                El sitio web puede contener enlaces a otros sitios web. El titular no ejerce control alguno sobre dichos
                sitios web, por lo que no asume responsabilidad alguna por los contenidos o servicios que puedan
                ofrecerse en los sitios enlazados.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">6. Modificaciones</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas
                en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a
                través de la misma como la forma en la que éstos aparezcan presentados o localizados en su sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#BFA97A]">7. Legislación Aplicable y Jurisdicción</h2>
              <p className="text-gray-300 leading-relaxed">
                La relación entre el titular y el usuario se regirá por la normativa española vigente y cualquier
                controversia se someterá a los Juzgados y Tribunales de Madrid, España.
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
