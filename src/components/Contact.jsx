import React from 'react'

// SVG Components for logos
const EmailIcon = () => (
  <svg
    className="w-6 h-6 text-[#38bdf8] flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
)

const PhoneIcon = () => (
  <svg
    className="w-6 h-6 text-[#38bdf8] flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.3 12.3 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.3 12.3 0 002.81.7 2 2 0 011.72 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg
    className="w-6 h-6 text-[#38bdf8] flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM9 9h3.6v1.71h.05a3.94 3.94 0 013.54-1.95c3.79 0 4.49 2.5 4.49 5.74V21h-4v-5.35c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
  </svg>
)

const GitHubIcon = () => (
  <svg
    className="w-6 h-6 text-[#38bdf8] flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2a10 10 0 00-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.35-3.37-1.35a2.66 2.66 0 00-1.12-1.47c-.92-.62.07-.6.07-.6a2.11 2.11 0 011.54 1.04 2.14 2.14 0 002.92.83 2.14 2.14 0 01.64-1.34c-2.22-.25-4.55-1.11-4.55-4.95a3.88 3.88 0 011.03-2.7 3.59 3.59 0 01.1-2.67s.84-.27 2.75 1.03a9.49 9.49 0 015 0c1.9-1.3 2.75-1.03 2.75-1.03a3.59 3.59 0 01.1 2.67 3.88 3.88 0 011.03 2.7c0 3.85-2.34 4.7-4.57 4.95a2.4 2.4 0 01.69 1.86v2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
  </svg>
)

const LeetCodeIcon = () => (
  <svg
    className="w-6 h-6 text-[#38bdf8] flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6.887 15.092a2.618 2.618 0 01-2.613-2.612 2.618 2.618 0 012.613-2.613h1.873a.75.75 0 000-1.5H6.887a4.118 4.118 0 100 8.237h1.873a.75.75 0 000-1.5H6.887zm8.35-4.54a.749.749 0 00-1.06 0l-2.98 2.982a.75.75 0 001.06 1.06l2.98-2.981a.75.75 0 000-1.06zm1.545 5.406l-1.53-1.53a.75.75 0 10-1.06 1.06l1.53 1.53a2.22 2.22 0 002.93 0l1.94-1.94a2.22 2.22 0 000-3.134l-1.53-1.53a.75.75 0 00-1.06 1.06l1.53 1.53a.72.72 0 010 1.013l-1.94 1.94a.72.72 0 01-1.013 0z" />
  </svg>
)

const contacts = [
  {
    label: "Email",
    value: "animeshsamantaray2@gmail.com",
    href: "mailto:animeshsamantaray2@gmail.com",
    display: "animeshsamantaray2@gmail.com",
    Icon: EmailIcon,
  },
  {
    label: "Phone",
    value: "9827449302",
    href: "tel:9827449302",
    display: "9827449302",
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "contact",
    href: "https://www.linkedin.com/in/animesh-samantaray/",
    display: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "contact",
    href: "https://github.com/Animesh-Samantaray",
    display: "GitHub",
    Icon: GitHubIcon,
  },
  {
    label: "LeetCode",
    value: "visit",
    href: "https://leetcode.com/u/Animesh_Samantaray/",
    display: "LeetCode",
    Icon: LeetCodeIcon,
  }
]

const Contact = () => {
  return (
    <section className="bg-[#0F172A] text-[#F1F5F9] py-12 px-4 sm:px-6 md:px-20 lg:px-32 min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Contact</h1>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-6">
          {contacts.map(({ label, href, display, Icon }, i) => (
            <div
              key={i}
              className={`
                bg-[#1E293B]
                p-6
                rounded-lg border-2 border-[#38bdf8]
                shadow-[0_0_24px_4px_#38bdf8]/40
                transition-transform duration-300
                hover:shadow-[0_0_48px_16px_#38bdf8,0_0_32px_8px_#38bdf8]
                hover:border-[#38bdf8]
                hover:scale-105
                flex items-center
                min-h-[110px]
                space-x-4
              `}
            >
              <Icon />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{label}</span>
                <a
                  href={href}
                  className="text-base sm:text-lg text-[#38bdf8] underline underline-offset-4 hover:text-[#60a5fa]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {display}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
