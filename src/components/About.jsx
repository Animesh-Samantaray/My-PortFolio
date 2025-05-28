import React from 'react'

const About = () => {
  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] py-16 px-6 md:px-20 lg:px-32 min-h-screen shadow-2xl ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* About Text */}
        <div className="flex-1 text-[#CBD5E1] text-base md:text-xl bg-[#1e293b]/70 rounded-2xl p-8 shadow-lg border-l-4 border-[#61dafb]">
          <h1 className="text-3xl  md:text-6xl font-extrabold mb-12 mt-20 bg-gradient-to-r from-[#61dafb] via-[#a855f7] to-[#22c55e] bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="leading-relaxed">
            Hey, I’m <span className="font-bold text-[#61dafb]">Animesh</span> — a passionate{' '}
            <span className="font-bold text-[#61dafb]">React</span>{' '}
            Frontend Developer with a knack for crafting <span className="text-[#a855f7] font-semibold">responsive</span> and <span className="text-[#22c55e] font-semibold">scalable</span> web applications using <span className="font-bold text-[#61dafb]">React</span> and <span className="font-bold text-[#38bdf8]">TailwindCSS</span>.
            <br /><br />
            When I’m not coding slick UI, I’m deep-diving into{' '}
            <span className="font-bold text-[#F97316]">Java DSA</span>{' '}
            challenges, sharpening my logic and algorithm skills.
            <br /><br />
            Lately, I’ve been fascinated by{' '}
            <span className="font-bold text-[#22c55e]">AI</span>{' '}
            and{' '}
            <span className="font-bold text-[#a855f7]">Machine Learning</span>, exploring new tech to level up my skill set.
          </p>
        </div>

        {/* Education Card */}
        <div className="flex-none w-full md:w-1/3 bg-[#1E293B] rounded-2xl p-8 shadow-lg border-l-4 border-[#38bdf8] flex flex-col gap-4 transition-shadow hover:shadow-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#F1F5F9] tracking-wide">
            🎓 Education
          </h2>
          <div className="space-y-2 text-sm md:text-lg">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#38bdf8]">
                Bachelor of Technology (Computer Science)
              </h3>
              <span className="block text-[#a855f7] font-medium mt-1">
                Gandhi Institute for Technology (GIFT), Bhubaneswar
              </span>
            </div>
            <p className="italic md:text-lg text-[#a855f7]">Currently pursuing</p>
            <p className="md:text-base">
              Focused on <span className="font-semibold text-[#38bdf8]">frontend development</span>, algorithms, and emerging{' '}
              <span className="font-semibold text-[#22c55e]">AI</span>/
              <span className="font-semibold text-[#a855f7]">ML</span> technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About