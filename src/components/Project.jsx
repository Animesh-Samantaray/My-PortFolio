import React from 'react'

const projects = [
  {
    title: "TechHub e-learning Platform",
    desc: "An educational website mockup designed to promote workshops in AI, Web Dev, and more. Built during a web internship using TailwindCSS and React.",
    tech: "React, TailwindCSS",
    link: "https://tech-hub-pvt-ltd.vercel.app/"
  },
  {
    title: "Movie Recommendation System",
    desc: "A recommendation system that suggests movies based on user preferences using content-based filtering and similarity scores. Built with Python and Streamlit for an interactive web interface.",
    tech: "Python, Streamlit, Pandas, Scikit-learn",
    link: "https://movierecommend-8ayh6vbuorbh7uytq6bgse.streamlit.app/"
  },
  {
    title: "Online Chat App",
    desc: "A real-time chat application built using Node.js, Express, EJS, CSS, and MongoDB. Supports multiple users and chat rooms with seamless messaging.",
    tech: "Node.js, Express, EJS, CSS, MongoDB",
    link: "https://github.com/Animesh-Samantaray/chat-app"
  },
  {
    title: "Email Spam Classifier",
    desc: "A machine learning-based email spam classifier that identifies spam emails using NLP and vectorization techniques. Built in Python with a focus on text preprocessing and model evaluation.",
    tech: "Python, Scikit-learn, NLP, Pickle",
    link: "https://github.com/Animesh-Samantaray/spam-mail-classifier.git"
  },
  {
    title: "iNotebook - Fullstack Notebook App",
    desc: "A fullstack note-taking web application built with the MERN stack and styled with TailwindCSS. Allows users to create, edit, and delete notes with secure authentication.",
    tech: "MongoDB, Express, React, Node.js, TailwindCSS",
    link: "https://github.com/Animesh-Samantaray/iNoteBook.git"
  },
  {
    title: "Weather App",
    desc: "A real-time weather application that fetches data using an external API and displays temperature, humidity, and location-specific weather information. Note: UI not fully responsive.",
    tech: "HTML, CSS, JavaScript, Weather API",
    link: "https://the-weather-app-r9m5.vercel.app/"
  },
  {
    title: "Notes App",
    desc: "A modern notes-taking web app to create, update, and delete notes. Clean UI with local storage support for data persistence.",
    tech: "React, TailwindCSS",
    link: "https://note-app-git-main-animesh-samantarays-projects.vercel.app/"
  },
  {
    title: "Currency Converter",
    desc: "A lightweight web app to convert currency values in real-time using exchange rate APIs. Handy tool for travelers and finance folks.",
    tech: "HTML, CSS, JavaScript, ExchangeRate API",
    link: "https://currency-git-main-animesh-samantarays-projects.vercel.app/"
  },
  {
    title: "To-Do List",
    desc: "A simple and responsive to-do app with add and delete functionality. Helps you stay productive and organized.",
    tech: "HTML, CSS, JavaScript",
    link: "https://todolist-beta-beryl.vercel.app/"
  },
  {
    title: "Calculator",
    desc: "A sleek calculator app for basic arithmetic operations. Fast, functional, and built with simplicity in mind.",
    tech: "HTML, CSS, JavaScript",
    link: "https://calculatebabe-git-main-animesh-samantarays-projects.vercel.app/"
  }
]

const Project = () => {
  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] py-12 px-4 sm:px-6 md:px-20 lg:px-32 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="
                bg-[#1E293B] rounded-lg border-2 border-[#38bdf8]
                shadow-md hover:shadow-[0_0_32px_8px_#38bdf8,0_0_16px_4px_#38bdf8]
                hover:scale-105 transition-transform duration-300
                flex flex-col p-6 h-64 w-64
              "
            >
              {/* Tech Badge */}
              <span className="text-xs text-[#0F172A] bg-[#38bdf8] px-2 py-1 rounded-full font-semibold mb-2 self-start">
                {proj.tech}
              </span>
              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold mb-1 line-clamp-2">{proj.title}</h2>
              {/* Description */}
              <p className="text-[#94A3B8] text-sm mb-4 line-clamp-3 flex-1">{proj.desc}</p>
              {/* Link */}
              <a
                href={proj.link}
                className="text-sm text-[#38bdf8] underline hover:text-[#0ea5e9] mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
