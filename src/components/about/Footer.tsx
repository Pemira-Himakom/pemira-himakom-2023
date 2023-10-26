import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='relative h-[75vh] md:h-[70vh] items-center justify-center overflow-hidden bg-main'>
      <div className='absolute flex flex-col w-full justify-center lg:flex-row px-12 py-20 md:py-20 md:px-20 space-y-8'>
        <div className='z-10 flex h-full w-full flex-col justify-center text-white'>
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
          <p className='w-fit bg-main pr-2 text-gold md:text-[25px] lg:text-[25px]'>
            Gedung Fakultas MIPA UGM{' '}
          </p>
          <p className='w-fit bg-main pr-2 text-gold md:text-[25px] lg:text-[25px]'>
            Sekip Utara, Bulaksumur,{' '}
          </p>
          <p className='w-fit bg-main pr-2 text-gold md:text-[25px] lg:text-[25px]'>
            Mlati, Sleman, DI Yogyakarta{' '}
          </p>
          <p className='w-fit bg-main pr-2 text-gold md:text-[25px] lg:text-[25px]'>
            © HIMAKOM UGM - All rights reserved.{' '}
          </p>
        </div>
        <div className='relative z-10 flex flex-row items-end space-x-3'>
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
      <div className='absolute top-0 h-full w-full lg:items-end'>
        <Image
          src='/images/footer/backMobile.png'
          alt='background'
          height={50}
          width={300}
          className='block h-full w-full object-cover md:hidden'
        />
        <Image
          src='/images/footer/backWebsite.png'
          alt='background'
          height={50}
          width={300}
          className='hidden h-full w-full object-cover md:block'
        />
      </div>
    </div>
  );
}