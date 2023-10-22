import firestore from '@/firebase/config';
import { Candidate } from '@/models/candidate';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'candidates'));
      const data = querySnapshot.docs.map((doc) => doc.data() as Candidate);

      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  return { candidates };
};

export default useCandidates;
