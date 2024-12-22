"use client";
import Hero from "./hero";
import Content from "./aboutTechnex";
import Stats from "./stats";
import Beyond from "./beyond";

export default function Page() {
  return (
    <>
      <div className="w-screen overflow-x-clip no-scrollbar snap-y snap-mandatory">
        <Hero />
        <Content />
        <Beyond />
        <Stats />
      </div>
    </>
  );
}
