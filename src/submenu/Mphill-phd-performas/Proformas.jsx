import React from "react";
import { motion } from "framer-motion";


const DownloadForms = () => {
  const forms = [
    { name: "Form 1: Program Summary", path: "/forms/PS.docx" },
    { name: "Form 2: Program Detailed Information", path: "/forms/PD-information.docx" },
    { name: "Form 3: Program Faculty Information (For MS)", path: "/forms/PF-information(M-Phill).docx" },
    { name: "Form 4: Program Faculty Information (For PhD)", path: "/forms/PF-information.docx" },
    { name: "Form 5: Student Information (MS equivalent)", path: "/forms/SI(MS-Mphill).docx" },
    { name: "Form 6: Student Information (PhD)", path: "/forms/StudentInformation(PhD).docx" },
    { name: "Form 6A: Graduated Student Information (MS)", path: "/forms/PGPR-6-A.docx" },
    { name: "Form 6B: Graduated Student Information (PhD)", path: "/forms/PGPR-6-B.docx" },
  ];

  const additionalForms = [
    { name: "Form 1", path: "/forms/Form1.docx" },
    { name: "Form 2", path: "/forms/Form2.docx" },
    { name: "Form 2.0", path: "/forms/Form3.docx" },
    { name: "Form 2.1", path: "/forms/Form4.docx" },
    { name: "Form 2.2", path: "/forms/Form5.docx" },
    { name: "Form 2.3", path: "/forms/Form6.docx" },
    { name: "Form 2.4", path: "/forms/Form7.docx" },
    { name: "Form 2.5", path: "/forms/Form8.docx" },
    { name: "Form 2.6", path: "/forms/Form9.docx" },

  ];

  // Animation variants for motion.div
  const listVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mr-4">
    <div className="container mx-auto py-8 px-4 bg-gradient-to-r from-purple-100 to-purple-200 min-h-screen rounded-lg pt-20">
      <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">
        MS/MPhil & PhD Programs Review
      </h1>

      <p className="mb-6 text-black text-base text-center max-w-3xl mx-auto">
        The quality of Masters and PhD programs is peer-reviewed according to
        HEC criteria. Below, you can find downloadable forms for the program
        review.
      </p>

      {/* First List of Forms */}
      <ul className="space-y-6 max-w-3xl mx-auto mb-10">
        {forms.map((form, index) => (
          <motion.li
            key={index}
            className="border p-4 rounded-md bg-purple-100 hover:bg-purple-200 shadow-md flex justify-between items-center"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-black text-sm font-semibold">
              {form.name}
            </span>
            <a
              href={form.path}
              download
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition-all duration-300 font-semibold"
            >
              Download
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Second List of Additional Forms */}
      <h2 className="text-2xl font-semibold text-purple-800 mb-4 text-center">
        Individual Forms in Document Format
      </h2>
      <ul className="space-y-6 max-w-3xl mx-auto">
        {additionalForms.map((form, index) => (
          <motion.li
            key={index}
            className="border p-4 rounded-md bg-purple-100 hover:bg-purple-200 shadow-md flex justify-between items-center"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-black text-sm font-semibold">
              {form.name}
            </span>
            <a
              href={form.path}
              download
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition-all duration-300 font-semibold"
            >
              Download
            </a>
          </motion.li>
        ))}
      </ul>
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

    
  );
};

export default DownloadForms;
