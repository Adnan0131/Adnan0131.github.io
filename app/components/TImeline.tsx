"use client"

import Image from "next/image"
import React from "react"
import { Timeline } from "@/components/ui/timeline"

export function TimelineComponent() {
  const data = [
    {
      title: "College Degree",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Bachelor of Computer Science
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Graduated with honors, specializing in AI and Machine Learning
          </p>
          <Image
            src="/college.jpg"
            alt="College"
            width={500}
            height={300}
            className="rounded-lg object-cover h-40 w-full shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Developed several key projects during my academic career
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">AI Chatbot</h3>
              <p className="text-xs">Natural language processing project</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Data Visualization Tool</h3>
              <p className="text-xs">Interactive dashboard for big data</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "High School",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Graduated with distinction
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Participated in various science fairs and coding competitions
          </p>
          <Image
            src="/high-school.jpg"
            alt="High School"
            width={500}
            height={300}
            className="rounded-lg object-cover h-40 w-full shadow-lg"
          />
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}

