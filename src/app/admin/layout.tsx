import Image from 'next/image';
import React from 'react';

export default function AdminLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative h-screen font-sans'>
      {children}
      <Image
        src='/images/vote/bg.png'
        alt='bg'
        fill
        className='absolute top-0 -z-50 h-full object-cover'
      />
    </div>
  );
}
