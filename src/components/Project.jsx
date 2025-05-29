import React from 'react'

const projects = [
  {
    title: "3Skill E-Learning Platform",
    desc: "An educational website mockup designed to promote workshops in AI, Web Dev, and more. Built during a web internship using TailwindCSS and React.",
    tech: "React, TailwindCSS",
    link: "https://3skill-by-animeshsamantaray18.vercel.app/"
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
  },
  
];

const Project = () => {
  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] py-12 px-2 sm:px-6 md:px-20 lg:px-32 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`
                bg-[#1E293B]
                p-5
                rounded-lg border-2 border-[#38bdf8]
                shadow-[0_0_24px_4px_#38bdf8]/40
                transition-shadow  duration-300
                hover:shadow-[0_0_48px_16px_#38bdf8,0_0_32px_8px_#38bdf8]
                hover:border-[#38bdf8]
                hover:scale-105
                flex flex-col
                min-h-[180px]
              `}
            >
              <h2 className="text-xl font-bold mb-2">{proj.title}</h2>
              <p className="text-[#94A3B8] mb-3">{proj.desc}</p>
              <div className="mt-auto flex flex-col gap-2">
                <span className="text-xs text-[#38bdf8] font-semibold">{proj.tech}</span>
                <a
                  href={proj.link}
                  className="text-sm text-[#38bdf8] underline hover:text-[#0ea5e9] transition"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project