import firestore from '@/firebase/config';
import { Student } from '@/models/student';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';

const useValidateNIM = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [student, setStudent] = useState<Student | null>(null)
  const [error, setError] = useState('');

  const validate = async (nim: string) => {
    setIsLoading(true);
    
    const studentsRef = collection(firestore, 'students');
    const q = query(
      studentsRef,
      where('nim', '==', nim),
      where('isVoted', '==', false),
      where('isActive', '==', true)
    );

    const querySnapshot = await getDocs(q);
    if(!querySnapshot.empty){
      const studentData = querySnapshot.docs[0].data() as Student;
      setStudent(studentData);
    } else {
      setError('NIM tidak ditemukan atau sudah melakukan voting');
    }

    setIsLoading(false);
  };

  return { validate, isLoading, error, student };
};

export default useValidateNIM;
