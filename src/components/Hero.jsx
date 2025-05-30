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
    <>
      <style>{`
        .glow-leetcode {
          color: #fbbf24; /* amber */
          text-shadow:
            0 0 3px #fbbf24,
            0 0 6px #f59e0b,
            0 0 10px #d97706,
            0 0 15px #b45309;
        }
        .glow-github {
          color: #3b82f6; /* blue */
          text-shadow:
            0 0 3px #3b82f6,
            0 0 6px #2563eb,
            0 0 10px #1d4ed8,
            0 0 15px #1e40af;
        }
        .profile-logo {
          height: 20px;
          width: 20px;
          filter: drop-shadow(0 0 2px rgba(0,0,0,0.3));
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>

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
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I'm Animesh <span className="inline-block">🚀</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#CBD5E1] font-semibold tracking-wide">
              React Frontend Developer • Java DSA  • Exploring AI/ML
            </p>
            <p className="text-sm md:text-base text-[#94A3B8] max-w-md leading-relaxed mx-auto md:mx-0">
              I build scalable and responsive web apps with React & Tailwind. Passionate about solving complex problems using Java and diving deep into AI/ML technology.
            </p>
            
            {/* Profiles Links */}
            <div className="mt-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
              
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Animesh_Samantaray/"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-leetcode text-sm md:text-lg font-bold tracking-wide flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode Logo"
                  className="profile-logo animate-pulse-slow"
                />
                Check out my LeetCode profile
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Animesh-Samantaray"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-github text-sm md:text-lg font-bold tracking-wide flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub Logo"
                  className="profile-logo animate-pulse-slow"
                />
                Check out my GitHub profile
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
              <button
                className="bg-[#7C3AED] text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg"
                onClick={() => {
                  navigate('/contact');
                }}
              >
                Contact me
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
        <About />
        <Skills />
        <Exp />
        <Project />
      </section>
    </>
  )
}

export default Hero
