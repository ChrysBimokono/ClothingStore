import { initializeApp} from 'firebase/app';

import { getAuth,
     signInWithPopup,
      signInWithRedirect,  
      GoogleAuthProvider,
   createUserWithEmailAndPassword } from "firebase/auth";

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
export const signInWithGoogleRedirect= ()=> signInWithRedirect(auth, provider);

export const db= getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
     additionalInformation = {displayName:'mike'}) => {

    if(!userAuth) return;

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
                createdAt,
                ...additionalInformation,
            });
        } catch(error){
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
     if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
}