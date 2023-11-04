'use client';

import ActivationChip from '@/components/admin/ActivationChip';

import useActivate from '@/hooks/admin/useActivate';
import React from 'react';

export default function AdminControlPage() {
  const { error, isActivationLoading, setActivationStatus } = useActivate();

  return (
    <div className='flex h-[55vh] w-full md:w-[75vw] lg:w-[50vw] flex-col space-y-4 overflow-y-scroll'>
      <ActivationChip
        code='KOM A'
        gen={23}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='KOM B'
        gen={23}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='CS A'
        gen={23}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='CS B'
        gen={23}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />

      <ActivationChip
        code='KOM A'
        gen={22}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='KOM B'
        gen={22}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='CS A'
        gen={22}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='CS B'
        gen={22}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />

      <ActivationChip
        code='KOM A'
        gen={21}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='KOM B'
        gen={21}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='CS A'
        gen={21}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='CS B'
        gen={21}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />

      <ActivationChip
        code='KOM A'
        gen={20}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='KOM B'
        gen={20}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='CS A'
        gen={20}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
      <ActivationChip
        code='CS B'
        gen={20}
        error={error}
        setActivationStatus={setActivationStatus}
        isActivationLoading={isActivationLoading}
      />
    </div>
  );
}
