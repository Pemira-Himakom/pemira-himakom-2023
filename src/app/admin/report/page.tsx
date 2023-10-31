'use client';

import CandidateVotes from '@/components/admin/CandidateVotes';
import { AdminAuthContext } from '@/context/AdminAuthContext';
import useCandidates from '@/hooks/candidate/useCandidates';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect } from 'react';

export default function AdminReportPage() {
  const router = useRouter();
  const { candidates } = useCandidates();
  const { admin, isLoading } = useContext(AdminAuthContext);

  useEffect(() => {
    if (!isLoading && !admin) {
      router.push('/admin/auth');
    }
  }, [admin, isLoading, router]);

  return (
    <div className='flex h-full w-full flex-col space-y-8 text-white lg:flex-row lg:space-x-24 lg:space-y-0'>
      {candidates.map((candidate) => (
        <div key={candidate.id} className='flex-1'>
          <CandidateVotes candidate={candidate} />
        </div>
      ))}
    </div>
  );
}
