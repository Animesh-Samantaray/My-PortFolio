import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-[#94A3B8] py-4 px-2 sm:px-6 md:px-20 lg:px-32  shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-sm text-center">
          © {new Date().getFullYear()} Animesh Samantaray. All rights reserved.
        </span>
        <span className="text-xs text-center">
          Built with <span className="text-[#38bdf8] font-semibold">React</span> &amp; <span className="text-[#38bdf8] font-semibold">TailwindCSS</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer