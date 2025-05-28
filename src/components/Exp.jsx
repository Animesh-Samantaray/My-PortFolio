import React, { useState } from "react";
import skillPic from './3SKill.png';
import cttcPic from './cttc.jpg';
const Exp = () => {
    const experiences = [
        {
            title: "AI/ML Intern",
            company: "CTTC , Bhubaneswar",
            period: "May 2025 - Present",
            details: [
                "Currently undergoing training and project work in Artificial Intelligence and Machine Learning.",
                "Learning key ML concepts, Python libraries, and real-world model implementation.",
                "Working on data preprocessing, model training, and performance evaluation.",
            ],
            pic: '',
        },
        {
            title: "Frontend Developer Intern",
            company: "3SKill",
            period: "April 2025 - May 2025",
            details: [
                "Developed responsive and dynamic UI components using React.js and TailwindCSS.",
                "Practiced version control and collaboration workflows using Git and GitHub.",
                "Focused on pixel-perfect design, responsiveness, and code reusability.",
            ],
            pic: skillPic,
        },
        {
            title: "Java Developer Intern",
            company: "CTTC , Bhubaneswar",
            period: "July 2024 - August 2024",
            details: [
                "Worked on Core Java concepts including OOP, file handling, and basic backend logic.",
                "Developed small-scale applications and practiced modular code architecture.",
                "Improved problem-solving skills and understanding of real-world Java application flow.",
            ],
            pic: cttcPic,

        },
    ];
    const [SelectedPic, setSelectedPic] = useState(null);
    const handleSelectedPic = (pic) => {
        if (!pic) {
            // alert(' Oops ! Certificate is not available yet....');
            return;
        }
        else {
            setSelectedPic(pic);
        }
    }
    return (
        <div>
            <section className="bg-[#0F172A] text-[#F1F5F9] py-16 px-6 md:px-20 lg:px-32 min-h-screen shadow-2xl">
                <h1 className="text-5xl font-extrabold mb-10   text-center">My Experience</h1>
                <div className=" flex flex-row md:flex-col">
                    <div className="flex flex-col  gap-8 mt-8">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="bg-[#1E293B] rounded-xl shadow-lg p-8 flex flex-col md:flex-row md:items-center gap-6 hover:scale-[1.02] transition-transform"
                            >
                                <div className="flex-1">
                                    <h2 className="text-2xl md:text-3xl text-[#61dafb] font-bold">
                                        {exp.title}
                                    </h2>
                                    <p className="text-lg text-[#a855f7]">{exp.company}</p>
                                    <p className="text-base text-[#CBD5E1] mt-2">{exp.period}</p>
                                    <button className="mt-4 inline-block bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white  hover:text-black cursor-pointer font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-400 ease-in-out"
                                        onClick={() => handleSelectedPic(exp.pic)}>
                                        View Certificate
                                    </button>
                                </div>
                                <ul className="flex-1 list-disc list-inside mt-4 md:mt-0 text-[#F1F5F9] space-y-2">
                                    {exp.details.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    {SelectedPic ? (
                        <img
                            src={SelectedPic}
                            alt="Certificate"
                            className="max-w-md rounded-lg shadow-lg border-4 border-[#8B5CF6]"
                        />
                    ) : (
                        <p className="text-center text-[#94A3B8] italic">Select a certificate to view it here.</p>
                    )}
                </div>

            </section>
        </div>
    );
};

export default Exp;
