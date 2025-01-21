"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function ActivityCard({ title, description, image }: { title: string; description: string; image: string }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <motion.div
      className="border border-[#5C4B8A] flex flex-col items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[30rem] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-[#FIC40F]">{title}</h2>
      <div className="relative w-full h-64 mb-4">
        <Image src={image || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <motion.p
        className="text-[#9859B6] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

