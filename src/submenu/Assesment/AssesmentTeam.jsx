import React from 'react';
import { motion } from 'framer-motion';

// Team picture URL
const teamPicture = "/Images/training1.jpg"; // Replace with actual team picture URL

// Faculty members data
const facultyMembers = [
  { 
    id: 1, 
    name: 'Dr Muhammad Naeem', 
    position: 'Professor of Computer Science', 
    description: 'Dr. Muhammad Naeem has been a faculty member for over 15 years. He specializes in AI and has published over 50 research papers in top-tier journals. His recent research focuses on developing algorithms for deep learning models and their application in healthcare. He is also a keynote speaker at various international conferences.'
  },
  { 
    id: 2, 
    name: 'Dr Ahmed Khan', 
    position: 'Assistant Professor of Mechanical Engineering', 
    description: 'Dr. Ahmed Khan has been recognized for his groundbreaking research in thermodynamics and has multiple patents related to renewable energy systems. He has been instrumental in mentoring graduate students and has received several teaching awards for his work.'
  },
  { 
    id: 3, 
    name: 'Dr Asim Shehzad', 
    position: 'Lecturer in Business Administration', 
    description: 'Dr. Asim Shehzad focuses on leadership development, business strategy, and organizational behavior. He is known for his engaging lectures and has worked as a consultant with several multinational companies to develop strategic management frameworks.'
  },
];

// Animation Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const AssesmentTeam = () => {
  return (
    <div className="min-h-screen pt-10 mr-2 flex flex-col justify-between p-4 sm:p-8 lg:p-12 bg-gradient-to-r from-purple-100 to-purple-300">
      <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Team Picture */}
        <img 
          src={teamPicture} 
          alt="Assessment Team" 
          className="w-full h-auto object-cover"
        />
        
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-purple-800 mb-2">Our Assessment Team</h1>
          <p className="text-gray-600">Committed to excellence in education and student support.</p>
        </div>

        {/* Faculty Members */}
        <div className="p-4 space-y-4">
          {facultyMembers.map((faculty) => (
            <motion.div 
              key={faculty.id} 
              className="bg-purple-50 p-4 rounded-lg shadow-md border border-purple-200"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-xl font-semibold text-purple-800">{faculty.name}</h2>
              <p className="text-md text-purple-600">{faculty.position}</p>
              <p className="text-sm text-gray-500 mt-2">
                {faculty.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer with a subtle line */}
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
  );
};

export default AssesmentTeam;
