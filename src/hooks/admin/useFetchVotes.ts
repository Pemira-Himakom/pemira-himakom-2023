import { firestore } from '@/firebase/config';
import { Vote } from '@/models/vote';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';

const useFetchVotes = () => {
  const [error, setError] = useState<string | null>(null);
  const [votes, setVotes] = useState<Vote[]>([]);

  const fetchVotes = async (candidateID: string) => {
    try {
      const votesRef = collection(firestore, 'votes');
      const candidateRef = doc(firestore, 'candidates', candidateID);

      const votesQuery = query(
        votesRef,
        where('candidate', '==', candidateRef)
      );
      const querySnapshot = await getDocs(votesQuery);
      const data: Vote[] = [];

      querySnapshot.forEach((vote) => {
        data.push({
          id: vote.id,
          voterToken: vote.data().token,
          candidateRef: vote.data().candidate,
        });
      });

      console.log(data);

      setVotes(data);
    } catch (err) {
      setError("Couldn't fetch votes");
    }
  };

  return { votes, error, fetchVotes };
};

export default useFetchVotes;
