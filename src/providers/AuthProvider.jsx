import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserData = (user, name) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            // if (currentUser && currentUser.email) {
            //     const loggedUser = {
            //         email: currentUser.email
            //     }
            //     fetch('https://car-doctor-server-two-kappa.vercel.app/jwt', {
            //         method: 'POST',
            //         headers: {
            //             'content-type': 'application/json'
            //         },
            //         body: JSON.stringify(loggedUser)
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             //console.log('jwt response',data);
            //             localStorage.setItem('car-access-token', data.token);

            //         })
            // }
            // else {
            //     localStorage.removeItem('car-access-token');
            // }
        });
        return () => {
            return unsubscribe();
        }
    }, [])





    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserData
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;