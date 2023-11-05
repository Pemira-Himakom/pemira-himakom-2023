'use client';

import React from 'react';
import About from '@/components/landing/About';
import Footer from '@/components/landing/Footer';
import CandidateContain from '@/components/landing/CandidateContain';
import LandingHero from '@/components/landing/Hero';
import Timeline from '@/components/landing/Timeline';

export default function Home() {
  return (
    <div className='flex h-full w-full flex-col overflow-hidden'>
      <LandingHero />
      <About />
      <Timeline />
      <CandidateContain />
      <Footer />
    </div>
  );
}
