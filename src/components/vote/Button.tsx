import React from 'react';

export default function Button({
  onClick,
  isActive,
  title,
}: {
  onClick: () => void;
  isActive: boolean;
  title: string;
}) {
  return (
    <button
      type='submit'
      disabled={!isActive}
      className={`${isActive ? "grayscale-0 opacity-100" : "grayscale opacity-60"} transition duration-200 rounded-full bg-pink px-12 py-2.5 text-sm md:px-14 md:py-3 lg:px-20 lg:py-4`}
      onClick={onClick}
    >
      <p className='font-semibold md:text-xl lg:text-2xl'>{title}</p>
    </button>
  );
}
