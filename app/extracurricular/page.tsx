import { ActivityCard } from "@/components/ActivityCard"

const activities = [
  {
    title: "Singer",
    description: "Performed at various events and competitions, winning several awards.",
    image: "/singer.jpg",
  },
  {
    title: "Sports Person",
    description: "Participated in basketball at the state level, achieving multiple victories.",
    image: "/sports.jpg",
  },
  {
    title: "Artist",
    description: "Created and exhibited artworks in oil painting, featured in local galleries.",
    image: "/artist.jpg",
  },
  {
    title: "Theatre Artist",
    description: "Performed in several plays, taking on lead roles in school productions.",
    image: "/theatre.jpg",
  },
]

export default function Extracurricular() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-[#FIC40F]">Extracurricular Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  )
}

