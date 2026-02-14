import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Gadde Tejesh | Java Full Stack Developer",
  description:
    "Portfolio of Gadde Tejesh - Java Full Stack Developer specializing in Spring Boot, Microservices, and Cloud-Native Applications. B.Tech CS student at IIITV-ICD.",
  keywords: [
    "Java Developer",
    "Full Stack",
    "Spring Boot",
    "Microservices",
    "Portfolio",
    "Gadde Tejesh",
  ],
}

export const viewport = {
  themeColor: "#0d9488",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
