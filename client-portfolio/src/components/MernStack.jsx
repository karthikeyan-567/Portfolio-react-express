import React from 'react'
import html from '../assets/html-icon.png'
import css from '../assets/css.png'
import Icon from './Icon'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import grid from '../assets/grid.png'
import device from '../assets/devices.png'
import animation from '../assets/animation.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongodb.png'
import firebase from '../assets/firebase.png'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";


const MernStack = () => { 

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div  id='skills'  className='bg-black h-[150vh] mt-4 '>
      <h1 className='text-white text-5xl font-light text-center relative top-[20px] '>Tech Stack</h1>
      <h1 className='text-white text-4xl font-bold text-center relative top-[30px] '>Mern Stack <span className='text-[#3DC2EC] '>Developer</span></h1>
    {/* frontend  */}
      <div  data-aos='fade-right'  className=' project-Card-con  bg-[#021526] flex flex-wrap justify-evenly gap-[50px] w-[90%] m-auto mt-10 p-10 text-white'>
    <Icon img={html} icon={"Html"} progress={"90%"}></Icon>
    <Icon img={css} icon={"Css"} progress={"80%"}></Icon>
    <Icon img={js} icon={"JavaScript"} progress={"60%"}></Icon>
    <Icon img={tailwind} icon={"Tailwind css"} progress={"90%"}></Icon>

    </div>
      <div data-aos='fade-left' className=' project-Card-con  bg-[#021526] flex flex-wrap justify-evenly gap-[50px] w-[90%] m-auto mt-10 p-10 text-white'>
    <Icon img={grid} icon={"Grid / Flex"} progress={"90%"}></Icon>
    <Icon img={device} icon={"Media Quries"} progress={"70%"}></Icon>
    <Icon img={animation} icon={"Animation"} progress={"50%"}></Icon>
    <Icon img={react} icon={"React Js"} progress={"80%"}></Icon>

    </div>
      <div data-aos='fade-right' className='project-Card-con  bg-[#021526] flex flex-wrap justify-evenly gap-[50px] w-[90%] m-auto mt-10 p-10 text-white'>
    <Icon img={node} icon={"Node JS"} progress={"85%"}></Icon>
    <Icon img={express} icon={"Express JS"} progress={"80%"}></Icon>
    <Icon img={mongo} icon={"MongoDB"} progress={"70%"}></Icon>
    <Icon img={firebase} icon={"Firebase"} progress={"60%"}></Icon>

    </div>
    {/* backend */} 
    
    </div>
  )
}

export default MernStack
