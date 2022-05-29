import React, { createContext } from 'react';
import useFirebase from '../Components/hooks/userFirebase';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    // const {children} = props;
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;