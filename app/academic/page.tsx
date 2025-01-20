const academicAchievements = [
    {
      title: "Bachelor of [Your Degree]",
      institution: "[University Name]",
      year: "20XX - 20XX",
      achievements: ["Graduated with First Class Honours", "GPA: X.XX/4.00", "Dean's List for all semesters"],
    },
    {
      title: "High School Diploma",
      institution: "[High School Name]",
      year: "20XX - 20XX",
      achievements: ["Valedictorian", "Perfect attendance record", "President of the Student Council"],
    },
  ]
  
  const projects = [
    {
      title: "[Project Name 1]",
      description: "Brief description of the project and your role.",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
    },
    {
      title: "[Project Name 2]",
      description: "Brief description of the project and your role.",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
    },
  ]
  
  export default function Academic() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Academic Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {academicAchievements.map((achievement, index) => (
              <div key={index} className="bg-[#5C4B8A] p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="text-[#FIC40F]">{achievement.institution}</p>
                <p className="text-sm mb-2">{achievement.year}</p>
                <ul className="list-disc list-inside">
                  {achievement.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="bg-[#5C4B8A] p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-[#9859B6] text-white px-2 py-1 rounded-full text-sm mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  