/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CV from '../../../public/images/main/CV.svg';
import GD from '../../../public/images/main/Grand Design.svg';
import FB from '../../../public/images/main/bushframe.png';
import Vision from '../../../public/images/main/Vision.svg';
import Mission from '../../../public/images/main/Mission.svg';

export default function CandidateTablet({
  candidatePhoto,
  candidateName,
  candidateVision,
  candidateMission,
  candidateGrandDesign,
  candidateCV,
  setIsOpen,
  index,
}: {
  candidateGrandDesign: string;
  candidateMission: string[];
  candidateVision: string;
  candidatePhoto: string;
  candidateName: string;
  candidateCV: string;
  setIsOpen: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}) {
  const handleCardClick = () => {
    setIsOpen(index);
  };

  return (
    <>
      <div className='flex justify-center mt-10'>
        {/* frame bush */}
        <button
          type='button'
          key={index}
          onClick={() => {
            handleCardClick();
          }}
          className='absolute z-20 -ml-[55px] -mt-[20px] w-[260px]'
        >
          <Image src={FB} width={500} height={500} alt='absolute' />
        </button>

        {/* button cv and grand design */}
        <div className='absolute z-40 ml-[186px] mt-4 duration-700'>
          <Link href={candidateCV}>
            <Image
              src={CV}
              width={500}
              height={500}
              alt='CV'
              className='mb-2 h-8 w-auto'
            />
          </Link>
          <Link href={candidateGrandDesign}>
            <Image
              src={GD}
              width={500}
              height={500}
              alt='CV'
              className='h-8 w-auto'
            />
          </Link>
        </div>
        <button
          type='button'
          className='z-10 mb-10 flex h-[300px] w-[250px] overflow-hidden rounded-lg border-4 border-[#FFEEE9] bg-[#20222D] text-[#FFEEE9] duration-700'
          onClick={() => {
            handleCardClick();
          }}
        >
          <div className='bottom absolute mt-4 flex self-end pb-2 pl-6 font-display text-[24px] font-bold text-white duration-700'>
            <div className='flex items-center justify-center font-display'>
              <p className='absolute'>{index + 1}</p>
              <div className='h-6 w-6 rounded-full border-2 border-white'>
                {' '}
              </div>
            </div>
            <p className='font-display'>&nbsp;{candidateName}</p>
          </div>

          <div>
            <Image
              src={candidatePhoto}
              width={1000}
              height={1000}
              alt={candidateName}
              className=''
            />
          </div>
        </button>
      </div>
      <div className='flex flex-col items-center text-white '>
        <div>
          <Image
            src={Vision}
            width={500}
            height={500}
            alt='Vision'
            className='h-20'
          />
          <p className='text-center'>{candidateVision}</p>
        </div>
        <div>
          <Image
            src={Mission}
            width={500}
            height={500}
            alt='Vision'
            className='h-20'
          />
          <p className='text-center'>{candidateMission}</p>
        </div>
      </div>
    </>
  );
}
