import { motion } from 'framer-motion';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="relative mb-4">
              <span className="bg-gradient-to-r from-primary-light to-secondary-light text-white text-sm font-medium px-4 py-2 rounded-full">
                Aspiring AI/ML Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-light to-secondary-light text-transparent bg-clip-text">
                Faisal Hasan
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              An aspiring AI/ML engineer with a passion for leveraging
              data-driven insights to build intelligent systems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                Explore My Projects
              </a>
              <a
                href="#contact"
                className="py-3 px-6 border-2 border-primary-light text-primary-light dark:text-primary-light font-medium rounded-lg transition duration-300 hover:bg-primary-light hover:text-white dark:hover:text-white"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 mt-8"
            >
              <a
                href="https://github.com/leofaisal809"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.instagram.com/faisal.hasan__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:faisalhs809@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
              >
                <HiOutlineMail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light to-secondary-light rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-card-light dark:bg-card-dark rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl h-64 w-64 sm:h-80 sm:w-80">
                  <img
                    src="/Faisal.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'sepia(2) hue-rotate(281deg) saturate(2)',
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
