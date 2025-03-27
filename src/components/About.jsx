import { motion } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFigma } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Node.js', icon: <FaNode className="text-[#339933]" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-light to-secondary-light rounded-2xl blur-lg opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                alt="Working on laptop"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Crafting digital experiences with code and creativity
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate web developer currently pursuing my degree in
              Computer Science. My journey in web development started 3 years
              ago when I built my first website, and I've been hooked ever
              since.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              I specialize in creating responsive, user-friendly websites and
              applications. When I'm not coding, you'll find me exploring new
              technologies, contributing to open-source projects, or sketching
              UI designs.
            </p>

            <div>
              <h4 className="text-xl font-semibold mb-4">My Skills</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
