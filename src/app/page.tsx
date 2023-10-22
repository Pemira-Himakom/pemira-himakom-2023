"use client";

import useCandidate from '@/hooks/candidate/useCandidate';
import useCandidates from '@/hooks/candidate/useCandidates';
import React from 'react';

export default function Home() {
  const { candidate } = useCandidate('YXGtNEXLF1EwnhMNhiiW');
  const { candidates } = useCandidates();

  return (
    <main className='flex flex-col items-center justify-between bg-main p-24'>
      <p className='font-display text-gold'>Times New Roman</p>
      <p className='font-sans text-gold'>Himakom</p>
      {candidate && (
        <div className='flex flex-col items-center justify-between'>
          <p className='font-display text-gold'>{candidate.nama}</p>
          <p className='font-sans text-gold'>{candidate.nim}</p>
        </div>
      )}

      {candidates && (
        <div className='flex flex-col items-center justify-between'>
          {candidates.map((cand) => (
            <div key={cand.nim}>
              <p className='font-display text-gold'>{cand.nama}</p>
              <p className='font-sans text-gold'>{cand.nim}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
