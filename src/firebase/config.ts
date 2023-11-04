// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDrCmpChpofFqjMybC5n2UqOfg8I-RJ3Bs',
  authDomain: 'pemira-himakom-2023.firebaseapp.com',
  projectId: 'pemira-himakom-2023',
  storageBucket: 'pemira-himakom-2023.appspot.com',
  messagingSenderId: '222637583646',
  appId: '1:222637583646:web:db9b09eee6f0a3c56bed0f',
  measurementId: 'G-CWL1Y2Y9HZ',
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

export { firestore, auth };
