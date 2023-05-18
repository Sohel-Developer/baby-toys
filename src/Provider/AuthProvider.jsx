import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ img: "https://freepngimg.com/thumb/man/22654-6-man.png" })
    const [loading, setLoading] = useState(true)


    const authInfo = {
        user, loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;