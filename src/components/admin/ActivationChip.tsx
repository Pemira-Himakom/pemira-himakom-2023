/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import useActivationStatus from '@/hooks/admin/useActivationStatus';
import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

export default function ActivationChip({
  code,
  gen,
  error,
  isActivationLoading,
  setActivationStatus,
}: {
  code: string;
  gen: number;
  error: string;
  isActivationLoading: boolean;
  setActivationStatus: (
    isActive: boolean,
    codify: string,
    generation: number
  ) => Promise<void>;
}) {
   const { isActive } = useActivationStatus(code, gen);

  return (
    <div className='flex flex-col justify-start space-y-1'>
      <div className='flex w-full items-center justify-between'>
        <p>
          {code} ({gen})
        </p>
        <Switch
          disabled={isActivationLoading}
          checked={isActive}
          onChange={(val) => {
            setActivationStatus(val, code, gen);
          }}
          className={`${
            isActive ? 'bg-gold' : 'bg-gray-400'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              isActive ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
      <p className='text-red-500'>{error}</p>
    </div>
  );
}
