import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description:
        'A responsive admin dashboard for an e-commerce platform with data visualization, inventory management, and user authentication.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      demoLink: '#',
      codeLink: '#',
      technologies: [
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
        },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
      ],
    },
    {
      id: 2,
      title: 'Recipe Finder App',
      description:
        'A mobile-responsive web application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.',
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      demoLink: '#',
      codeLink: '#',
      technologies: [
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
      ],
    },
    {
      id: 3,
      title: 'Task Management Platform',
      description:
        'A full-stack application for project management with features like task assignment, progress tracking, and team collaboration.',
      image:
        'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      demoLink: '#',
      codeLink: '#',
      technologies: [
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <FaNode className="text-[#339933]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="card overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-light hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-light hover:text-white transition-colors"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
