"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/20 backdrop-blur-lg" : "bg-transparent backdrop-blur-lg"
        }`}
      >
        {/* relative para centrar el nav en md+ */}
        <div className="container mx-auto px-8 md:pr-2 lg:pr-0 flex items-center justify-between max-w-5xl md:max-w-6xl h-[80px] relative">
          {/* Logo (izquierda) */}
          <Link href="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO_AMBOSA_AI_14_-removebg-preview-a9OjvSjGPCqmEHm6fuNxeBgs6Qdfdd.png"
              alt="Ambosa AI Logo"
              className="object-contain h-40 w-384px"
              style={{ imageRendering: "auto", filter: "contrast(1.05) brightness(1.02) saturate(1.1)" }}
            />
          </Link>

          {/* Nav centrado (solo desktop) */}
          <nav className="hidden md:block md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <ul className="flex items-center space-x-8">
              <li>
                <Link href="#proceso" className="hover:text-[#BFA97A] transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#BFA97A] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="hover:text-[#BFA97A] transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#BFA97A] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#BFA97A] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hamburguesa (solo móvil) */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menú">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/90 border-l border-[#BFA97A]/20 backdrop-blur-lg text-white"
              >
                <nav className="flex flex-col space-y-6 p-4">
                  <Link href="#proceso" className="hover:text-[#BFA97A] text-lg" onClick={() => setIsMenuOpen(false)}>
                    Proceso
                  </Link>
                  <Link href="#servicios" className="hover:text-[#BFA97A] text-lg" onClick={() => setIsMenuOpen(false)}>
                    Servicios
                  </Link>
                  <Link
                    href="#beneficios"
                    className="hover:text-[#BFA97A] text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Beneficios
                  </Link>
                  <Link href="#faq" className="hover:text-[#BFA97A] text-lg" onClick={() => setIsMenuOpen(false)}>
                    FAQ
                  </Link>
                  <Link href="/contacto" className="hover:text-[#BFA97A] text-lg" onClick={() => setIsMenuOpen(false)}>
                    Contacto
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* CTA (derecha) */}
          <Button
            className="hidden md:inline-flex ml-6 bg-[#BFA97A] text-white hover:bg-[#BFA97A]/90
                     text-sm md:text-base px-5 py-3 rounded-full
                     transition-colors relative overflow-hidden group font-semibold shadow shadow-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            asChild={false}
          >
            <>
              <motion.span
                className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#BFA97A]/80 to-[#BFA97A]"
                initial={{ x: "100%" }}
                animate={{ x: isHovered ? "0%" : "100%" }}
                transition={{ duration: 0.3 }}
              />
              <a
                href="https://cal.com/lucas-espinosa/ia-para-tu-negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center gap-2 text-center"
              >
                <span className="relative z-10">EMPIEZA A AUTOMATIZAR HOY</span>
                <motion.span
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-2 relative z-10"
                >
                  →
                </motion.span>
              </a>
            </>
          </Button>
        </div>

        {/* Línea decorativa */}
        <div className="fixed top-[80px] left-0 right-0 z-40">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#BFA97A] to-transparent shadow-[0_0_20px_#BFA97A]" />
        </div>
      </header>

      {/* Spacer del header fijo */}
      <div className="h-[80px] w-full" />
    </>
  )
}
