export const websiteData = {
  personal: {
    name: 'Dipak Chaudhary',
    location: 'Bardiya, Nepal',
    phone: '+9779816504253',
    email: 'dc7090210@gmail.com',
    website: 'https://dipak-portfolio.vercel.app',
    github: 'https://github.com/Deepu59',
    linkedin: 'https://linkedin.com/in/dipak-chaudhari-48119140a',
    headline: 'Junior Full-Stack Developer',
    summary:
      'Junior Full-Stack Developer who enjoys turning everyday problems into clean, working software. I build complete web applications with React on the frontend and Java Spring Boot on the backend, backed by a solid grounding in data structures. Currently a BCA student and Education Officer in robotics, I love explaining ideas simply and I am looking for an internship where I can learn from a real team and ship real features.',
  },
  experience: [
    {
      title: 'Education Officer',
      company: 'SKYMYST Robotics Division',
      location: 'Nepal',
      period: 'Present',
      current: true,
      responsibilities: [
        'Teach robotics and electronics through hands-on, project-based sessions.',
        'Guide students from basic concepts to building and testing working models.',
        'Explain technical ideas clearly, a skill I now bring into software development.',
      ],
      technologies: ['Robotics', 'Electronics', 'Teaching'],
    },
  ],
  projects: [
    {
      name: 'Task Manager App',
      category: 'Full Stack Web Application',
      status: 'Personal Project',
      github: 'https://github.com/Deepu59/Task-Manager-App',
      technologies: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Java',
        'Spring Boot',
        'PostgreSQL',
      ],
      description: [
        'A full-stack planner for organizing tasks by date, tracking focus time, and reviewing monthly progress.',
        'Monthly calendar view to create, edit, complete, and delete tasks.',
        'Organizes work by category and priority, with search and light/dark themes.',
        'Built-in focus timer and monthly summary views.',
        'React 19 dashboard connected to a Spring Boot REST API with Spring Data JPA.',
        'H2 database for local development and PostgreSQL for hosted deployment; frontend on Vercel and backend on Render.',
      ],
    },
  ],
  skills: {
    languages: ['Java', 'JavaScript', 'HTML', 'CSS'],
    frontend: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    backend: ['Spring Boot', 'Spring Data JPA', 'REST APIs'],
    databases: ['PostgreSQL', 'H2'],
    tools: ['Git', 'GitHub', 'Maven', 'Vercel', 'Render'],
    fundamentals: ['Data Structures', 'Problem Solving', 'Robotics'],
  },
  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Nepalgunj Campus of Management and Technology',
      university: 'Tribhuvan University',
      location: 'Nepalgunj, Nepal',
      period: '6th semester · Expected completion 2084 BS',
      description:
        'Studying computer applications with a focus on programming, data structures, and building full-stack projects.',
    },
    {
      degree: 'Higher Secondary (+2)',
      institution: 'Nepal Rastriya Namuna Secondary School',
      university: 'NEB',
      location: 'Madhuwan-4, Dhodhari, Bardiya, Nepal',
      period: 'Completed',
      description: 'Completed higher secondary education with a GPA of 3.48.',
    },
  ],
};
