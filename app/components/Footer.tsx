import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* Sección principal con contacto */}
      <div className="container mx-auto px-4 pt-10 pb-10 flex justify-center md:justify-end">
        <div className="max-w-xs text-center md:text-right">
          {" "}
          {/* Ajustado para centrar en móvil */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>
                <a href="mailto:soporte@ambosaai.com" className="hover:text-[#BFA97A] transition-colors">
                  soporte@ambosaai.com
                </a>
              </p>
              <p>
                <a href="tel:+34627914263" className="hover:text-[#BFA97A] transition-colors">
                  +34 627 914 263
                </a>
              </p>
              <p>Madrid, España</p>
            </div>
          </div>
        </div>
      </div>

      {/* Línea gradient antes del texto legal */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#BFA97A] to-transparent shadow-[0_0_20px_#BFA97A]" />

      {/* Sección inferior con texto legal */}
      <div className="container mx-auto px-4 pt-6 pb-6">
        <div
          className="flex flex-col items-center text-center gap-2
                          md:flex-row md:justify-between md:items-center md:text-left text-sm text-gray-200"
        >
          <p>© 2025 Ambosa AI. Todos los derechos reservados.</p>
          <nav
            className="flex flex-col items-center gap-2
                            md:flex-row md:items-center md:gap-6"
          >
            <Link href="/aviso-legal" className="hover:text-[#BFA97A] transition-colors">
              Aviso Legal
            </Link>
            <Link href="/privacidad" className="hover:text-[#BFA97A] transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-[#BFA97A] transition-colors">
              Términos y Condiciones
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
