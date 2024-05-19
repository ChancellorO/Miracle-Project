'use client';

import React from 'react';
import Link from 'next/link';

const colors = ['bg-[#FFD5D2]', 'bg-[#FDE1AC]', 'bg-[#CCEFBF]', 'bg-[#CBE6F0]'];

const CourseBlock = ({ course, index }) => {
  const colorIndex = index % colors.length;
  const bgColor = colors[colorIndex];

  const name = course.name;
  const professor = course.professor;
  const date = course.date;
  const time = course.time;
  const location = course.location;
  const courseId = course.id;

  return (
    <Link href={`/courses/${courseId}`} className="block">
      <div
        className={`px-12 py-5 rounded-md text-black ${bgColor} mb-4 last:mb-0 shadow-md motion-safe:hover:animate-bounce duration-100`}
      >
        <h3 className="text-lg font-bold mb-2 border-b-2 border-black py-3">{name}</h3>
        <p className="mb-1">Professor: {professor}</p>
        <p className="mb-1">Date: {date}</p>
        <p className="mb-1">Time: {time}</p>
        <p>Location: {location}</p>
      </div>
    </Link>
  );
};

export default CourseBlock;
