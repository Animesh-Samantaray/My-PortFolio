import React from 'react'
import { FaJava, FaCode } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact, SiExpress, SiMongodb } from 'react-icons/si'
import { GiBrain } from 'react-icons/gi'

const skillData = [
  { name: "Java", level: 85, icon: FaJava },
  { name: "Python", level: 75, icon: SiPython },
  { name: "JavaScript", level: 80, icon: SiJavascript },
  { name: "React.js", level: 65, icon: SiReact },
  { name: "C Programming", level: 70, icon: FaCode },
  { name: "Express.js", level: 70, icon: SiExpress },
  { name: "MongoDB", level: 65, icon: SiMongodb },
  { name: "Machine Learning", level: 60, icon: GiBrain },
  { name: "Data Structures", level: 75, icon: FaCode },
]

const glowPalette = [
  { card: "shadow-[0_0_16px_2px_#7C3AED]/60 border-[#7C3AED]", circle: "#7C3AED" },
  { card: "shadow-[0_0_16px_2px_#38bdf8]/60 border-[#38bdf8]", circle: "#38bdf8" },
  { card: "shadow-[0_0_16px_2px_#22c55e]/60 border-[#22c55e]", circle: "#22c55e" },
  { card: "shadow-[0_0_16px_2px_#a855f7]/60 border-[#a855f7]", circle: "#a855f7" },
  { card: "shadow-[0_0_16px_2px_#F97316]/60 border-[#F97316]", circle: "#F97316" },
]

const CircleProgress = ({ percentage, size = 50, strokeWidth = 5, color = "#7C3AED" }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
      <circle stroke="#334155" fill="transparent" strokeWidth={strokeWidth} r={radius} cx={size / 2} cy={size / 2} />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className="transition-all duration-1000"
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#CBD5E1" fontSize="0.9rem" fontWeight="bold">
        {percentage}%
      </text>
    </svg>
  )
}

const Skills = () => {
  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] py-12 px-4 sm:px-6 md:px-12 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillData.map(({ name, level, icon: Icon }, i) => {
            const palette = glowPalette[i % glowPalette.length]
            return (
              <div
                key={i}
                className={`bg-[#1E293B] p-5 rounded-lg border-2 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg ${palette.card}`}
              >
                <Icon size={32} color={palette.circle} style={{ filter: `drop-shadow(0 0 8px ${palette.circle})` }} className="mb-3"/>
                <CircleProgress percentage={level} color={palette.circle} size={60} strokeWidth={6} />
                <h2 className="text-base sm:text-lg font-semibold mt-3">{name}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
