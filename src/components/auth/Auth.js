import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromGoogleAuth } from '../../utils/firebase/firebaseUtils';

const Auth = () => {
  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromGoogleAuth(user);
  }
  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  )
}

export default Auth