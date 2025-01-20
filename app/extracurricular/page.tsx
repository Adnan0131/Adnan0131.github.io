import Image from "next/image"

const activities = [
  {
    title: "Singer",
    description: "Performed at various events and competitions, winning [mention any awards].",
    image: "/singer.jpg",
  },
  {
    title: "Sports Person",
    description: "Participated in [mention sports] at [mention level], achieving [mention achievements].",
    image: "/sports.jpg",
  },
  {
    title: "Artist",
    description: "Created and exhibited artworks in [mention mediums], featured in [mention exhibitions if any].",
    image: "/artist.jpg",
  },
  {
    title: "Theatre Artist",
    description: "Performed in [mention plays], taking on roles such as [mention significant roles].",
    image: "/theatre.jpg",
  },
]

export default function Extracurricular() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Extracurricular Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-[#5C4B8A] p-4 rounded-lg flex flex-col md:flex-row items-center">
            <Image
              src={activity.image || "/placeholder.svg"}
              alt={activity.title}
              width={200}
              height={200}
              className="rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div>
              <h2 className="text-xl font-bold mb-2">{activity.title}</h2>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

