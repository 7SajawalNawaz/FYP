import React from 'react';
import { motion } from 'framer-motion';

const departmentsData = [
  {
    name: "Microbiology",
    contact: {
      office: "Management Sciences Block – AUST",
      phone: "+92 992 811744",
      email: "hodmicrobiology@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. John Doe",
      message: "Welcome to the Department of Microbiology. We aim to foster an environment that promotes research and academic excellence.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/microbiology" },
      { label: "Research Publications", url: "https://aust.edu/microbiology/research" },
      { label: "Student Resources", url: "https://aust.edu/microbiology/resources" },
    ],
  },
  {
    name: "Food Science and Technology",
    contact: {
      office: "Food Science Block – AUST",
      phone: "+92 992 811745",
      email: "hodfoodscience@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Alice Green",
      message: "Our department focuses on the science behind food and its technology.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/foodscience" },
      { label: "Research Publications", url: "https://aust.edu/foodscience/research" },
      { label: "Student Resources", url: "https://aust.edu/foodscience/resources" },
    ],
  },
  {
    name: "Medical Lab Technology",
    contact: {
      office: "Medical Block – AUST",
      phone: "+92 992 811746",
      email: "hodmedicallab@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Bob White",
      message: "Explore the vital role of medical lab technologies in healthcare.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/medicallab" },
      { label: "Research Publications", url: "https://aust.edu/medicallab/research" },
      { label: "Student Resources", url: "https://aust.edu/medicallab/resources" },
    ],
  },
  {
    name: "Pharmacy D",
    contact: {
      office: "Pharmacy Block – AUST",
      phone: "+92 992 811747",
      email: "hodpharmacy@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Carol Smith",
      message: "Join us to delve into the world of pharmaceuticals and healthcare.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/pharmacy" },
      { label: "Research Publications", url: "https://aust.edu/pharmacy/research" },
      { label: "Student Resources", url: "https://aust.edu/pharmacy/resources" },
    ],
  },
  {
    name: "Biochemistry",
    contact: {
      office: "Biochemistry Block – AUST",
      phone: "+92 992 811748",
      email: "hodbiochemistry@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Frank Miller",
      message: "Discover the biochemical processes that govern life.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/biochemistry" },
      { label: "Research Publications", url: "https://aust.edu/biochemistry/research" },
      { label: "Student Resources", url: "https://aust.edu/biochemistry/resources" },
    ],
  },
  {
    name: "Mathematics",
    contact: {
      office: "Math Block – AUST",
      phone: "+92 992 811749",
      email: "hodmathematics@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Grace Lee",
      message: "Engage with the beauty and logic of mathematics with us.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/mathematics" },
      { label: "Research Publications", url: "https://aust.edu/mathematics/research" },
      { label: "Student Resources", url: "https://aust.edu/mathematics/resources" },
    ],
  },
  {
    name: "Chemistry",
    contact: {
      office: "Chemistry Block – AUST",
      phone: "+92 992 811750",
      email: "hodchemistry@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Emily Davis",
      message: "Join us to explore the fascinating world of chemistry and its applications.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/chemistry" },
      { label: "Research Publications", url: "https://aust.edu/chemistry/research" },
      { label: "Student Resources", url: "https://aust.edu/chemistry/resources" },
    ],
  },
  {
    name: "Computer Science",
    contact: {
      office: "CS Block – AUST",
      phone: "+92 992 811751",
      email: "hodcs@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Alan Turing",
      message: "Delve into the world of technology and computer science with our innovative programs.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/computer-science" },
      { label: "Research Publications", url: "https://aust.edu/computer-science/research" },
      { label: "Student Resources", url: "https://aust.edu/computer-science/resources" },
    ],
  },
  {
    name: "Physics",
    contact: {
      office: "Physics Block – AUST",
      phone: "+92 992 811752",
      email: "hodphysics@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Isaac Newton",
      message: "Explore the fundamental principles that govern the universe.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/physics" },
      { label: "Research Publications", url: "https://aust.edu/physics/research" },
      { label: "Student Resources", url: "https://aust.edu/physics/resources" },
    ],
  },
  {
    name: "Earth and Environmental Science",
    contact: {
      office: "Earth Science Block – AUST",
      phone: "+92 992 811753",
      email: "hodearthscience@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. John Muir",
      message: "Join us in exploring our planet's processes and resources.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/earth-science" },
      { label: "Research Publications", url: "https://aust.edu/earth-science/research" },
      { label: "Student Resources", url: "https://aust.edu/earth-science/resources" },
    ],
  },
  {
    name: "Zoology",
    contact: {
      office: "Zoology Block – AUST",
      phone: "+92 992 811754",
      email: "hodzoology@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Charles Darwin",
      message: "Discover the diversity of animal life with us.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/zoology" },
      { label: "Research Publications", url: "https://aust.edu/zoology/research" },
      { label: "Student Resources", url: "https://aust.edu/zoology/resources" },
    ],
  },
  {
    name: "Botany",
    contact: {
      office: "Botany Block – AUST",
      phone: "+92 992 811755",
      email: "hodbotany@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Gregor Mendel",
      message: "Explore the science of plant life and its ecological importance.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/botany" },
      { label: "Research Publications", url: "https://aust.edu/botany/research" },
      { label: "Student Resources", url: "https://aust.edu/botany/resources" },
    ],
  },
  {
    name: "Statistics",
    contact: {
      office: "Statistics Block – AUST",
      phone: "+92 992 811756",
      email: "hodstatistics@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Florence Nightingale",
      message: "Join us to learn about data analysis and statistical methods.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/statistics" },
      { label: "Research Publications", url: "https://aust.edu/statistics/research" },
      { label: "Student Resources", url: "https://aust.edu/statistics/resources" },
    ],
  },
  {
    name: "Economics",
    contact: {
      office: "Economics Block – AUST",
      phone: "+92 992 811757",
      email: "hodeconomics@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Adam Smith",
      message: "Explore economic theories and their applications.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/economics" },
      { label: "Research Publications", url: "https://aust.edu/economics/research" },
      { label: "Student Resources", url: "https://aust.edu/economics/resources" },
    ],
  },
  {
    name: "Management Sciences",
    contact: {
      office: "Management Sciences Block – AUST",
      phone: "+92 992 811758",
      email: "hodmanagement@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr. Michael Porter",
      message: "Our department focuses on developing managerial skills and business acumen in our students.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/management" },
      { label: "Research Publications", url: "https://aust.edu/management/research" },
      { label: "Student Resources", url: "https://aust.edu/management/resources" },
    ],
  },
];

