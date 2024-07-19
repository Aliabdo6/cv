import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Cv = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/3 bg-gray-900 text-white p-8">
          <div className="mb-8">
            <img
              src="/me.jpg"
              alt="Ali Abdo"
              className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-blue-500 hover:border-blue-300 transition duration-300"
            />
            <h1 className="text-3xl font-bold text-center mb-2">
              Ali Abdo
            </h1>
            <h2 className="text-xl text-blue-400 text-center">
              Front-End Developer
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2">
              Contact
            </h3>
            <div className="flex items-center mb-3 hover:text-blue-400 transition duration-300">
              <FaEnvelope className="mr-3" />
              <span>aliabdo12121@outlook.sa</span>
            </div>
            <div className="flex items-center mb-3 hover:text-blue-400 transition duration-300">
              <FaPhone className="mr-3" />
              <span>+201090561644</span>
            </div>
            <div className="flex items-center mb-3 hover:text-blue-400 transition duration-300">
              <FaWhatsapp className="mr-3" />
              <span>+201090561644</span>
            </div>
            <div className="flex items-center mb-3 hover:text-blue-400 transition duration-300">
              <FaMapMarkerAlt className="mr-3" />
              <span>
                Damanhur, Al Buhayrah, Egypt
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2">
              Skills
            </h3>
            <ul className="list-disc list-inside">
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                JavaScript (ES6+)
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                React.js & Next.js
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                Python
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                Node.js & Express.js
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                HTML5 & CSS3
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                Tailwind CSS
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                Git & GitHub
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                Data Analysis
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                Machine Learning
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                scikit-learn
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                TensorFlow
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                Keras
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2">
              Languages
            </h3>
            <ul className="list-disc list-inside">
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                Arabic (Native)
              </li>
              <li className="mb-2 hover:text-blue-400 transition duration-300">
                English (Fluent)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-500 pb-2">
              Connect
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Aliabdo6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aliabdo6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/201090561644"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-400 transition duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-2/3 p-8">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Front-End Developer
              and Machine Learning Enthusiast with
              a deep love for crafting beautiful
              and intuitive web applications. My
              main focus is on leveraging powerful
              frameworks like Next.js to build
              dynamic, scalable, and performant
              web solutions. I'm driven by
              curiosity and a desire to tackle new
              challenges, continuously seeking
              opportunities to learn and grow in
              the ever-evolving tech landscape.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
              Work Experience
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
                Freelance Web Developer
              </h3>
              <p className="text-gray-600 italic">
                2022 - Present
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>
                  Developed and maintained web
                  applications using React.js,
                  Redux, TypeScript, and Next.js
                </li>
                <li>
                  Implemented responsive,
                  interactive, and accessible UI
                  components
                </li>
                <li>
                  Collaborated with clients to
                  understand requirements and
                  deliver high-quality solutions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Front-End Developer Intern at
                Udacity
              </h3>
              <p className="text-gray-600 italic">
                September 2022 - December 2022
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>
                  Completed a three-month
                  internship program as part of
                  the Professional Front-End Web
                  Development certification
                </li>
                <li>
                  Learned how to build web
                  applications using HTML, CSS,
                  JavaScript, and React.js
                </li>
                <li>
                  Completed four projects: a
                  personal portfolio, a landing
                  page, a weather app, and a blog
                  app
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
              Education
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
                Tanta University
              </h3>
              <p className="text-gray-600 italic">
                Bachelor of Law, 2018-2022
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Udacity
              </h3>
              <p className="text-gray-600 italic">
                Professional Front-End Web
                Development, December 2022
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  <a
                    href="https://github.com/Aliabdo6/next-social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Social Media Application
                  </a>
                </h3>
                <p className="text-gray-600">
                  A social media platform built
                  using Next.js, TypeScript, and
                  Tailwind CSS.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  <a
                    href="https://github.com/Aliabdo6/summarizer-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Article Summarizer
                  </a>
                </h3>
                <p className="text-gray-600">
                  Web app that summarizes articles
                  using OpenAI's GPT-4.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  <a
                    href="https://github.com/Aliabdo6/predicting-heart-disease-sklearn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Heart Disease Prediction
                  </a>
                </h3>
                <p className="text-gray-600">
                  Machine learning project for
                  predicting heart disease using
                  scikit-learn.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  <a
                    href="https://github.com/Aliabdo6/Pneumonia-Classifier-ml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    Pneumonia Detection
                  </a>
                </h3>
                <p className="text-gray-600">
                  Deep learning project for
                  classifying chest X-ray images
                  for pneumonia detection.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-2">
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/8D9N8FZ8YPZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Meta Front-End Developer
                  Professional Certificate
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.datacamp.com/completed/statement-of-accomplishment/track/b2edcc94eb447760d59fa9aa02bb64d9d423bdc0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Data Camp Data Analyst
                  Certificate
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.udacity.com/certificate/7PQQECPH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Udacity Professional Front-End
                  Web Developer Nanodegree
                </a>
              </li>
              <li>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/4G8H3HZ8H8XK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  IBM Back-End JavaScript
                  Developer Certificate
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cv;
