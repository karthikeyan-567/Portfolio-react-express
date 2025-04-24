import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const CertificationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <section id='certification' data-aos='zoom-in-up' className="bg-gradient-to-br m-20 from-[#0f172a] via-[#1e293b] to-[#334155] py-12 px-6 rounded-xl shadow-lg mt-8">
      <h2 className="text-[45px] font-normal text-white mb-8 text-center">Certification <span className='text-[#3DC2EC]'>Details</span></h2>
      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="text-xl font-semibold text-white">🧠 NPTEL: Enhancing Soft Skills and Personality Development </h3>
          <p>Institution: IIT Kanpur</p>
          <p>Certification: Elite Certificate</p>
          <p>Score: 60%</p>
          <p>Completion Year: 2025</p>
          <p>Course Overview: This course focused on developing communication skills, emotional intelligence, and overall personality enhancement.</p>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
