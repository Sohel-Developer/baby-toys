import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    const creatUserEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const UpdateUserNamePicture = (info) => {
        return updateProfile(auth.currentUser, info)
    }











    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user in auth Provider', currentUser);
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, loading, creatUserEmailPassword, UpdateUserNamePicture
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;