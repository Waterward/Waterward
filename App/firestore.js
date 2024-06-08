import { doc, setDoc, getDoc, collection, addDoc } from 'firebase/firestore';
import { FIREBASE_FIRESTORE, FIREBASE_AUTH } from './firebaseConfig';

// Add a new tank for the current user
export const addTank = async (tank) => {
  const user = FIREBASE_AUTH.currentUser;
  if (user) {
    const userTanksRef = collection(FIREBASE_FIRESTORE, 'users', user.uid, 'tanks');
    await addDoc(userTanksRef, tank);
  }
};

// Fetch tanks for the current user
export const getTanks = async () => {
  const user = FIREBASE_AUTH.currentUser;
  if (user) {
    const userTanksRef = collection(FIREBASE_FIRESTORE, 'users', user.uid, 'tanks');
    const tanksSnapshot = await getDocs(userTanksRef);
    return tanksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
  return [];
};
