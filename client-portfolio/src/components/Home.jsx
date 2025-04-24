import React from "react";
import Intro from "./Intro";
import Project from "./Project";
import MernStack from "./MernStack";
import Hobbies from "./Hobbies";
import CertificationSection from "./CertificationSection";
import AcademicSection from "./AcademicSection";
import Footer from "./Footer";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Contact from '../components/Contact'
export default function Home() {
  return (
    <div>
   
      <Intro></Intro>
      <MernStack></MernStack>
     <Project></Project>
     <Hobbies></Hobbies>
     <AcademicSection></AcademicSection>
     <CertificationSection></CertificationSection>
     <Footer></Footer>
     
    </div>
  );
}
