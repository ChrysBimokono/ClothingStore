
import { 
      signInWithGooglePopup ,
     createUserDocumentFromAuth 
    } from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/SignUpForm";
import SignInForm from "../../sign-in-form/SignInForm";
import './authenticationStyles.scss';
const Authentication =()=> {

    return (
        <div className="authentication-container">

            <SignInForm />
           <SignUpForm/>
        </div>
    );
};

export default Authentication;