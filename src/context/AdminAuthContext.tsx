'use client';

import { auth } from '@/firebase/config'; // Import your Firebase configuration
import { User } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';

interface AuthContextProps {
  admin: User | null;
  error: string | null;
  isLoading: boolean;
}

export const AdminAuthContext = createContext<AuthContextProps>({
  admin: null,
  error: null,
  isLoading: false,
} as AuthContextProps);

const adminEmails = [
  'andreasnotokusumo23@gmail.com',
  'andreasnotokusumo@mail.ugm.ac.id',
];

function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((res) => {
      if (res && !adminEmails.includes(res.email!)) {
        res.delete();
        setAdmin(null);
        setIsLoading(false);
        setError('This email is not authorized');
        return;
      }

      setAdmin(res);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AdminAuthContext.Provider value={{ admin, error, isLoading }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuthProvider;
