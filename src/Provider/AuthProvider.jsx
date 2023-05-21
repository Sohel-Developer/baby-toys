import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();


    const creatUserEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const UpdateUserNamePicture = (info) => {
        setLoading(true)
        return updateProfile(auth.currentUser, info)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }








    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }











    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user in auth Provider', currentUser);
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, loading, creatUserEmailPassword, UpdateUserNamePicture, logOut, loginUser, googleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;