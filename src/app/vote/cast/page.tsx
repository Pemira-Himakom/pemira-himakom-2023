'use client';

import Button from '@/components/vote/Button';
import CandidateCard from '@/components/vote/CandidateCard';
import Image from 'next/image';
import React, { useState } from 'react';

export default function CastPage() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [chosenID, setChosenID] = useState<string | null>('');

  return (
    <div className='flex h-full w-full justify-center'>
      <div className='flex w-[85%] flex-col items-center justify-between overflow-y-scroll border-l-[8px] border-r-[8px] border-l-pink border-r-pink bg-frame bg-opacity-[85%] py-16'>
        <Image
          src='/images/vote/titleCastMobile.svg'
          alt='titleMobile'
          width={200}
          height={100}
          className='block md:hidden'
        />
        <Image
          src='/images/vote/titleCast.svg'
          alt='titleMobile'
          sizes='100vw'
          width={525}
          height={100}
          className='hidden md:block md:w-[35rem] lg:w-[50rem]'
        />
        <div className='flex h-full w-full flex-col items-center justify-around space-y-16 pt-20 lg:flex-row lg:items-end lg:justify-center lg:pt-0'>
          <CandidateCard
            candidatePhoto='/images/vote/sampleCandidate.png'
            isChosen={chosenID === '1'}
            candidateName='Candidate 1'
            candidateID='1'
            setChosenID={setChosenID}
          />
          <CandidateCard
            candidatePhoto='/images/vote/sampleCandidate.png'
            isChosen={chosenID === '2'}
            candidateName='Candidate 2'
            candidateID='2'
            setChosenID={setChosenID}
          />
        </div>
        <div className='mt-16 flex flex-col justify-center space-y-4 pt-8'>
          <div className='flex w-full items-center justify-center space-x-3'>
            <input
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  setIsConfirmed(true);
                } else {
                  setIsConfirmed(false);
                }
              }}
              type='checkbox'
              className='h-4 w-4 accent-pink'
            />
            <p className='pt-0.5 text-sm text-white md:text-base'>
              I confirm my choice
            </p>
          </div>
          <Button
            onClick={() => {
              if (isConfirmed && chosenID !== null) {
                console.log(chosenID);
              }
            }}
            isActive={isConfirmed && chosenID !== null}
            title='Cast your Vote'
          />
        </div>
      </div>
    </div>
  );
}
