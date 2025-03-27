import { motion } from 'framer-motion';
import {
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';
import { LuBrain } from 'react-icons/lu';

const About = () => {
  const skills = [
    { name: 'Python', icon: <SiPython className="text-[#306998]" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" /> },
    {
      name: 'Scikit-Learn',
      icon: <SiScikitlearn className="text-[#FEDD00]" />,
    },
    { name: 'Pandas', icon: <SiPandas className="text-[#f6b832]" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-[#4ba6c9]" /> },
    {
      name: 'Deep Learning',
      icon: <LuBrain className="text-[#FF4500]" />,
    },
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
              Merging Data Science with Machine Learning Innovation
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              I am an aspiring AI/ML engineer with a strong foundation in data
              analysis and machine learning. With hands-on experience in Python
              and various ML frameworks, I strive to create intelligent systems
              that turn raw data into actionable insights.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              My journey into AI began with real-world data projects, gradually
              enhancing my skills in model building, training, and deployment. I
              am eager to push technology forward with innovative AI solutions.
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
                    className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-center text-sm font-medium">
                      {skill.name}
                    </span>
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
