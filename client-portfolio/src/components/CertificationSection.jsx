import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certifications() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="certifications" className="w-full px-6 py-20 bg-black text-white">

      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold">Certifications</h2>
        <p className="text-gray-400 mt-2">
          Credentials That Support My Skills
        </p>
      </div>

      {/* Certification Cards */}
      <div
        data-aos="flip-left"
        className="flex gap-10 justify-around flex-wrap"
      >

        {/* EMC MERN */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617]
                        border border-blue-900 rounded-2xl p-6 shadow-xl
                        w-[350px] hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            EMC – Full Stack MERN Development
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Completed an intensive hands-on bootcamp covering full-stack
            development using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <p className="text-sm text-[#3DC2EC]">
            MERN · Full Stack · Project-Based
          </p>
        </div>

        {/* NPTEL IoT */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617]
                        border border-blue-900 rounded-2xl p-6 shadow-xl
                        w-[350px] hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            NPTEL – Internet of Things (IoT)
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Successfully completed NPTEL certification covering IoT
            fundamentals, sensors, networking, and real-world applications.
          </p>
          <p className="text-sm text-[#3DC2EC]">
            Score: 60%
          </p>
        </div>

        {/* NPTEL Soft Skills */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617]
                        border border-blue-900 rounded-2xl p-6 shadow-xl
                        w-[350px] hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            NPTEL – Soft Skills & Communication
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Certified in professional communication, presentation skills,
            teamwork, and workplace soft skills.
          </p>
          <p className="text-sm text-[#3DC2EC]">
            Communication · Presentation · Soft Skills
          </p>
        </div>

      </div>
    </section>
  );
}
