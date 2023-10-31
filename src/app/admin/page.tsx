"use client"

import useFetchVotes from '@/hooks/admin/useFetchVotes'
import React from 'react'

export default function AdminPage() {
  const { votes } = useFetchVotes();

  return (
    votes.map((vote) => (
      <p key={vote.id}>{vote.id}</p>
    ))
  )
}
