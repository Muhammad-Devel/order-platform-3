'use client'

import React from "react";
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

export default function Example() {
 

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

     <main>
        <HeroSection />
     </main>
    </div>
  )
}
