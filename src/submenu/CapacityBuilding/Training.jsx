import React from "react";

const trainingsData = [
  {
    title: "Leadership Training",
    date: "November 15, 2024",
    description: "An in-depth training on leadership skills and team management techniques for students.",
    image: "https://source.unsplash.com/600x400/?leadership,team",
  },
  {
    title: "Project Management Essentials",
    date: "December 8, 2024",
    description: "Learn the fundamentals of project management, including planning, execution, and monitoring.",
    image: "https://source.unsplash.com/600x400/?project,management",
  },
  {
    title: "AI & Machine Learning Bootcamp",
    date: "January 12, 2025",
    description: "A hands-on bootcamp focusing on AI and machine learning basics using Python and TensorFlow.",
    image: "https://source.unsplash.com/600x400/?AI,technology",
  },
  {
    title: "Public Speaking Workshop",
    date: "February 18, 2025",
    description: "Improve your public speaking skills and learn to engage audiences confidently.",
    image: "https://source.unsplash.com/600x400/?public,speaking",
  },
];

const Training = () => {
  return (
    <>
      <div className="min-h-screen mt-10 mr-4 rounded-2xl bg-gradient-to-r from-purple-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center mb-12">University Training Programs</h1>

          {trainingsData.map((training, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundImage: `url(${training.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="bg-gradient-to-b from-transparent to-purple-400 opacity-90 p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl font-bold mb-2 text-white">{training.title}</h2>
                <p className="text-lg font-medium mb-4 text-purple-200">{training.date}</p>
                <p className="mb-4 text-gray-200">{training.description}</p>
                <button className="bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all hover:bg-purple-700 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-4 mt-8 rounded-xl">
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

export default Training;
