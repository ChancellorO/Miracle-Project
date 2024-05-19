'use client'
import Navbar from "../components/navigation/navbar";
import noimage from '../assets/noimage.png';
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react'


export default function Profile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        console.log('handleSave');
    }

    return(
        <div className="flex flex-row">
            <Navbar />
            <div className="flex flex-col grow py-8 px-16">
                <div className=" flex flex-row bg-gradient-to-r from-yellow-50 via-white to-primary-low justify-center gap-10 py-8">
                    <div className='max-w-xs relative'>
                        <Image src={noimage} className="h-40 w-40 p-2 rounded-full" alt='no image icon' />
                        <div className="h-10 w-10 rounded-full bg-[#575656] absolute top-0 right-0 flex justify-center items-center">
                            <EditIcon className="text-white text-md"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-bold">Daniel Ogura</h1>
                        <p>student</p>
                    </div>                    
                </div>
                <div className="flex">
                    <div className='w-3/5 flex grow flex-col gap-6 justify-center px-60'>
                        <div className='section flex flex-col gap-5'>
                            <div className="sm:mx-auto sm:w-full gap-5">
                            <form className="flex flex-col" action="#" method="POST">
                                <div className="flex flex-col pt-8 gap-6 text-md">
                                    Basic Information
                                    <div className="flex sm:gap-3 gap-8">
                                        <div className="w-full">
                                            <input id="FName" name="name" type="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="name" placeholder="First Name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                                        </div>
                                        <div className="w-full">
                                            <input id="LName" name="name" type="name" value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="name" placeholder="Last Name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <input id="email" name="email" type="name" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="name" placeholder="Email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                                    </div>
                                </div>       
                                <div className="flex flex-col pt-8 gap-6 text-md">
                                    Logistic Information
                                    <div className="flex flex-col sm:gap-3 gap-8">
                                        <div className="w-full">
                                        <input id="phone-number" name="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Phone Number (Optional)" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                                        </div>
                                        <div>
                                        <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder="Enter Password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                                        </div>
                                        <div>
                                        <input id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light-blue sm:text-sm sm:leading-6 px-3.5 py-2.5"/>
                                        </div>
                                    </div>                                    
                                </div>                         
                                <div id="login-btns" className="pt-10 flex flex-row gap-4">
                                    <Link href="/"><button className="flex w-full justify-center rounded-md bg-[#DEF1FF] border-main-blue border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-main-blue shadow-sm hover:drop-shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue py-3 transition duration-150">Cancel</button></Link>
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-main-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:drop-shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue py-3 transition duration-150">Save Changes</button>
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