import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import type React from "react"
import Chatbot from "./components/Chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ambosa AI - Automatiza lo esencial. Mantén lo auténtico.",
  description:
    "Aprovecha el poder de la inteligencia artificial para automatizar procesos clave, ahorrar tiempo y reducir costos sin perder control.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="w-full">
      <body className={`${inter.className} w-full`}>
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
