import React from "react";

const Projects = () => {
  return (
    <section className="w-full px-6 py-20 bg-black text-white">
      
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold">Projects</h2>
        <p className="text-gray-400 mt-2">
          Real-World Applications I’ve Built
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-3">

        {/* SkillSync */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617]
                        border border-blue-900 rounded-2xl p-6 shadow-xl
                        hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            SkillSync
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            MERN stack application focused on skill profiling and employability
            readiness with a responsive ERB-style dashboard.
          </p>
          <p className="text-sm text-blue-300">
            MongoDB · Express · React · Node · Tailwind
          </p>
        </div>

        {/* Avartana Care */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617]
                        border border-blue-900 rounded-2xl p-6 shadow-xl
                        hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Avartana Care
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Ayurveda healthcare platform with Doctor, Patient, and Admin
            dashboards built using React and Tailwind CSS.
          </p>
          <p className="text-sm text-blue-300">
MongoDB · Express · React · Node · Tailwind · JavaScript          </p>
        </div>

        {/* Thiruvallur Quiz Platform */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617]
                        border border-blue-900 rounded-2xl p-6 shadow-xl
                        hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Thiruvallur Student Quiz Platform
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Educational quiz website developed for school students to improve
            knowledge through interactive quizzes and instant feedback.
          </p>
          <p className="text-sm text-blue-300">
            HTML · CSS · JavaScript · React
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
  