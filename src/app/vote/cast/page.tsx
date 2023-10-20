'use client';

import Button from '@/components/vote/Button';
import Image from 'next/image';
import React, { useState } from 'react';

export default function CastPage() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className='flex h-full w-full justify-center'>
      <div className='bg-frame flex w-[85%] flex-col items-center justify-between border-l-[8px] border-r-[8px] border-l-pink border-r-pink bg-opacity-[85%] py-16'>
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
        <div className='flex h-full w-full flex-col items-center justify-around lg:flex-row lg:items-end lg:justify-center'>
          <div className='z-50 flex w-[40%] transform items-center justify-center grayscale transition duration-200 hover:grayscale-0 md:w-[30%] lg:w-[40%]'>
            <p className='absolute bottom-4 z-20 font-display text-3xl font-semibold text-pink'>
              Kania
            </p>
            <Image
              src='/images/vote/sampleCandidate.png'
              alt='candidate1'
              width={230}
              height={200}
              className='absolute bottom-0 z-10 transition duration-200 hover:scale-105'
            />
            <Image
              src='/images/vote/candidateArc.svg'
              alt='candidateArc'
              sizes='100vw'
              width={200}
              height={100}
              className='md:w-[12rem] lg:w-[14rem]'
            />
          </div>
          <div className='z-50 flex w-[40%] transform items-center justify-center grayscale transition duration-200 hover:grayscale-0 md:w-[30%] lg:w-[40%]'>
            <p className='absolute bottom-4 z-20 font-display text-3xl font-semibold text-pink'>
              Kania
            </p>
            <Image
              src='/images/vote/sampleCandidate.png'
              alt='candidate1'
              width={230}
              height={200}
              className='absolute bottom-0 z-10 transition duration-200 hover:scale-105'
            />
            <Image
              src='/images/vote/candidateArc.svg'
              alt='candidateArc'
              sizes='100vw'
              width={200}
              height={100}
              className='md:w-[12rem] lg:w-[14rem]'
            />
          </div>
        </div>
        <div className='mt-16 flex flex-col justify-center space-y-4'>
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
            onClick={() => {}}
            isActive={isConfirmed}
            title='Cast your Vote'
          />
        </div>
      </div>
    </div>
  );
}
