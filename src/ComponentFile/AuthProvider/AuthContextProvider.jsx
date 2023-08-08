import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
import app from "../firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUserr = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, email, photoUrl) => {
        const updateUser = { ...user }
        updateUser.displayName = name;
        updateUser.email = email;
        updateUser.photoURL = photoUrl
        setUser(updateUser)

        const auth = getAuth();
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }


    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            setLoading(false)
            return unsubscribe();
        }
    }, [])


    const logInOut = () => {
        setUser(null)
        signOut(auth)
    }


    const authUser = {
        user: user,
        createUserr,
        userLogin,
        loading: loading,
        updateUserProfile,
        logInOut
    }


    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;