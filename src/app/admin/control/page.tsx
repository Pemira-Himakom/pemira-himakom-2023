'use client';

import { AdminAuthContext } from '@/context/AdminAuthContext';
import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

export default function AdminControlPage() {
  const router = useRouter();
  const { admin, isLoading } = useContext(AdminAuthContext);

  useEffect(() => {
    if (!isLoading && !admin) {
      router.push('/admin/auth');
    }
  }, [admin, isLoading, router]);

  return (
    <div className='flex h-full w-full flex-col items-center bg-frame bg-opacity-[85%] p-8 text-white'>
      <h2 className='font-display text-2xl'>Admin Control Page</h2>
      {isLoading && <p>Loading...</p>}
      {admin && (
        <div className='flex flex-col items-center pt-7'>
          <p>Logged in as {admin.email}</p>
          <div className='flex space-x-4'>
            <button
              className='mt-4 rounded-full bg-pink px-4 py-2 text-main transition duration-200 hover:font-bold'
              onClick={() => {
                signOut(auth);
              }}
              type='button'
            >
              Log out
            </button>
            <button
              className='mt-4 rounded-full bg-pink px-4 py-2 text-main transition duration-200 hover:font-bold'
              onClick={() => {
                router.push("/admin/report");
              }}
              type='button'
            >
              View report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
