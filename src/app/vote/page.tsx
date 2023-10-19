'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function VotePage() {
  const [angkatan, setAngkatan] = useState("")
  const [niu, setNIU] = useState("")
  const [fakultas, setFakultas] = useState("")
  const angkatanInput = useRef<HTMLInputElement>(null)
  const niuInput = useRef<HTMLInputElement>(null)
  const fakultasInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(angkatan.length === 2){
      niuInput.current?.focus()
    }
  }, [angkatan])

  useEffect(() => {
    if(niu.length === 6){
      fakultasInput.current?.focus()
    }
  }, [niu])

  return (
    <div className='relative h-screen font-sans'>
      <div className='absolute left-1/2 top-1/2 flex h-24 w-[87.5%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center space-y-[2.5rem]'>
        <Image
          src='/images/vote/titleMobile.svg'
          alt='title'
          width={220}
          height={10}
        />
        <div className='text-[1rem flex w-[80%] items-center space-x-3 text-white'>
          <input
            type='text'
            value={angkatan}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            ref={angkatanInput}
            onKeyDown={(e) => {
              if(e.key.toLowerCase() === "arrowright" && angkatanInput.current?.selectionEnd === 2){
                niuInput.current?.focus()
              }
            }}
            onChange={(e) => {
              setAngkatan(e.target.value)
            }}
            maxLength={2}
            placeholder='22'
            className='bg-main-variant w-[20%] rounded-md px-[0.2rem] pb-[0.4rem] pt-[0.55rem] text-center outline-none'
          />
          <p className=''>/</p>
          <input
            type='text'
            value={niu}
            ref={niuInput}
            onKeyDown={(e) => {
              if(e.key.toLowerCase() === "arrowleft" && niuInput.current?.selectionEnd === 0){
                angkatanInput.current?.focus()
              } else if(e.key.toLowerCase() === "arrowright" && niuInput.current?.selectionEnd === 6){
                fakultasInput.current?.focus()
              }
            }}
            onChange={(e) => {
              setNIU(e.target.value)
            }}
            maxLength={6}
            placeholder='123456'
            className='bg-main-variant w-[40%] rounded-md px-[0.2rem] pb-[0.4rem] pt-[0.55rem] text-center outline-none'
          />
          <p className='w-[25%]'>/ PA /</p>
          <input
            type='text'
            value={fakultas}
            ref={fakultasInput}
            onKeyDown={(e) => {
              if(e.key.toLowerCase() === "arrowleft" && fakultasInput.current?.selectionEnd === 0){
                niuInput.current?.focus()
              }
            }}
            onChange={(e) => {
              setFakultas(e.target.value)
            }}
            maxLength={6}
            placeholder='78910'
            className='bg-main-variant w-[40%] rounded-md px-[0.2rem] pb-[0.4rem] pt-[0.55rem] text-center outline-none'
          />
        </div>
        <div className='pt-8'>
          <button
            type='submit'
            className='rounded-full bg-pink px-12 py-2 text-sm'
            onClick={() => {
              console.log(`${angkatan}/${niu}/PA/${fakultas}`)
            }}
          >
            <p className='font-medium'>Check Your NIM</p>
          </button>
        </div>
      </div>
      <Image
        src='/images/vote/arcMobile.svg'
        alt='arc'
        fill
        className='-z-40 object-contain'
      />
      <Image
        src='/images/vote/bg.png'
        alt='bg'
        fill
        className='absolute top-0 -z-50 object-cover'
      />
    </div>
  );
}
