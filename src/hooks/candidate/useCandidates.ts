import firestore from '@/firebase/config';
import { Candidate } from '@/models/candidate';
import { getDocs, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'candidates'));
      const data = querySnapshot.docs.map((doc) => {
        const candidate: Candidate = {
          id: doc.id,
          nim: doc.data()!.nim,
          name: doc.data()!.name,
          email: doc.data()!.email,
          vision: doc.data()!.vision,
          mission: doc.data()!.mission,
          photoURL: doc.data()!.photoURL,
          grandDesignURL: doc.data()!.grandDesignURL,
          cvURL: doc.data()!.cvURL,
        };

        return candidate;
      });

      setCandidates(data);
    };

    fetchCandidates();
  }, []);

  return { candidates };
};

export default useCandidates;
