'use client'

import React from "react";

import HeroSection from '../components/HeroSection'
import Header from '../components/Header'


export default function HomePage() {
  

  return (
    <div className="bg-white">
     <Header />
     <main>
        <HeroSection />
     </main>
    </div>
  )
}
