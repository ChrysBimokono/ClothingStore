import { initializeApp} from 'firebase/app';

import { getAuth, signInWithPopup, signInWithRedirect,  GoogleAuthProvider} from "firebase/auth";

import { getFirestore, doc,getDoc, setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdo1sNk4sVpd2svxkS-QFSppROEycjsi8",
    authDomain: "proper-clothing-db.firebaseapp.com",
    projectId: "proper-clothing-db",
    storageBucket: "proper-clothing-db.appspot.com",
    messagingSenderId: "558884356656",
    appId: "1:558884356656:web:5ab0139e87f71a439c63f5"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth= getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db= getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef= doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error){
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
}