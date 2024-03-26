import { Button } from '@mui/material'
import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';


function SiginIn() {
    function SignInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div>
      <Button onClick={SignInWithGoogle}>googleでログインする</Button>
    </div>
  )
}

export default SiginIn
