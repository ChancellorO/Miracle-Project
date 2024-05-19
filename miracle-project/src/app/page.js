'use client'
import { useSelector } from "react-redux";
import Dashboard from "./dashboard/page";

export default function Home() {

  const { id, firstName, lastName, email, courses, role } = useSelector((state) => state.auth);

  console.log(id);
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(courses);
  console.log(role);
  
  return (
    <div>
      {id}
      {firstName}
      <Dashboard />      
    </div>

  );
}
