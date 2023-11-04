import { firestore } from '@/firebase/config';
import { Candidate } from '@/models/candidate';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const useCandidate = (candidateID: string) => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      const querySnapshot = await getDoc(
        doc(firestore, 'candidates', candidateID)
      );
      const data: Candidate = {
        id: querySnapshot.id,
        nim: querySnapshot.data()!.nim,
        name: querySnapshot.data()!.name,
        email: querySnapshot.data()!.email,
        vision: querySnapshot.data()!.vision,
        mission: querySnapshot.data()!.mission,
        photoURL: querySnapshot.data()!.photoURL,
        grandDesignURL: querySnapshot.data()!.grandDesignURL,
        cvURL: querySnapshot.data()!.cvURL,
      };

      setCandidate(data);
    };

    fetchCandidate();
  }, [candidateID]);

  return { candidate };
};

export default useCandidate;
