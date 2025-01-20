const activities = [
    {
      title: 'Activity 1',
      description: 'Description of Activity 1',
      date: 'January 2023',
    },
    {
      title: 'Activity 2',
      description: 'Description of Activity 2',
      date: 'March 2023',
    },
    {
      title: 'Activity 3',
      description: 'Description of Activity 3',
      date: 'June 2023',
    },
  ]
  
  export default function Activities() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Extracurricular Activities</h1>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{activity.title}</h2>
              <p className="text-gray-600 mb-2">{activity.description}</p>
              <p className="text-sm text-gray-500">{activity.date}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  