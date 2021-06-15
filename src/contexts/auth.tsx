import React, { useState, createContext } from "react";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({})

type User = {
    uid: string,
    name: string,
    email: string
}

function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User>()

    async function signUp(email: string, password: string, name: string) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async (value) => {
            let uid = String(value.user?.uid);
            await firebase.database().ref('users').child(uid).set({
                balance: 0,
                name: name
            })
            .then(() => {
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user?.email
                } as User;
                setUser(data)
            })

        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;