const Departments = () => {
  return (
    <>
    <div className="flex flex-col pt-14 mr-5 items-center justify-center bg-gradient-to-r from-purple-100 to-purple-200 min-h-screen p-8 rounded-2xl">
      {departmentsData.map((department, index) => (
        <motion.div
          key={index}
          className="w-full max-w-3xl p-6 mb-6 bg-white rounded-lg shadow-lg border border-purple-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-purple-700 text-center mb-6">
            Department of {department.name}
          </h1>

          <div className="bg-purple-50 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold text-purple-600">Contact Info</h2>
            <p><strong>Office:</strong> {department.contact.office}</p>
            <p><strong>Phone:</strong> {department.contact.phone}</p>
            <p>
              <strong>Email:</strong> 
              <a href={`mailto:${department.contact.email}`} className="text-purple-500 hover:underline">
                {department.contact.email}
              </a>
            </p>
            <p><strong>Hours:</strong> {department.contact.hours}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg shadow-md mb-4 flex items-center">
            <img
              src={department.chairman.image}
              alt={department.chairman.name}
              className="w-24 h-24 object-cover rounded-full border-2 border-purple-600 mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold text-purple-600">{department.chairman.name}</h2>
              <p><strong>Message:</strong> "{department.chairman.message}"</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600">Important Links</h2>
            <ul className="list-disc pl-5 space-y-2">
              {department.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-purple-500 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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
    </>
  );
};

export default Departments;