import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section className='flex bg-main flex-col items-center justify-between p-16 sm:p-20 md:p-24 lg:p-24 overflow-hidden h-auto w-screen relative'>
            <Image
                src='/images/main/flowerAbout.svg'
                alt='title'
                width={900}
                height={2000}
                className='absolute  ml-[36rem] sm:ml-[40rem] md:ml-[56rem] lg:ml-[70rem] h-auto w-auto -rotate-[66deg]'
            />
            <Image
                src='/images/main/aboutPemira.svg'
                alt='title'
                width={600}
                height={800}
                className='mt-[22rem] sm:mt-[28rem] md:mt-[26rem] lg:mt-[28rem] overflow-hidden'
            />
            <p className='text-white font-sans text-center md:text-xl lg:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor magna et nibh tincidunt pellentesque nec sed ipsum. Pellentesque magna dolor, sagittis a tellus id, tincidunt aliquet neque. Donec egestas, mi id placerat tincidunt, nunc est lacinia magna, id malesuada mauris augue in nibh. Cras in justo orci. Cras sit amet ultrices est.</p>
        </section>
    )
}
