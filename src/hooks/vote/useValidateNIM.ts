import { firestore } from '@/firebase/config';
import { useContext, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Student } from '@/models/student';
import { NIMContext } from '@/context/NIMContext';

const useValidateNIM = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { activate } = useContext(NIMContext)!;

  const validate = async (nim: string) => {
    setIsLoading(true);

    const studentsRef = collection(firestore, 'students');
    const q = query(
      studentsRef,
      where('nim', '==', nim)
    );

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const studentData : Student = {
        id: querySnapshot.docs[0].id,
        nim: querySnapshot.docs[0].data().nim,
        fullname: querySnapshot.docs[0].data().fullname,
        codify: querySnapshot.docs[0].data().codify,
        email: querySnapshot.docs[0].data().email,
        generation: querySnapshot.docs[0].data().generation,
        isActive: querySnapshot.docs[0].data().isActive,
        isVoted: querySnapshot.docs[0].data().isVoted,
      };

      if(studentData.isVoted) {
        setError('NIM sudah digunakan. Silahkan hubungi panitia!');
      } else if (!(studentData.isActive)) {
        setError('NIM belum diaktivasi. Silahkan hubungi panitia!');
      } else {
        activate(studentData);
      }
    } else {
      setError('NIM tidak ditemukan. Silahkan hubungi panitia!');
    }

    setIsLoading(false);
  };

  return { validate, isLoading, error };
};

export default useValidateNIM;
