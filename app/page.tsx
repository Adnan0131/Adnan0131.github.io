import { ThreeDCard } from "@/components/ThreeDCard"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <ThreeDCard />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4 text-[#FIC40F]">Welcome to My Portfolio</h1>
        <p className="mb-4 text-[#9859B6]">
          I&apos;m a passionate professional with a diverse set of skills and interests. From academic achievements to
          extracurricular activities, I strive for excellence in everything I do.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-[#5C4B8A] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-[#FIC40F]">Extracurricular Activities</h2>
          <p className="text-white">Explore my talents in singing, sports, art, and theatre.</p>
          <Link href="/extracurricular" className="text-[#FIC40F] hover:underline">
            Learn more
          </Link>
        </div>
        <div className="bg-[#5C4B8A] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-[#FIC40F]">Academic Achievements</h2>
          <p className="text-white">Discover my academic record and notable accomplishments.</p>
          <Link href="/academic" className="text-[#FIC40F] hover:underline">
            Learn more
          </Link>
        </div>
        <div className="bg-[#5C4B8A] p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-[#FIC40F]">Contact Me</h2>
          <p className="text-white">Get in touch for collaborations or opportunities.</p>
          <Link href="/contact" className="text-[#FIC40F] hover:underline">
            Contact now
          </Link>
        </div>
      </div>
    </div>
  )
}

