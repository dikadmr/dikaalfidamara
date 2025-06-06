"use client";
import { Button } from "@/components/ui/moving-border";
import React from "react";

export default function Home() {

  const handleBackHome = () => {
    window.location.href = "/";
  }

  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
        COMING SOON
      </h1>
      <div className="w-[40rem] md:w-[80rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        
      </div>
      <Button className="mx-auto items-center justify-center cursor-pointer" onClick={handleBackHome} ><span className="text-2xl">Back Home</span></Button>
    </div>
  );
}
