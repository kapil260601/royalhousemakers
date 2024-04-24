"use client";
import React, { useState, useEffect } from "react";
import "../app/components/header/home.css";
import Navbar from "./components/header/header";
import Service from "./components/Serv/Service";
import FrontPage from "./components/Video/frontPage";
import Showcasing from "./components/Showcase/Showcasing";
import Contact from "./components/Contact/Contact";

export default function Home() {
  
  return (
    
    <> 
      <Navbar/>
      <FrontPage/>
      <Service />
      <Showcasing/>
      <Contact />
      
    </>
  );
}
