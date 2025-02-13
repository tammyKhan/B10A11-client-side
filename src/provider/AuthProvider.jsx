import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile, getAuth } from "firebase/auth";
import app from '../firebase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const googleProvider = new GoogleAuthProvider()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleRegister = (email, password) => {
  return createUserWithEmailAndPassword(auth , email, password);


  }

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth , email, password)

  }

  const handleGoogleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const handleLogout = () =>{
    signOut(auth)
  }

  const manageProfile =(name, photo) =>{
    return updateProfile(auth.currentUser,{
      displayName:name, photoURL:photo
    })
  }

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout,
    manageProfile,
    user,
    setUser,
    loading,

  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
       setUser(currentUser);
       setLoading(false)
     })
     return () =>{
       unsubscribe()
     }
   },[])

  
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;