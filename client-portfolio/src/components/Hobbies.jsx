import React from 'react';
import { FaDumbbell, FaShuttleVan, FaPlane, FaChalkboardTeacher } from 'react-icons/fa';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import batmiton from '../assets/batmiton'
const hobbies = [
  {
    icon: <FaDumbbell className="text-cyan-400 text-3xl" />,
    title: 'Fitness',
    description: 'Maintaining discipline and focus through regular workouts.',
  },
  {
    icon: <FaShuttleVan className="text-cyan-400 text-3xl" />,
    title: 'Badminton',
    description: 'Enhancing agility and CardioVascularity.',
  },
  {
    icon: <FaPlane className="text-cyan-400 text-3xl" />,
    title: 'Traveling',
    description: 'Exploring new cultures to broaden perspectives.',
  },
  {
    icon: <FaChalkboardTeacher className="text-cyan-400 text-3xl" />,
    title: 'Mentoring',
    description: 'Guiding peers and juniors in tech communities.',
  },
];

const Hobbies = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <section id='hobbies' data-aos='zoom-out-up' className="bg-gradient-to-br m-20 from-[#0f172a] via-[#1e293b] to-[#334155] py-12 px-6 rounded-xl shadow-lg">
      <h2 className="text-[50px] font-normal text-white mb-8 text-center">My <span className='text-[#3DC2EC]'>Hobbies</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex items-start space-x-4 bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div>{hobby.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{hobby.title}</h3>
              <p className="text-gray-300">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
