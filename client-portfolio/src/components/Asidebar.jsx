import React, { useState } from 'react'
import arrowBack from '../assets/left-arrow.png'
import { Link } from 'react-router-dom'
import Contact  from '../components/Contact'
const Asidebar = (props) => {
    const[backaside , Setback]= useState(true)
let asidemenu = props.menubar
let SetMen = props.Setmenubar


let handleback = ()=>{
   console.log("back arrow")
   SetMen(false)
}


  return (
    <div style={asidemenu?{left:"0px" , top:"0px"}:{left:"-350px" , top:"-200px"}  } className='aside-bar absolute text-white bg-black h-[100vh]  w-[300px]  flex flex-col gap-5 z-10 rounded-2xl'>
      <button className=' z-20 w-[50px] h-[40px] rounded-3xl absolute top-[20px] left-[5px] p-2 backarrow' onClick={handleback}> <img  className='  w-[40px] absolute top-[0px] left-[5px]  ' src={arrowBack} alt="" /></button>
      <h1 className='text-3xl font-semibold text-center relative top-4 ml-2 ' >
        My menu
      </h1>       
      <ul  className='asidemenu flex flex-col text-xl gap-14 mt-10 text-center'>
        
        <li><a  href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#academic">Academics</a></li>
        <li><a href="#certification">Certifications</a></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
      </ul>
    </div>
  )
}

export default Asidebar
