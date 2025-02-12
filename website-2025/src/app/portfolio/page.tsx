export default function Portfolio() {
    const projects = [
      {
        id: 1,
        title: 'Project 1',
        description: 'A short description of Project 1.',
        image: '/project1.jpg',
        link: '/projects/project1',
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'A short description of Project 2.',
        image: '/project2.jpg',
        link: '/projects/project2',
      },
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <a href={project.link} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }