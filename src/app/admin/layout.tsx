'use client';

import { AdminAuthContext } from '@/context/AdminAuthContext';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import React, { useContext, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/config';

export default function AdminLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { admin, isLoading } = useContext(AdminAuthContext);

  useEffect(() => {
    if (!isLoading && !admin) {
      router.push('/admin/auth');
    }
  }, [admin, isLoading, router]);

  return (
    <div className='relative h-[100vh] font-sans'>
      <div className='flex h-full w-full flex-col items-center space-y-[2rem] bg-frame bg-opacity-[85%] p-8 text-white'>
        <h2 className='font-display text-2xl'>Admin Page</h2>
        {isLoading && <p>Loading...</p>}
        {admin && (
          <div className='flex flex-col w-full items-center space-y-[2.5rem]'>
            <div className='flex flex-col items-center'>
              <p>Logged in as {admin.email}</p>
              <div className='flex space-x-4'>
                <button
                  className={`${
                    pathname === '/admin/report'
                      ? 'bg-pink text-main'
                      : 'border-ink border-2 bg-transparent text-white'
                  } mt-4 rounded-full  px-4 py-2  transition duration-200 hover:bg-pink hover:text-main`}
                  onClick={() => {
                    router.push('/admin/report');
                  }}
                  type='button'
                >
                  View report
                </button>
                <button
                  className={`${
                    pathname === '/admin/control'
                      ? 'bg-pink text-main'
                      : 'border-ink border-2 bg-transparent text-white'
                  } mt-4 rounded-full  px-4 py-2  transition duration-200 hover:bg-pink hover:text-main`}
                  onClick={() => {
                    router.push('/admin/control');
                  }}
                  type='button'
                >
                  View control
                </button>
                <button
                  className='mt-4 rounded-full bg-red-400 px-4 py-2 text-white transition duration-200'
                  onClick={() => {
                    signOut(auth);
                  }}
                  type='button'
                >
                  Log out
                </button>
              </div>
            </div>
            <div className='h-[0.25px] w-full bg-white' />
            {children}
          </div>
        )}
      </div>
      <Image
        src='/images/vote/bg.png'
        alt='bg'
        fill
        className='absolute top-0 -z-50 h-screen object-cover'
      />
    </div>
  );
}
