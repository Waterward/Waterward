import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyDhCT_SaV4AyT5WJHxDKHGNKdJzOksrT_s',
  authDomain: 'waterward-ebce4.firebaseapp.com',
  projectId: 'waterward-ebce4',
  storageBucket: 'waterward-ebce4.appspot.com',
  messagingSenderId: '1046474060215',
  appId: '1:1046474060215:web:514de5c9fcebd942e13832',
};

const app = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(app);
const  FIREBASE_FIRESTORE = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

export { app,FIREBASE_FIRESTORE, FIREBASE_AUTH};