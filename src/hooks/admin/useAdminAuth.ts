import { auth } from '@/firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

const useAdminAuth = () => {
  const [authError, setAuthError] = useState('');
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result) {
          GoogleAuthProvider.credentialFromResult(result);
        }
      })
      .catch((err) => {
        setAuthError(err.message);
      });
  };

  return { authError, signInWithGoogle };
};

export default useAdminAuth;
