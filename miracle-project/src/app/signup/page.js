'use client'
import { db } from "../../../server/firebase";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from 'next/navigation';
import Link from "next/link";
import figure from '../assets/figure.svg';
import Image from 'next/image';


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
        <div className='flex flex-row w-screen'>
          <div className='bg-gradient-to-r from-primary-low via-white w-1/2 to-yellow-50'>
            <div className=' px-8 py-8'>
              <img className='h-16 w-auto' src='https://themiracleproject.org/wp-content/uploads/2019/09/MiracleProject-Horizontal-LeftAligned-Color.png' />
            </div>
            <div className='flex justify-center items-center'>
              <div className='max-w-xs'>
                <Image src={figure} alt='blue and orange icon' />
              </div>
            </div>
          </div>
          <div className='flex w-1/2 items-center bg-white text-dark-grey max-w-screen-sm min-h-max h-screen'>
            <div className='w-3/5 mx-auto flex flex-col gap-6'>
              <h1 className='text-4xl font-bold'>Sign Up</h1>
              <div className='section flex flex-col gap-5'>
                <p className='text-base'>Please identify your role</p>
                <div className='flex flex-row gap-8 sm:gap-3' id='roles'>
                  <div>
                    <button type="submit" className="flex w-full justify-center rounded-lg bg-white border-2 border-light-blue px-10 py-3 text-sm font-semibold transition-all ease-in-out leading-6 text-dark-grey shadow-sm hover:drop-shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue py-3 px-10">Student</button>
                  </div>
                  <div>
                    <button type="submit" className="flex w-full justify-center rounded-lg bg-white border-2 border-light-blue px-10 py-3 text-sm font-semibold transition-all ease-in-out leading-6 text-dark-grey shadow-sm hover:drop-shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue py-3 px-10">Teacher</button>
                  </div>
                </div>
              </div>
              <div className='section flex flex-col gap-5'>
                <p className='text-base'>Enter your information</p>
                <div className="sm:mx-auto sm:w-full gap-5">
                  <form className="flex flex-col gap-4" action="#" method="POST">
                    <div className="flex sm:gap-3 gap-8">
                      <div className="w-full">
                        <input id="FName" name="name" type="name" autoComplete="name" placeholder="First Name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                      </div>
                      <div className="w-full">
                        <input id="LName" name="name" type="name" autoComplete="name" placeholder="Last Name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                      </div>
                    </div>
                    <div className="w-full">
                      <input id="email" name="email" type="name" autoComplete="name" placeholder="Email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                    </div>
                    <div>
                      <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter Password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                    </div>
                    <div>
                      <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Confirm Password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                    </div>
                    <div id="login-btns">
                      <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-main-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:drop-shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue py-3 transition duration-150">Create Account</button>
                      </div>
                      <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-xs">OR</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                      </div>
                      <div className="w-full">
                        <button className="w-full justify-center px-4 py-2 border bg-primary-low flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-main-blue font-semibold hover:border-main-blue dark:hover:border-slate-500  hover:shadow text-sm transition duration-150">
                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                            <span>Login with Google</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}