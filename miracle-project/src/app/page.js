'use client'
import Image from "next/image";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "@/lib/features/auth/authSlice";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    dispatch(login({email, password}));
  };



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form onSubmit={onSubmit}>
          Enter name: <input className="text-black" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <input className="text-black" type="text" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <input type="submit" />
        </form>
        <Link href="/test">TEST</Link>
      </div>
    </main>
  );
}
