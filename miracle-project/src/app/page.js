'use client'
import Image from "next/image";
import { useState } from 'react';
import { useSelector } from "react-redux";
import Link from "next/link";
import Dashboard from "./dashboard/page";
import Login from "./login/page";

export default function Home() {

  const { id, firstname, lastname, email, courses, role } = useSelector((state) => state.auth);

  console.log(id);
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(courses);
  console.log(role);
  return (
    <div>
      { id ? (
        <Dashboard />
      ) : (
        <Login />
      )}
    </div>
  );
}
