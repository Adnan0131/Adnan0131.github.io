import Image from 'next/image'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    image: '/project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/project2.jpg',
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3',
    image: '/project3.jpg',
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

