'use client'
import { db } from "../../../server/firebase";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from 'next/navigation';
import Link from "next/link";


export default function signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState(0);

    const handleSignUp = async (e) => {
        e.preventDefault();

        console.log('email: ', email);
        console.log('password: ', password);

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {
                const user = userCredential.user;
                console.log("signed in user");
                console.log("uid: ", user.uid);
                
                const docRef = await setDoc(doc(db, "users", user.uid), {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    courses: [],
                    role: role
                });

                console.log("Document written with ID: ", docRef);

                /* Reset form fields */
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    } 
    return(
        <div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-dark">First name</label>
                    <input type="text" id="first_name" value={firstName} onChange={(event) => setFirstName(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-dark">Last name</label>
                    <input type="text" id="last_name" value={lastName} onChange={(event) => setLastName(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-dark">email</label>
                    <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>  
                <div>
                    <label className="block mb-2 text-sm font-medium text-dark">password</label>
                    <input type="text" id="password" value={password} onChange={(event) => setPassword(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-dark">confirm password</label>
                    <input type="text" id="confirm_password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignUp}>Sign Up</button>
        </div>
    );
}