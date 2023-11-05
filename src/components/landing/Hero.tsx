import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// eslint-disable-next-line import/no-unresolved
import MobileLogo from '../../../public/images/main/MobileLogo.png';
// eslint-disable-next-line import/no-unresolved
import DesktopLogo from '../../../public/images/main/DesktopLogo.png';
import Background from '../../../public/images/main/heroBackground.png';
import HB from '../../../public/images/main/homeBush.svg';

export default function LandingHero() {
  const router = useRouter();

  return (
    <section className='flex h-[100vh] flex-col items-center justify-center bg-gradient-to-t from-[#212332]'>
      <div className='absolute z-30 mt-[80vh] lg:mt-[100vh]'>
        <Image
          src={HB}
          width={500}
          height={500}
          alt='HB'
          className='w-screen'
        />
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-min-full mb-28 mt-[12vh]'>
          <Image
            src={MobileLogo}
            width={500}
            height={500}
            alt='Logo'
            className='md:hidden'
          />
          <Image
            src={DesktopLogo}
            width={500}
            height={500}
            alt='Logo'
            className='hidden md:block md:min-w-[600px] lg:min-w-[800px]'
          />
        </div>

        <button
          type='button'
          onClick={() => router.push('/vote/validate')}
          className='w-fit rounded-full bg-[#E4BC53] px-6 py-3 text-center text-[20px] font-semibold leading-none text-[#20222D] duration-500 hover:-translate-y-2 lg:px-8 lg:py-4 lg:text-[22px]'
        >
          Vote Now
        </button>
      </div>
      <Image
        src={Background}
        width={500}
        height={500}
        className='absolute -z-10 h-screen w-screen object-cover'
        alt='Background'
      />
    </section>
  );
}
