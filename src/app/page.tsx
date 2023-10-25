import React from 'react';
import Image from 'next/image';
import About from '@/components/about/About';

export default function Home() {
  return (
    <div className='flex flex-col w-full h-full overflow-hidden'>
      <About />
      <div className='bg-main overflow-hidden relative h-[57vh] justify-center items-center'>
        <div className='absolute flex flex-col lg:flex-row justify-center'>
          <div className='z-10 flex flex-col text-white h-full w-full justify-center p-8 mt-10 md:mt-2 lg:mt-8 md:pr-[9rem] lg:pr-[20rem]'>
            <Image
              src='/images/footer/logoHimakom.svg'
              alt='logo'
              height={500}
              width={80}
              className='md:w-[5rem] lg:w-[6rem]'
            />
            <Image
              src='/images/footer/titleHimakom.svg'
              alt='logo'
              height={500}
              width={600}
              className='-ml-5 mt-3 sm:-ml-8 '
            />
            <p className='bg-main w-fit text-gold pr-2 md:text-[25px] lg:text-[25px]'>Gedung Fakultas MIPA UGM </p>
            <p className='bg-main w-fit text-gold pr-2 md:text-[25px] lg:text-[25px]'>Sekip Utara, Bulaksumur, </p>
            <p className='bg-main w-fit text-gold pr-2 md:text-[25px] lg:text-[25px]'>Mlati, Sleman, DI Yogyakarta </p>
            <p className='bg-main w-fit text-gold pr-2 md:text-[25px] lg:text-[25px]'>© HIMAKOM UGM - All rights reserved. </p>
          </div>
          <div className='flex flex-row z-10 relative -mt-10 md:-mt-8 lg:mt-6 space-x-3 p-8 items-end'>
            <a href='https://twitter.com'>
              <Image
                src='/images/footer/twitter.svg'
                alt='logo'
                height={100}
                width={40}
                className='md:w-[4rem] lg:w-[6rem]'
              />
            </a>
            <a href='https://instagram.com'>
              <Image
                src='/images/footer/instagram.svg'
                alt='logo'
                height={100}
                width={40}
                className='md:w-[4rem] lg:w-[6rem]'
              />
            </a>
          </div>
        </div>
        <div className='w-full h-full absolute top-0 bg-red-500 lg:items-end'>
          <Image
            src='/images/footer/backMobile.png'
            alt='background'
            height={50}
            width={300}
            className='w-full h-full object-cover block md:hidden'
          />
          <Image
            src='/images/footer/backWebsite.png'
            alt='background'
            height={50}
            width={300}
            className='w-full h-full object-cover hidden md:block'
          />
        </div>
      </div>
    </div>
  );
}