"use client";

import React from 'react';
// import Hero from '@/components/vote/Hero';
import About from '@/components/about/About';
import Footer from '@/components/about/Footer';

export default function Home() {
  return (
    <div className='flex flex-col w-full h-full overflow-hidden'>
      <About />
      <Footer />
    </div>
  );
}