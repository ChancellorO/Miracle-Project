'use client'
import { db, auth } from "../../../server/firebase";
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore/lite";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import figure from '../assets/figure.svg';
import Image from 'next/image';
import { login } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        
    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('email: ', email);
        console.log('password: ', password);

        signInWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {
                const user = userCredential.user;
                console.log("signed in user");
                console.log(user.uid);

                const docRef = await getDoc(doc(db, "users", user.uid));
                console.log(docRef.data().firstName);
                const data = {
                    uid: user.uid,
                    firstName: docRef.data().firstName,
                    lastName: docRef.data().lastName,
                    email: docRef.data().email,
                    courses: docRef.data().courses,
                    role: docRef.data().role,
                };

                dispatch(login(data));
                router.push('/');

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
        {/* Rightmost gradient */}
          <div className='bg-gradient-to-r from-primary-low via-white w-1/2 to-yellow-50'>
            <div className=' px-4 py-4 h-1/8'>
              <img className='h-8 w-auto' src='https://themiracleproject.org/wp-content/uploads/2019/09/MiracleProject-Horizontal-LeftAligned-Color.png' />
            </div>
            <div className='flex justify-center items-center'>
              <div className='max-w-xs'>
                <Image src={figure} alt='blue and orange icon' />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className='flex w-1/2 items-center bg-white text-dark-grey max-w-screen-sm min-h-max h-screen'>
            <div className='w-3/5 mx-auto flex flex-col gap-6'>
            {/* Login Form */}
              <h1 className='text-4xl font-bold'>Login</h1>
              <div className='section flex flex-col gap-5'>
                  <form onSubmit={handleLogin} className="flex flex-col gap-4" action="#" method="POST">
                    {/* Email input field */}
                    <div className="w-full flex flex-col gap-1">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                      <input id="email" name="email" type="text" autoComplete="email" placeholder="Email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {/* Password input field */}
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                       <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                       <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter Password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5" onChange={(e) => setPassword(e.target.value)}/>
                      </div>
                      <div className="text-xs">
                       <a href="#" className="font-light text-slate-400 hover:text-slate-600 transition duration-150">Forgot password?</a>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5" id="login-btns">
                      <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-main-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:drop-shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue py-3 transition duration-150">Sign In</button>
                      </div>
                      <div className="relative flex items-center">
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
                      <div className="text-sm flex justify-center">
                       <a href="/signup" className="font-light text-slate-400">Don't have an account? <span className="text-main-blue">Sign Up</span></a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}