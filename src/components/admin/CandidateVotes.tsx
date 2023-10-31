'use client';

import useFetchVotes from '@/hooks/admin/useFetchVotes';
import { Candidate } from '@/models/candidate';
import React, { useEffect } from 'react';

export default function CandidateVotes({
  candidate,
}: {
  candidate: Candidate;
}) {
  const { votes, error, fetchVotes } = useFetchVotes();

  useEffect(() => {
    fetchVotes(candidate.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col space-y-3'>
      {error && <p>{error}</p>}
      <div className='flex w-full justify-between'>
        <h2 className='self-center font-display text-2xl'>{candidate.name}</h2>
        <h2 className='self-center text-2xl'>{votes.length}</h2>
      </div>
      <div className='overflow-y-scroll flex h-[50vh] w-full flex-col space-y-0.5'>
        {votes.map((vote) => (
          <p key={vote.id}>{vote.voterToken.substring(0, 16)}...</p>
        ))}
      </div>
    </div>
  );
}
