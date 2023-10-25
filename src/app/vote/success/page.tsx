'use client';

import Image from 'next/image';
import React from 'react';
import Button from '@/components/vote/Button';

export default function VoteSuccessPage() {
    return (
        <div className='h-full'>
            <div className='z-10 h-full flex flex-col items-center justify-center md:h-[100%] md:pt-[10vh] lg:pt-[20vh]'>
                <Image
                    src='/images/vote/titleSuccessMobile.svg'
                    alt='title'
                    width={250}
                    height={500}
                    className='z-20 block md:hidden'
                />
                <Image
                    src='/images/vote/titleSuccessful.svg'
                    alt='title'
                    width={800}
                    height={1000}
                    className='z-20 hidden md:block md:w-[375px] lg:w-[37.5rem]'
                />

                <p className='text-pink z-10 text-center px-[20vw] md:px-[15vw] lg:px-[16vw] xl:px-[20vw]  sm:px-[26vw] md:text-2xl lg:text-4xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus, nulla et.</p>
                <div className='z-10 pt-3 sm:px-8 md:p-4 lg:p-8'>
                    <Button
                        onClick={() => { }}
                        title='Back to Home'
                        isActive
                    />
                </div>
            </div>
            <Image
                src='/images/vote/arc.svg'
                alt='arc'
                fill
                className='hidden object-contain md:block'
            />
            <Image
                src='/images/vote/arcMobile.svg'
                alt='arc'
                fill
                className='block object-contain md:hidden md:w-[375px] lg:w-[37.5rem]'
            />
        </div>
    );
}
