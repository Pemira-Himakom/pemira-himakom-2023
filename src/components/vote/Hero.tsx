import React from "react";
import Image from "next/image";
// eslint-disable-next-line import/no-unresolved
import MobileLogo from "../../../public/images/main/MobileLogo.png"
// eslint-disable-next-line import/no-unresolved
import DesktopLogo from "../../../public/images/main/DesktopLogo.png"
import Background from "../../../public/images/main/heroBackground.png"

export default function Hero () {
    return (
      <section className='flex h-[100vh] flex-col items-center justify-center bg-gradient-to-t from-[#20222D]'>
        <div className='flex flex-col items-center'>
          <div className='mb-28 mt-[18vh] w-min-full'>
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
              className='md:block hidden md:min-w-[600px] lg:min-w-[800px]'
            />
          </div>
          <p className=' w-fit rounded-full bg-[#E4BC53] px-5 py-2 lg:px-8 lg:py-4 text-center text-[20px] lg:text-[22px] font-semibold leading-none text-[#20222D]'>
            Vote Now
          </p>
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
