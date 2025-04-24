import React from 'react'
import ProjectCard from './ProjectCard'
import tripad from '../assets/tripad.jpeg'
import udemy from '../assets/udemy.jpeg'
import greenden from '../assets/greenden.jpeg'
import ecom from '../assets/ecom.jpg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'

export default function Project() {
     useEffect(() => {
       AOS.init({
         duration: 1000, // animation duration in ms
         once: true      // whether animation should happen only once - while scrolling down
       });
     }, []);
  return (
    <div id='projects'>
      <div className='project-con'>
        <h1 className='project-ttle'>OUR <span className='text-[#3DC2EC]'>PROJECTS</span> </h1>
        <div data-aos='flip-left' className='flex gap-10 justify-around flex-wrap relative right-[50px]  top-[20px]'>
        <ProjectCard  img = {ecom}></ProjectCard>
        <ProjectCard img = {udemy}></ProjectCard>
        <ProjectCard img = {greenden}></ProjectCard>
        <ProjectCard img = {tripad}></ProjectCard>
        </div>
      </div>
    </div>
  )
}
