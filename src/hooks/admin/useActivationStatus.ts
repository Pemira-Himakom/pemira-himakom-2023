import { firestore } from '@/firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useActivationStatus = (codify: string, generation: number) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const studentsRef = collection(firestore, 'students');
    const studentsQuery = query(
      studentsRef,
      where('codify', '==', codify),
      where('generation', '==', generation)
    );

    const unsub = onSnapshot(studentsQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().isActive) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    });

    return () => unsub();
  }, [codify, generation]);

  return { isActive };
};

export default useActivationStatus;
