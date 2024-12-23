"use client";
import Hero from "./hero";
import AboutTechnex_old from "./aboutTechnex_old";
import AboutTechnex from "./aboutTechnex";
import Beyond from "./beyond";
import { useState } from "react";

export default function Page() {
  const [loadAbout,setLoadAbout]=useState(false)
  const[loadBeyond,setLoadBeyond]=useState(false)
  const[loadRest,setLoadRest]=useState(false)
  return (
    <>
      <div className="w-screen h-screen overflow-y-scroll no-scrollbar snap-y snap-proximity overflow-x-clip no-scrollbar">
        {true && <Hero setLoadNext={setLoadAbout}/>}
        {loadAbout && <AboutTechnex setLoadNext={setLoadBeyond}/>}
        {loadBeyond && <Beyond setLoadNext={setLoadRest} />}
        {loadRest && <AboutTechnex_old setLoadNext={(val)=>{}}/>}
      </div>
    </>
  );
}
