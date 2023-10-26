import firestore from '@/firebase/config';
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
      const data = querySnapshot.data() as Candidate;

      setCandidate(data);
    };

    fetchCandidate();
  }, [candidateID]);

  return { candidate };
};

export default useCandidate;
