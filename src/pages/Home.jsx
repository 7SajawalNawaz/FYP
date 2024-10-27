import React from "react";
import { motion } from "framer-motion";
import qec from "../Assets/qec.png";

const Home = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering children animation
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const parallaxVariants = {
    hidden: { y: 0 },
    visible: { y: [0, -10], transition: { duration: 5, repeat: Infinity, repeatType: "reverse" } },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 pr-3 text-center rounded-2xl">
        <div className="mt-2 w-full mr-1 pr-1 sm:px-6 md:px-10 lg:px-16">
          {/* Parallax and Fade-In Image and Text Container */}
          <motion.div
            className="relative text-center text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.img
              src={qec}
              alt="qec"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[40rem] object-cover rounded-3xl"
              variants={imageVariants}
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-5 rounded-3xl"
              variants={parallaxVariants}
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Welcome to Directorate of Quality Enhancement , Abbottabad UST
              </motion.h1>
              <motion.p
                className="text-sm sm:text-lg md:text-xl"
                variants={textVariants}
              >
                Establishment of quality assurance system in higher education is
                a global concern now. There is a growing demand for Quality
                Assurance (QA) mechanisms at national, regional and global levels.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Vision Section with Hover Effect */}
          <motion.div
            className="mt-10 mb-5 hover:scale-105 transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="bg-purple-900 text-white px-3 py-2 rounded text-sm sm:text-lg md:text-xl">
              VISION
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              To be recognized as the leading educational institution, instilling and pursuing
              the highest quality assurance practices, both nationally and internationally.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="mb-5 hover:scale-105 transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="bg-purple-900 text-white px-3 py-2 rounded text-sm sm:text-lg md:text-xl">
              MISSION
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              Incorporating continuous quality improvement in teaching, student learning, 
              and administrative support mechanisms.
            </p>
          </motion.div>

          {/* AIM Section */}
          <motion.div
            className="mb-5 hover:scale-105 transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="bg-purple-900 text-white px-3 py-2 rounded text-sm sm:text-lg md:text-xl">
              AIM
            </h2>
            <table className="mt-2 w-full border-collapse text-xs sm:text-sm md:text-base">
              <tbody>
                <tr className="border border-gray-300">
                  <td className="p-2">Teacher Empowerment</td>
                  <td className="p-2">Student Centricity</td>
                  <td className="p-2">Programmatic Improvements</td>
                </tr>
                <tr className="border border-gray-300">
                  <td className="p-2">Faculty Development & Capacity Building</td>
                  <td className="p-2">Student Counseling</td>
                  <td className="p-2">PEOs definition by involving stakeholders</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Strategy Section */}
          <motion.div
            className="mb-5 hover:scale-105 transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="bg-purple-900 text-white px-3 py-2 rounded text-sm sm:text-lg md:text-xl">
              STRATEGY
            </h2>
            <table className="mt-2 w-full border-collapse text-xs sm:text-sm md:text-base">
              <tbody>
                <tr className="border border-gray-300">
                  <td className="p-2">Faculty Course Review Reports</td>
                  <td className="p-2">Student Course Feedback</td>
                  <td className="p-2">PLO’s Assessment</td>
                </tr>
                <tr className="border border-gray-300">
                  <td className="p-2">Faculty Satisfaction Survey</td>
                  <td className="p-2">Research, Design & Innovation</td>
                  <td className="p-2">CLO’s Assessment</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="mb-5 hover:scale-105 transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="bg-purple-900 text-white px-3 py-2 rounded text-sm sm:text-lg md:text-xl">
              VALUES
            </h2>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Value 1 */}
              <motion.li
                className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4 hover:bg-purple-50"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-purple-900"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm0 4c-1.1 0-2 .9-2 2v3h4v-3c0-1.1-.9-2-2-2zm0-12C6.48 0 2 4.48 2 10c0 4.92 5.1 9.27 10.1 13.95a.996.996 0 001.8 0C16.9 19.27 22 14.92 22 10c0-5.52-4.48-10-10-10z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Teacher Efficiency</h3>
                  <p className="text-gray-600 text-sm">Ensuring that educators have the tools and resources to excel.</p>
                </div>
              </motion.li>

              {/* Value 2 */}
              <motion.li
                className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4 hover:bg-purple-50"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-purple-900"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 10l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Student Learning & Support</h3>
                  <p className="text-gray-600 text-sm">Prioritizing student learning outcomes and support services.</p>
                </div>
              </motion.li>

              {/* Value 3 */}
              <motion.li
                className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4 hover:bg-purple-50"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-purple-900"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-8 9a8 8 0 1116 0v4H8v-4z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Professional & Caring Administration</h3>
                  <p className="text-gray-600 text-sm">Fostering an environment of professionalism and empathy in all administrative processes.</p>
                </div>
              </motion.li>

              {/* Value 4 */}
              <motion.li
                className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4 hover:bg-purple-50"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-purple-900"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Transparency in Operations</h3>
                  <p className="text-gray-600 text-sm">Encouraging open communication and clear decision-making processes.</p>
                </div>
              </motion.li>

              {/* Value 5 */}
              <motion.li
                className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4 hover:bg-purple-50"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-purple-900"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h18M9 9h6M3 15h18"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Accountability</h3>
                  <p className="text-gray-600 text-sm">Ensuring all members are accountable for their roles in the institution's success.</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          <footer className="bg-gray-800 text-white py-4 mt-8 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abbottabad University. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="/privacy-policy" className="text-white hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="text-white hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact-us" className="text-white hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
