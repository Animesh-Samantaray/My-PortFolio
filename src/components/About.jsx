import React from "react";

const About = () => {
  return (
    <section className="bg-[#0F172A] flex justify-center items-center py-20 px-4 sm:px-6 md:px-16 lg:px-24 min-h-screen">
      {/* Single Wide Card */}
      <div className="bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] rounded-3xl shadow-2xl w-full max-w-5xl p-10 md:p-14 space-y-10">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#61dafb] via-[#a855f7] to-[#22c55e]">
            Hey, I’m Animesh
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-[#CBD5E1]">
            I’m a <span className="font-bold text-[#61dafb]">MERN Stack</span> &{" "}
            <span className="font-bold text-[#22c55e]">Machine Learning</span>{" "}
            Developer. I love building{" "}
            <span className="text-[#a855f7] font-semibold">responsive</span> and{" "}
            <span className="text-[#38bdf8] font-semibold">scalable</span> web apps, 
            while also diving deep into AI/ML with hands-on projects.  
            Dedicated, consistent, and explorative — always learning something new 🚀.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-[#F1F5F9] mb-4">⚡ Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "MERN", "React", "Node.js", "MongoDB", "TailwindCSS",
              "Machine Learning", "Deep Learning", "Python",
              "JavaScript", "Consistent", "Dedicated", "Explorative"
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-[#334155] px-4 py-2 rounded-full text-sm md:text-base font-semibold text-[#38bdf8] hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-[#F1F5F9] mb-4">🎓 Education</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#38bdf8] mb-1">
            Bachelor of Technology (Computer Science)
          </h3>
          <span className="block text-[#a855f7] font-medium mb-2">
            Gandhi Institute for Technology (GIFT), Bhubaneswar
          </span>
          <p className="italic text-[#F97316] mb-2">Currently Pursuing</p>
          <p className="text-base md:text-lg text-[#CBD5E1]">
            Focused on{" "}
            <span className="font-semibold text-[#38bdf8]">
              fullstack development
            </span>
            , algorithms, and cutting-edge{" "}
            <span className="font-semibold text-[#22c55e]">AI</span>/
            <span className="font-semibold text-[#a855f7]">ML</span> technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
