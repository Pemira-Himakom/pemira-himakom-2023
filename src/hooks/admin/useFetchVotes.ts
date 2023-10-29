import firestore from '@/firebase/config';
import { Vote } from '@/models/vote';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useFetchVotes = () => {
  const [error, setError] = useState<string | null>(null);
  const [votes, setVotes] = useState<Vote[]>([]);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'votes'));
        const data: Vote[] = [];

        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            voterToken: doc.data().voterToken,
            candidateRef: doc.data().candidateRef,
          });
        });

        setVotes(data);
      } catch (err) {
        setError("Couldn't fetch votes");
      }
    };

    fetchVotes();
  }, []);

  return { votes, error };
};

export default useFetchVotes;
