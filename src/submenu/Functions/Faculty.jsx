import React from 'react';
import { motion } from 'framer-motion';

const facultyMembers = [
  { 
    id: 1, 
    name: 'Dr Muhammad Naeem', 
    position: 'Professor of Computer Science', 
    description: 'Dr. Muhammad Naeem has been a faculty member for over 15 years. He specializes in AI and has published over 50 research papers in top-tier journals. His recent research focuses on developing algorithms for deep learning models and their application in healthcare. He is also a keynote speaker at various international conferences.', 
    images: [
      'https://via.placeholder.com/150', 
      'https://via.placeholder.com/150', 
      'https://via.placeholder.com/150'
    ]
  },
  { 
    id: 2, 
    name: 'Dr Ahmed Khan', 
    position: 'Assistant Professor of Mechanical Engineering', 
    description: 'Dr. Ahmed Khan has been recognized for his groundbreaking research in thermodynamics and has multiple patents related to renewable energy systems. He has been instrumental in mentoring graduate students and has received several teaching awards for his work.', 
    images: [
      'https://via.placeholder.com/150', 
      'https://via.placeholder.com/150', 
      'https://via.placeholder.com/150'
    ]
  },
  { 
    id: 3, 
    name: 'Dr Asim Shehzad', 
    position: 'Lecturer in Business Administration', 
    description: 'Dr. Asim Shehzad focuses on leadership development, business strategy, and organizational behavior. He is known for his engaging lectures and has worked as a consultant with several multinational companies to develop strategic management frameworks.', 
    images: [
      'https://via.placeholder.com/150', 
      'https://via.placeholder.com/150', 
      'https://via.placeholder.com/150'
    ]
  },
];

// Animation Variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Faculty = () => {
  return (
    <div className="pt-10 rounded-xl min-h-screen p-4 sm:p-8 lg:p-12 bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-6" 
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Faculty Training
        </motion.h1>
        
        <div className="space-y-8">
          {facultyMembers.map((faculty) => (
            <motion.div 
              key={faculty.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-purple-200 space-y-4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Faculty Info */}
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold text-purple-800">{faculty.name}</h2>
                  <p className="text-md text-purple-600">{faculty.position}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {faculty.description}
                  </p>
                </div>
                
                {/* Faculty Images */}
                <div className="grid grid-cols-3 gap-2">
                  {faculty.images.map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`Faculty ${faculty.name} ${index + 1}`} 
                      className="w-full h-auto object-cover rounded-lg shadow-sm"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
  );
};

export default Faculty;
