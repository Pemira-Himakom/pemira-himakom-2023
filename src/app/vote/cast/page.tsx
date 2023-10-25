'use client';

import Button from '@/components/vote/Button';
import CandidateCard from '@/components/vote/CandidateCard';
import useVote from '@/hooks/vote/useVote';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function CastPage() {
  const { vote, error, isLoading, isSuccess } = useVote();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [chosenID, setChosenID] = useState<string | null>('');

  useEffect(() => {
    if(isSuccess && !isLoading) {
      // eslint-disable-next-line no-alert
      alert('Vote submitted!');
    }
  }, [isLoading, isSuccess]);

  return (
    <div className='flex h-full w-full justify-center'>
      <div className='flex w-[85%] flex-col items-center justify-between overflow-y-scroll border-l-[8px] border-r-[8px] border-l-pink border-r-pink bg-frame bg-opacity-[85%] py-16'>
        <Image
          src='/images/vote/titleCastMobile.svg'
          alt='titleMobile'
          width={200}
          height={100}
          className='block md:hidden'
        />
        <Image
          src='/images/vote/titleCast.svg'
          alt='titleMobile'
          sizes='100vw'
          width={525}
          height={100}
          className='hidden md:block md:w-[35rem] lg:w-[50rem]'
        />
        <div className='flex h-full w-full flex-col items-center justify-around space-y-16 pt-20 lg:flex-row lg:items-end lg:justify-center lg:pt-0'>
          <CandidateCard
            candidatePhoto='/images/vote/sampleCandidate.png'
            isChosen={chosenID === 'YXGtNEXLF1EwnhMNhiiW'}
            candidateName='Lorem'
            candidateID='YXGtNEXLF1EwnhMNhiiW'
            setChosenID={setChosenID}
          />
          <CandidateCard
            candidatePhoto='/images/vote/sampleCandidate.png'
            isChosen={chosenID === 'ry0ev7URpasBK6KqKyxG'}
            candidateName='Ipsum'
            candidateID='ry0ev7URpasBK6KqKyxG'
            setChosenID={setChosenID}
          />
        </div>
        <div className='mt-16 flex flex-col justify-center space-y-4 pt-8'>
          <div className='flex w-full items-center justify-center space-x-3'>
            <input
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  setIsConfirmed(true);
                } else {
                  setIsConfirmed(false);
                }
              }}
              type='checkbox'
              className='h-4 w-4 accent-pink'
            />
            <p className='pt-0.5 text-sm text-white md:text-base'>
              I confirm my choice
            </p>
          </div>
          {error && (
            <p className='pb-2 text-center text-sm text-red-600'>{error}</p>
          )}
          <Button
            onClick={async () => {
              if (isConfirmed && chosenID !== null) {
                // TODO: encyrpted token, voterID from context
                await vote('sampleToken', '7ACGvpLfnbX1CWeC95Ij', chosenID);
              }
            }}
            isActive={!isLoading && isConfirmed && chosenID !== null}
            title={isLoading ? 'Submitting...' : "Cast your Vote"}
          />
        </div>
      </div>
    </div>
  );
}
