'use client'
import React, { useEffect, useState } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Parteners from '../components/home/Parteners';
import KnowAbout from '../components/home/KnowAbout';
import Brief from '../components/home/Brief';
import News from '../components/home/News';
import Discount from '../components/home/Discount';
export default function Home() {
  
  return (
    <main>
      <Hero/>
      <About/>
      <Parteners/>
      <KnowAbout/>
      <Brief/>
      <Discount/>
      {/* <News/> */}
    </main>
  );
}
