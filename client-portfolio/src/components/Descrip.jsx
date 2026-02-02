import React from 'react'
import resume from '../assets/resume.pdf'
function Descrip() {
  return (
    <div className='description-con '>
      <p>I’m Karthikeyan J, a passionate MERN stack developer driven by curiosity and creativity. I specialize in crafting seamless, responsive web applications and love turning innovative ideas into functional, user-friendly digital experiences. With a strong foundation in full-stack development and a sharp eye for clean, modern UI/UX, I’m always exploring new tools, frameworks, and trends in the tech world. Beyond coding, I thrive on brainstorming, problem-solving, and collaborating with like-minded creators. I believe in continuous growth and building solutions that make an impact. Every project I take on is a chance to learn, evolve, and create something meaningful.</p>
      <button className="z-10  absolute bottom-[30px] left-[250px] bg-[#227093] px-4 py-2 text-white rounded-xl CvBtn" style={{boxShadow:"1px 5px black"}}><a href={resume} download="CV.pdf" >Download CV</a></button>
    </div>

  )
}

export default Descrip
