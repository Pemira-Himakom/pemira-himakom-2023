"use client";

// import useCandidate from '@/hooks/candidate/useCandidate';
// import useCandidates from '@/hooks/candidate/useCandidates';
import React from 'react';
import About from '@/components/about/About';
import Footer from '@/components/about/Footer';

export default function Home() {
//   const { candidate } = useCandidate('YXGtNEXLF1EwnhMNhiiW');
//   const { candidates } = useCandidates();

  return (
    <div className='flex flex-col w-full h-full overflow-hidden'>
      <About />
      <Footer />
    </div>
  );
}