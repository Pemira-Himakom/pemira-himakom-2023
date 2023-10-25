import Image from 'next/image';
import React from 'react';

export default function CandidateCard({
  candidatePhoto,
  candidateName,
  candidateID,
  isChosen,
  setChosenID,
}: {
  candidatePhoto: string;
  candidateName: string;
  candidateID: string;
  isChosen: boolean;
  setChosenID: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <button
      key={candidateID}
      type='button'
      onClick={() => setChosenID(candidateID)}
      className={`${
        isChosen ? 'scale-100 grayscale-0' : "scale-90"
      } z-50 flex w-[40%] transform cursor-pointer items-center justify-center grayscale transition duration-200 hover:scale-105 hover:grayscale-0 md:w-[30%] lg:w-[40%]`}
    >
      <p className='absolute bottom-4 z-20 font-display text-3xl font-semibold text-pink'>
        {candidateName}
      </p>
      <Image
        src={candidatePhoto}
        alt={candidateName}
        width={230}
        height={150}
        className='absolute bottom-0 z-10 w-[12rem] lg:w-[16rem]'
      />
      <Image
        src='/images/vote/candidateArc.svg'
        alt='candidateArc'
        sizes='100vw'
        width={200}
        height={100}
        className='md:w-[12rem] lg:w-[16rem]'
      />
    </button>
  );
}
