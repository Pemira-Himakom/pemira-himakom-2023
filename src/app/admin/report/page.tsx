'use client';

import { AdminAuthContext } from '@/context/AdminAuthContext';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

export default function AdminReportPage() {
  const router = useRouter();
  const { admin, isLoading } = useContext(AdminAuthContext);

  useEffect(() => {
    if (!isLoading && !admin) {
      router.push('/admin/auth');
    }
  }, [admin, isLoading, router]);

  return (
    <div className='flex h-full w-full flex-col items-center bg-frame bg-opacity-[85%] p-8 text-white'>
      <h1>Admin Report Page</h1>
      {isLoading && <p>Loading...</p>}
      {admin && <p>Logged in as {admin.email}</p>}
    </div>
  );
}
