'use client';

import Button from '@/components/vote/Button';
import { NIMContext } from '@/context/NIMContext';
import useValidateNIM from '@/hooks/vote/useValidateNIM';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useRef, useState } from 'react';

export default function ValidatePage() {
  const router = useRouter();
  const { validate, isLoading, error } = useValidateNIM();
  const { student } = useContext(NIMContext)!;

  const [angkatan, setAngkatan] = useState('');
  const [niu, setNIU] = useState('');
  const [fakultas, setFakultas] = useState('');

  const angkatanInput = useRef<HTMLInputElement>(null);
  const niuInput = useRef<HTMLInputElement>(null);
  const fakultasInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (angkatan.length === 2) {
      niuInput.current?.focus();
    }
  }, [angkatan]);

  useEffect(() => {
    if (niu.length === 6) {
      fakultasInput.current?.focus();
    }
  }, [niu]);

  useEffect(() => {
    if (!isLoading && student) {
      router.push('/vote/cast');
    }
  }, [isLoading, student, router]);

  return (
    <div className='absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center md:h-[90%]'>
      <div className='z-10 flex w-[85%] flex-col items-center justify-center space-y-[2.5rem] md:w-[60%]'>
        <Image
          src='/images/vote/titleMobile.svg'
          alt='title'
          width={220}
          height={10}
          className='block md:hidden'
        />
        <Image
          src='/images/vote/title.svg'
          alt='title'
          sizes='100vw'
          width={500}
          height={300}
          className='hidden md:block md:w-[375px] lg:w-[37.5rem]'
        />
        <div className='z-20 flex w-[80%] items-center space-x-3 text-[1rem] text-white md:text-2xl lg:w-[75%] lg:space-x-8 lg:text-4xl'>
          <div className='flex w-[20%] items-center justify-center rounded-md bg-main-variant px-[0.2rem] pb-[0.4rem] pt-[0.55rem] lg:rounded-xl lg:pb-[0.75rem] lg:pt-[1rem]'>
            <input
              type='text'
              value={angkatan}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              ref={angkatanInput}
              onKeyDown={(e) => {
                if (
                  e.key.toLowerCase() === 'arrowright' &&
                  angkatanInput.current?.selectionEnd === 2
                ) {
                  niuInput.current?.focus();
                }
              }}
              onChange={(e) => {
                setAngkatan(e.target.value);
              }}
              maxLength={2}
              placeholder='22'
              className='w-[65%] bg-transparent text-center outline-none'
            />
          </div>
          <p className=''>/</p>
          <div className='flex w-[40%] items-center justify-center rounded-md bg-main-variant px-[0.2rem] pb-[0.4rem] pt-[0.55rem] lg:rounded-xl lg:pb-[0.75rem] lg:pt-[1rem]'>
            <input
              type='text'
              value={niu}
              ref={niuInput}
              onKeyDown={(e) => {
                if (
                  (e.key.toLowerCase() === 'arrowleft' ||
                    e.key.toLowerCase() === 'backspace') &&
                  niuInput.current?.selectionEnd === 0
                ) {
                  angkatanInput.current?.focus();
                } else if (
                  e.key.toLowerCase() === 'arrowright' &&
                  niuInput.current?.selectionEnd === 6
                ) {
                  fakultasInput.current?.focus();
                }
              }}
              onChange={(e) => {
                setNIU(e.target.value);
              }}
              maxLength={6}
              placeholder='123456'
              className='w-[80%] bg-transparent text-center outline-none'
            />
          </div>
          <p className='w-[25%] text-center'>/ PA /</p>
          <div className='flex w-[35%] items-center justify-center rounded-md bg-main-variant px-[0.2rem] pb-[0.4rem] pt-[0.55rem] lg:rounded-xl lg:pb-[0.75rem] lg:pt-[1rem]'>
            <input
              type='text'
              value={fakultas}
              ref={fakultasInput}
              onKeyDown={(e) => {
                if (
                  (e.key.toLowerCase() === 'arrowleft' ||
                    e.key.toLowerCase() === 'backspace') &&
                  fakultasInput.current?.selectionEnd === 0
                ) {
                  niuInput.current?.focus();
                } else if (
                  e.key.toLowerCase() === 'enter' &&
                  !isLoading &&
                  angkatan !== '' &&
                  niu !== '' &&
                  fakultas !== ''
                ) {
                  validate(`${angkatan}/${niu}/PA/${fakultas}`);
                }
              }}
              onChange={(e) => {
                setFakultas(e.target.value);
              }}
              maxLength={5}
              placeholder='78910'
              className='w-[75%] bg-transparent text-center outline-none'
            />
          </div>
        </div>
        <div className='z-20 flex flex-col items-center justify-center space-y-4'>
          {error && (
            <p className='w-[80%] text-center text-sm text-red-600 md:text-base lg:w-full lg:text-lg'>
              {error}
            </p>
          )}
          <Button
            onClick={async () => {
              await validate(`${angkatan}/${niu}/PA/${fakultas}`);
            }}
            title={isLoading ? 'Checking...' : 'Check your NIM'}
            isActive={
              !isLoading && angkatan !== '' && niu !== '' && fakultas !== ''
            }
          />
        </div>
      </div>
      <Image
        src='/images/vote/arc.svg'
        alt='arc'
        fill
        className='hidden object-contain lg:block'
      />
      <Image
        src='/images/vote/arcMobile.svg'
        alt='arc'
        fill
        className='block object-contain lg:hidden'
      />
    </div>
  );
}
