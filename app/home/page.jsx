"use client";
import Hero from "./hero";
import AboutTechnex_old from "./aboutTechnex_old";
import AboutTechnex from "./aboutTechnex";
import Beyond from "./beyond";

export default function Page() {
  return (
    <>
      <div className="w-screen h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory overflow-x-clip no-scrollbar">
        <Hero />
        <AboutTechnex />
        <Beyond />
        <AboutTechnex_old />
      </div>
    </>
  );
}
