/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import CV from '../../../public/images/main/CV.svg'
import GD from '../../../public/images/main/Grand Design.svg';
import FB from '../../../public/images/main/bushframe.png'
import Vision from '../../../public/images/main/Vision.svg';
import Mission from '../../../public/images/main/Mission.svg';

export default function Candidate({
  candidatePhoto,
  candidateName,
  candidateVision,
  candidateMission,
  candidateGrandDesign,
  candidateCV,
  setIsOpen,
  isActive,
  index,
}: {
  candidateGrandDesign: string;
  candidateMission: string[];
  candidateVision: string;
  candidatePhoto: string;
  candidateName: string;
  candidateCV: string;
  setIsOpen: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  index: number;
}) {
  const handleCardClick = () => {
    setIsOpen(index);
  };

  return (
    <Disclosure>
      <div className='text-10 -mt-1 flex h-full w-full flex-col items-center lg:mb-20 '>
        <div>
          {/* frame bush */}
          <Disclosure.Button
            type='button'
            key={index}
            onClick={() => {
              handleCardClick();
            }}
            className={`absolute z-20 -ml-[150px] -mt-[20px] w-[260px] ${
              isActive ? 'grayscale-0' : ' grayscale'
            }`}
          >
            <Image src={FB} width={500} height={500} alt='absolute' />
          </Disclosure.Button>

          {/* button cv and grand design */}
          <div
            className={`absolute z-40 ml-[76px] mt-4 duration-700 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
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
        </div>

        {/* fame div */}
        <Disclosure.Button
          type='button'
          className={`z-10 mb-10 flex h-[300px] w-[250px] overflow-hidden rounded-lg border-4 border-[#FFEEE9] bg-[#20222D] text-[#FFEEE9] duration-700 ${
            isActive ? 'grayscale-0' : 'grayscale'
          }`}
          onClick={() => {
            handleCardClick();
          }}
        >
          <div
            className={`bottom absolute mt-4 flex self-end pb-2 pl-6 font-display text-[24px] font-bold text-white duration-700 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className='flex items-center justify-center'>
              <p className='absolute'>{index + 1}</p>
              <div className='h-6 w-6 rounded-full border-2 border-white'>
                {' '}
              </div>
            </div>
            <p className=''>&nbsp;{candidateName}</p>
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
        </Disclosure.Button>

        <Transition
          show={isActive}
          enter='transition duration-500 ease-out'
          enterFrom='transform scale-95 duration-500 opacity-0'
          enterTo='transform scale-100 duration-500 opacity-100'
          leave='transition duration-500 ease-out'
          leaveFrom='transform scale-100 duration-500 opacity-100'
          leaveTo='transform scale-95 duration-500 opacity-0'
        >
          <Disclosure.Panel static>
            {/* Mobile drop down vision mission */}
            <div
              className={`overflow-hidden pb-20 text-center text-[12px] text-white transition-all duration-700 md:hidden md:text-[16px] lg:text-[16px] ${
                isActive
                  ? 'h-auto translate-y-[0vh] opacity-100'
                  : 'h-0 -translate-y-[30vh] opacity-0'
              }`}
            >
              <div>
                <div className='pb-10'>
                  <Image
                    src={Vision}
                    width={500}
                    height={500}
                    alt='Vision'
                    className='h-20'
                  />
                  <p>{candidateVision}</p>
                </div>
                <div>
                  <Image
                    src={Mission}
                    width={500}
                    height={500}
                    alt='Vision'
                    className='h-20'
                  />
                  <p>{candidateMission}</p>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </Transition>
      </div>
    </Disclosure>
  );
}
