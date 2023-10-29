import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className='relative flex h-auto w-screen flex-col items-center justify-between overflow-hidden bg-main px-12 py-20 sm:p-20 md:p-24 lg:p-24'>
      <Image
        src='/images/main/flowerAbout.svg'
        alt='title'
        width={900}
        height={2000}
        className='absolute -right-[40%] h-auto w-auto -rotate-[66deg] md:-right-[35%] lg:-right-[15%]'
      />
      <Image
        src='/images/main/aboutPemira.svg'
        alt='title'
        width={800}
        height={800}
        className='mt-[22rem] md:w-[55vw] lg:w-[40vw] overflow-hidden sm:mt-[28rem] md:mt-[26rem] lg:mt-[28rem]'
      />
      <p className='pt-2 text-center font-sans text-white md:text-xl lg:text-2xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor
        magna et nibh tincidunt pellentesque nec sed ipsum. Pellentesque magna
        dolor, sagittis a tellus id, tincidunt aliquet neque. Donec egestas, mi
        id placerat tincidunt, nunc est lacinia magna, id malesuada mauris augue
        in nibh. Cras in justo orci. Cras sit amet ultrices est.
      </p>
    </section>
  );
}
