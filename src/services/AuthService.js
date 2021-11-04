
import React, { createContext, useState } from 'react'
import './firebase'
import { getAuth, getRedirectResult, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth'
import { auth } from './firebase'
export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loginWithGoogle: async () => {
                    console.log("google")
                    signInWithRedirect(auth, provider)
                },
                login: async (email, password) => {
                    try {
                        await signInWithEmailAndPassword(auth, email, password)
                    } catch (e) {
                        console.log(e)
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e)
                    }
                },
                logout: async () => {
                    signOut(auth).then(() => {
                        // Sign-out successful.
                    }).catch((error) => {
                        // An error happened.
                    })
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
