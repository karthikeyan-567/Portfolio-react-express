import React, { useState } from "react";
import Newpro from '../assets/profile1.png'
import Descrip from "./Descrip";
import menu from "../assets/menu.png";
import Asidebar from "./Asidebar";
function Intro() {
const [asidemenu , Setmenu] = useState(false)

  let handleasidebar =()=>{
          Setmenu(!asidemenu)
  }
  return (

   
    <>
    <Asidebar menubar = {asidemenu} Setmenubar={Setmenu}></Asidebar>
      <img onClick={handleasidebar}
        className= " cursor-pointer hover:opacity-85 w-[35px] h-[35px] absolute top-[20px] left-[40px]  "
        src={menu}
        alt=""
      />

      <div class="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Welcome :)
          </text>
        </svg>
      </div>
      <div className="introCard text-white ">
        <div className="imgCard">
          <div>
            <img src={Newpro} alt="" />
          </div>
          <div className="relative left-10">
            <h1 className="text-[30px] font-extralight relative right-[50px] top-[20px]">
              Hello It's me
            </h1>
            <h1 className="text-[40px] font-bold  relative right-[50px] top-[10px]">
              Karthik
            </h1>
            <h1 className="text-[25px] font-extralight relative right-[50px] top-[5px]">
              and Im a <span className="text-[#3DC2EC] font-bold text-2xl">Mern Developer</span>
            </h1>
           
          </div>
        </div>
        <h1 className="text-[30px] font-bold inline-block relative left-[690px] bottom-[370px] ">
          {" "}
          About <span className="text-[#3DC2EC] ">Me</span>
        </h1>
        <h1 className="introCard-header">J karthikeyan... </h1>
        <Descrip></Descrip>
       
      </div>
    </>
  );
}

export default Intro;
