import firestore from '@/firebase/config';
import { Timestamp, addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

const useVote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const vote = async (token: string, voterID: string, candidateID: string) => {
    setIsLoading(true);

    try {
      await addDoc(collection(firestore, 'votes'), {
        token,
        candidate: doc(firestore, 'candidates', candidateID),
        voteTime: Timestamp.now(),
      });

      await updateDoc(doc(firestore, 'students', voterID), {
        isVoted: true,
      });

      setIsSuccess(true);
    } catch (e) {
      setError("Gagal melakukan voting");
    }

    setIsLoading(false);
  };

  return { vote, error, isLoading, isSuccess };
};

export default useVote;
