import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    // const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const auth = getAuth();
    // const [isLoading, setIsLoading] = useState(true)
    // const [authError, setAuthError] = useState('')

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)


    };
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     handleUserRegester(result.user.email)
        //     const destination = location?.state?.from || "/"
        //     history.replace(destination)
        // })

    };

    // const handleUserRegester = (email) => {
    //     fetch("https://secret-sands-13596.herokuapp.com/addUsers", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify({ email }),
    //         // body: JSON.stringify(email)
    //     })
    //         .then(res => res.json())
    //         .then(result => console.log(result))
    // }


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken));
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        signInUsingGoogle,
        signInUser,
        registerUser,
        logOut
    }
}

export default useFirebase;