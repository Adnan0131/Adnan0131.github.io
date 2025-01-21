import "./globals.css"
import { Libre_Bodoni } from "next/font/google"
import Header from "../components/Header"
import Footer from "../components/Footer"

const bodoni = Libre_Bodoni({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio showcasing my work and achievements",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodoni.className} bg-[#2E1A47] text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

