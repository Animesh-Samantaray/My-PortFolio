import React from 'react'
import anim from '../assets/anim.jpg'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Exp from './Exp.jsx'
import Project from './Project.jsx'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:flex-row-reverse">
        
        {/* Image First on Mobile */}
        <div className="w-full flex justify-center">
          <img
            src={anim}
            alt="Animesh Illustration"
            className="rounded-xl shadow-2xl w-[220px] md:w-[320px] lg:w-[400px] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6 md:max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm Animesh <span className="inline-block">🚀</span>
          </h1>
          <p className="text-xl md:text-3xl text-[#CBD5E1] font-semibold tracking-wide">
            React Frontend Developer • Java DSA  • Exploring AI/ML
          </p>
          <p className="text-md md:text-lg text-[#94A3B8] max-w-md leading-relaxed mx-auto md:mx-0">
            I build scalable and responsive web apps with React & Tailwind. Passionate about solving complex problems using Java and diving deep into AI/ML technology.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
            <button className="bg-[#7C3AED] text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
            onClick={()=>{navigate('/projects')}}>
              View Projects
            </button>
            <button
              className="border border-[#7C3AED] text-[#7C3AED] px-8 py-3 rounded-lg font-semibold hover:bg-[#7C3AED] hover:text-white transition-all shadow-md"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Resume.pdf";
                link.download = "Animesh_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
      <About></About>
      <Skills></Skills>
      <Exp></Exp>
      <Project></Project>
    </section>
  )
}

export default Hero
