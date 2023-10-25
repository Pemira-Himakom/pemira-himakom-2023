'use client';

import { Student } from '@/models/student';
import React, { createContext } from 'react';

export type NIMContextType = {
  student: Student | null | undefined;
  // eslint-disable-next-line no-unused-vars
  activate: (st: Student) => void;
  deactivate: () => void;
};

export const NIMContext = createContext<NIMContextType>({
  student: null,
  activate: () => {},
  deactivate: () => {},
});

function NIMProvider({ children }: { children: React.ReactNode }) {
  const [student, setStudent] = React.useState<Student | null>();

  const activate = (st: Student) => {
    setStudent(st);
  };

  const deactivate = () => {
    setStudent(null);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <NIMContext.Provider value={{ student, activate, deactivate }}>
      {children}
    </NIMContext.Provider>
  );
}

export default NIMProvider;
