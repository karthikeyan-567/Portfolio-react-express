import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AcademicSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <section id='academic' data-aos='zoom-in-down' className="bg-gradient-to-br m-20 from-[#0f172a] via-[#1e293b] to-[#334155] py-12 px-6 rounded-xl shadow-lg">
      <h2 className="text-[45px] font-normal text-white mb-8 text-center">Academic <span className='text-[#3DC2EC]'> Background</span></h2>
      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="text-xl font-semibold text-white">🏫 Annai Sarada Matric Hr. Sec. School, Arcot</h3>
          <p>Higher Secondary Education, Tamil Nadu State Board</p>
          <p>12th Grade Percentage: 78.8% (2023)</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">🎓 R.M.K. Engineering College</h3>
          <p>B.Tech in Information Technology</p>
          <p>Currently in 2nd Year (2025)</p>
          <p>Location: Kavaraipettai, Tamil Nadu</p>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
