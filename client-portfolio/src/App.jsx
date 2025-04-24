import { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route  path="/contact" element={<Contact></Contact>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
