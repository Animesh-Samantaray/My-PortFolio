import React from 'react'
import { FaJava, FaCode } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact } from 'react-icons/si'

const skillData = [
  {
    name: "Java (Core + Collections + Exception Handling)",
    level: 85,
    desc: "Strong core Java skills, collections framework, and exception handling. Backend Java not included.",
    icon: FaJava
  },
  {
    name: "Python (Basics + Numpy + Pandas + Seaborn)",
    level: 75,
    desc: "Good grasp of Python basics and key data science libraries, understands concepts, needs refreshing on decorators and generators.",
    icon: SiPython
  },
  {
    name: "JavaScript (ES6+ + TailwindCSS)",
    level: 80,
    desc: "Solid with JavaScript essentials and TailwindCSS for styling.",
    icon: SiJavascript
  },
  {
    name: "React.js",
    level: 65,
    desc: "Comfortable with components, state, event handling; unsure about context API and optimization hooks.",
    icon: SiReact
  },
  {
    name: "C Programming",
    level: 70,
    desc: "Basic understanding; unaware of file handling, memory management, bitwise ops, and debugging tools.",
    icon: FaCode
  }
]
const glowPalette = [
  {
    card: "shadow-[0_0_16px_2px_#7C3AED]/60 border-[#7C3AED]",
    circle: "#7C3AED"
  },
  {
    card: "shadow-[0_0_16px_2px_#38bdf8]/60 border-[#38bdf8]",
    circle: "#38bdf8"
  },
  {
    card: "shadow-[0_0_16px_2px_#22c55e]/60 border-[#22c55e]",
    circle: "#22c55e"
  },
  {
    card: "shadow-[0_0_16px_2px_#a855f7]/60 border-[#a855f7]",
    circle: "#a855f7"
  },
  {
    card: "shadow-[0_0_16px_2px_#F97316]/60 border-[#F97316]",
    circle: "#F97316"
  }
]

// Helper for SVG circle progress
const CircleProgress = ({ percentage, size = 40, strokeWidth = 5, color = "#7C3AED" }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <svg width={size} height={size} className="transform -rotate-90" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
      <circle
        stroke="#334155"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
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
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#CBD5E1"
        fontSize="0.8rem"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  )
}

const Skills = () => {
  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] py-12 px-2 sm:px-6 md:px-20 lg:px-32 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Skills</h1>
        {/* Responsive grid: 2 columns on mobile, 3 on md+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
          {skillData.map(({ name, level, desc, icon: Icon }, i) => {
            const palette = glowPalette[i % glowPalette.length]
            return (
              <div
                key={i}
                className={`
                  bg-[#1E293B]
                  p-3 sm:p-4
                  rounded-lg border-2
                  flex flex-col items-center
                  transition-border transition-transform duration-300
                  hover:shadow-[0_0_48px_24px_${palette.circle},0_0_32px_16px_${palette.circle}]
                  hover:border-[${palette.circle}]
                  hover:scale-105
                  ${palette.card}
                  aspect-square w-full
                  max-w-[140px] min-h-[140px] max-h-[170px]
                  sm:max-w-[170px] sm:min-h-[170px] sm:max-h-[200px]
                  md:max-w-[220px] md:min-h-[220px] md:max-h-[260px]
                  lg:max-w-[260px] lg:min-h-[260px] lg:max-h-[320px]
                  mx-auto
                  overflow-hidden
                `}
              >
                {/* Icon and Circular Progress */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0 mb-1">
                  <Icon size={26} color={palette.circle} style={{ filter: `drop-shadow(0 0 8px ${palette.circle})` }} />
                  <CircleProgress percentage={level} color={palette.circle} size={40} strokeWidth={5} />
                </div>
                {/* Text Content */}
                <div className="flex-grow flex flex-col items-center justify-center text-center w-full px-1 overflow-hidden">
                  <h2 className="text-sm sm:text-base font-semibold mb-0.5 flex items-center gap-1 justify-center w-full overflow-hidden">
                    <span className="block w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-left">
                      {name}
                    </span>
                  </h2>
                  <p className="text-[11px] sm:text-sm text-[#94A3B8] w-full overflow-hidden text-ellipsis whitespace-nowrap text-left">
                    {desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills