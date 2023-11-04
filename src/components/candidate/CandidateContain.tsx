'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Candidate from '@/components/candidate/CandidateFrame';
import useCandidates from '@/hooks/candidate/useCandidates';
import CandidateLogo from '../../../public/images/main/Candidate.svg';
import Vision from '../../../public/images/main/Vision.svg';
import Mission from '../../../public/images/main/Mission.svg';
import CandidateTab from './CandidateTablet';
import FlowerVote from '../../../public/images/main/flowerVoteNow.png'

import 'swiper/css';

export default function CandidateContain() {
  const { candidates } = useCandidates();
  const [chosenID, setChosenID] = useState<string | null>('');
  const [isOpen, setIsOpen] = useState(0);

  return (
    <section className='bg-[#212332] overflow-x-hidden 2xl:container'>
      {/* logo Candidates */}
      <div className='-mt-1 mb-10 flex justify-center'>
        <Image
          src={CandidateLogo}
          width={500}
          height={500}
          alt='candidate logo'
        />
      </div>

      <div className='hidden md:block lg:hidden'>
        {/* tablet */}
        <Swiper
          className='flex'
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          centeredSlides
          onSwiper={(swiper: any) => console.log(swiper)}
          onSlideChange={() => {}}
        >
          {candidates?.map((candidate, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <CandidateTab
                key={candidate.id}
                candidateID={candidate.id}
                candidatePhoto={candidate.photoURL}
                candidateName={candidate.name}
                candidateVision={candidate.vision}
                candidateMission={candidate.mission}
                candidateGrandDesign={candidate.grandDesignURL}
                candidateCV={candidate.cvURL}
                isChosen={chosenID === candidate.id}
                setChosenID={setChosenID}
                setIsOpen={setIsOpen}
                isActive={isOpen === index}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* mobile & desktop */}
      <div className='md:hidden lg:block'>
        <div className='flex flex-col lg:flex-row lg:justify-evenly'>
          {candidates?.map((candidate, index) => (
            <Candidate
              key={candidate.id}
              candidateID={candidate.id}
              candidatePhoto={candidate.photoURL}
              candidateName={candidate.name}
              candidateVision={candidate.vision}
              candidateMission={candidate.mission}
              candidateGrandDesign={candidate.grandDesignURL}
              candidateCV={candidate.cvURL}
              isChosen={chosenID === candidate.id}
              setChosenID={setChosenID}
              setIsOpen={setIsOpen}
              isActive={isOpen === index}
              index={index}
            />
          ))}
        </div>
        {/* desktop vision mission */}
        <div className='hidden lg:block'>
          <div className='flex justify-around text-white opacity-0 lg:opacity-100'>
            <div>
              <Image
                src={Vision}
                width={500}
                height={500}
                alt='Vision'
                className='h-20'
              />
              <p className='text-center'>{candidates[isOpen]?.vision}</p>
            </div>
            <div>
              <Image
                src={Mission}
                width={500}
                height={500}
                alt='Vision'
                className='h-20'
              />
              <p className='text-center'>{candidates[isOpen]?.mission}</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom flower & vote */}
      <div className='flex h-fit items-end justify-center md:pt-20 lg:h-[600px]'>
        <button
          type='button'
          className=' relative z-30 mb-[80px] h-fit w-[260px] rounded-full bg-[#E4BC53] px-6 py-3 text-center text-[20px] font-semibold leading-none text-[#20222D] duration-500 md:w-fit lg:w-[400px] lg:px-8 lg:py-4 lg:text-[22px]'
        >
          Vote Now
        </button>
        <Image
          src={FlowerVote}
          width={1000}
          height={1000}
          alt='flower'
          className='z-2 absolute right-0 -mr-[80px] mb-40 h-[400px] w-auto rotate-[-10deg] md:mb-0 md:ml-[80vh] md:mr-0 md:rotate-0 lg:mb-[80px] lg:ml-0 lg:hidden lg:h-[600px]'
        />
        <Image
          src={FlowerVote}
          width={1000}
          height={1000}
          alt='flower'
          className='z-2 absolute mb-40 hidden h-[400px] w-auto lg:mb-[80px] lg:ml-0 lg:block lg:h-[600px]'
        />
      </div>
    </section>
  );
}
