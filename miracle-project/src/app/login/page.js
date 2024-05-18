'use client'
import { db } from "../../../server/firebase";
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore/lite";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Link from "next/link";


export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignOut = async (e) => {
        e.preventDefault();

        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('Sign-out successful.');
          }).catch((error) => {
            console.log(error);
          });
    }
        
    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('email: ', email);
        console.log('password: ', password);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {
                const user = userCredential.user;
                console.log("signed in user");
                console.log(user.uid);

                const docRef = await getDoc(doc(db, "users", user.uid));
                console.log(docRef.data());
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    } 
    return(
        <div>
        login
        <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <form onSubmit={handleLogin}>
            Enter name: <input className="text-black" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input className="text-black" type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <input type="submit" />
            </form>
            <Link href="/test">TEST</Link>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>
                sign out
            </button>
        </div>
    </div>
    );
}