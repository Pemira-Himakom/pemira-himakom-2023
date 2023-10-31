import React from "react";
// eslint-disable-next-line import/no-unresolved
import Image from "next/image";
// eslint-disable-next-line import/no-unresolved
import TimelineLogo from "../../../public/images/main/TimelineLogo.png"
// eslint-disable-next-line import/no-unresolved
import Sunflower from "../../../public/images/main/SunFlower.png"
// eslint-disable-next-line import/no-unresolved
import TimelineFlower from "../../../public/images/main/TimelineFlower.png"

export default function Timeline () {
    return (
      <section className='flex h-auto flex-col items-center justify-center bg-[#20222D] py-40'>
        {/* flower decor */}
        <Image
          src={TimelineFlower}
          width={500}
          height={500}
          alt='Flower decor'
          className='absolute left-0 w-auto md:-ml-[200px] md:mb-[800px] lg:-ml-[340px] lg:mb-20 lg:h-[800px]'
        />

        {/* Header */}
        <div className='pb-10'>
          <Image
            src={TimelineLogo}
            width={500}
            height={500}
            alt='timeline logo w-[329px] h-auto'
          />
        </div>

        {/* timeline */}
        <div className='flex flex-col gap-5 lg:flex-row'>
          {/* text buttom */}
          <div className='mr-[135px] flex flex-row-reverse items-center text-white lg:mr-0 lg:mt-12 lg:flex-col'>
            <div className='my-5 flex items-center justify-center'>
              <Image
                src={Sunflower}
                width={500}
                height={500}
                alt='sunflower'
                className='z-10 mx-2 h-20 w-20 lg:mx-0'
              />
              <div className='absolute h-1 w-40 rotate-90 bg-[#F6A5AB] lg:rotate-0'>
                {' '}
              </div>
            </div>
            <div className='text-end lg:p-0 lg:text-center'>
              <p className='font-semibold'>17-28 October</p>
              <p>Open Registration</p>
            </div>
          </div>

          {/* text above */}
          <div className='ml-[140px] flex flex-row-reverse items-center text-white lg:mb-12 lg:ml-0 lg:flex-col'>
            <div className=' lg:text-center'>
              <p className='font-semibold'>17-28 October</p>
              <p>Open Registration</p>
            </div>
            <div className='my-5 flex items-center justify-center'>
              <Image
                src={Sunflower}
                width={500}
                height={500}
                alt='sunflower'
                className='z-10 mx-2 h-20 w-20 lg:mx-0'
              />
              <div className='absolute h-1 w-40 rotate-90 bg-[#F6A5AB] lg:rotate-0'>
                {' '}
              </div>
            </div>
          </div>

          {/* text buttom */}
          <div className='mr-[135px] flex flex-row-reverse items-center text-white lg:mr-0 lg:mt-12 lg:flex-col'>
            <div className='my-5 flex items-center justify-center'>
              <Image
                src={Sunflower}
                width={500}
                height={500}
                alt='sunflower'
                className='z-10 mx-2 h-20 w-20 lg:mx-0'
              />
              <div className='absolute h-1 w-40 rotate-90 bg-[#F6A5AB] lg:rotate-0'>
                {' '}
              </div>
            </div>
            <div className='text-end lg:p-0 lg:text-center'>
              <p className='font-semibold'>17-28 October</p>
              <p>Open Registration</p>
            </div>
          </div>

          {/* text above */}
          <div className='ml-[140px] flex flex-row-reverse items-center text-white lg:mb-12 lg:ml-0 lg:flex-col'>
            <div className=' lg:text-center'>
              <p className='font-semibold'>17-28 October</p>
              <p>Open Registration</p>
            </div>
            <div className='my-5 flex items-center justify-center'>
              <Image
                src={Sunflower}
                width={500}
                height={500}
                alt='sunflower'
                className='z-10 mx-2 h-20 w-20 lg:mx-0'
              />
              <div className='absolute h-1 w-40 rotate-90 bg-[#F6A5AB] lg:rotate-0'>
                {' '}
              </div>
            </div>
          </div>

          {/* text buttom */}
          <div className='mr-[135px] flex flex-row-reverse items-center text-white lg:mr-0 lg:mt-12 lg:flex-col'>
            <div className='my-5 flex items-center justify-center'>
              <Image
                src={Sunflower}
                width={500}
                height={500}
                alt='sunflower'
                className='z-10 mx-2 h-20 w-20 lg:mx-0'
              />
              <div className='absolute h-1 w-40 rotate-90 bg-[#F6A5AB] lg:rotate-0'>
                {' '}
              </div>
            </div>
            <div className='text-end lg:p-0 lg:text-center'>
              <p className='font-semibold'>17-28 October</p>
              <p>Open Registration</p>
            </div>
          </div>

          {/* text above */}
          <div className='ml-[140px] flex flex-row-reverse items-center text-white lg:mb-12 lg:ml-0 lg:flex-col'>
            <div className=' lg:text-center'>
              <p className='font-semibold'>17-28 October</p>
              <p>Open Registration</p>
            </div>
            <div className='my-5 flex items-center justify-center'>
              <Image
                src={Sunflower}
                width={500}
                height={500}
                alt='sunflower'
                className='z-10 mx-2 h-20 w-20 lg:mx-0'
              />
              <div className='absolute h-1 w-40 rotate-90 bg-[#F6A5AB] lg:rotate-0'>
                {' '}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}