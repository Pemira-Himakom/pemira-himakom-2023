'use client';

import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/vote/Button';
import useAdminAuth from '@/hooks/admin/useAdminAuth';
import { useRouter } from 'next/navigation';
import { AdminAuthContext } from '@/context/AdminAuthContext';

export default function AdminAuthPage() {
  const router = useRouter();
  const { admin, error, isLoading } = useContext(AdminAuthContext);
  const { authError, signInWithGoogle } = useAdminAuth();

  useEffect(() => {
    if (admin) {
      router.push('/admin/control');
    }
  }, [admin, router]);

  return (
    <div className='relative h-screen font-sans'>
      <div className='absolute left-1/2 top-1/2 z-10 mt-8 flex w-[85%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center'>
        <h2 className='font-display text-3xl text-pink lg:text-6xl'>
          Login as Admin
        </h2>
        <div className='flex flex-col items-center justify-center pt-[2rem]'>
          {(error || authError) && (
            <p className='text-red pb-4 text-sm text-red-500 lg:text-lg'>
              {error || authError}
            </p>
          )}
          <Button
            onClick={() => {
              signInWithGoogle();
            }}
            title={isLoading ? 'Loading...' : 'Authenticate'}
            isActive
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
