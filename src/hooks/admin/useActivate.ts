import { firestore } from '@/firebase/config';
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useState } from 'react';

const useActivate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const setActivationStatus = async (
    isActive: boolean,
    codify: string,
    generation: number
  ) => {
    setIsLoading(true);

    try {
      const studentsRef = collection(firestore, 'students');
      const studentsQuery = query(
        studentsRef,
        where('codify', '==', codify),
        where('generation', '==', generation)
      );

      const querySnapshot = await getDocs(studentsQuery);
      querySnapshot.forEach(async (ref) => {
        await updateDoc(doc(firestore, 'students', ref.id), {
          isActive,
        });
      });

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  return { error, isLoading, isSuccess, setActivationStatus };
};

export default useActivate;
