'use client';

import React from 'react';
import Link from 'next/link';

const HomeworkBlock = ({ homework }) => {
  const { assignmentName, dueDate, courseName, completionState } = homework;
  const borderColor = completionState === false ? 'border-yellow-500' : 'border-green-500';

  return (
    <Link href={`/enrolledCourses/${assignmentName}`}> 
    <div
      className={`p-4 rounded-lg bg-white shadow-md ${borderColor} border-2 mb-4`}
    >
      <h3 className="text-lg font-bold mb-2">{assignmentName}</h3>
      <p className="mb-1">Due Date: {dueDate}</p>
      <p className="mb-1">Class: {courseName}</p>
      {completionState ? <p className="mb-1">Completed</p> : <p className="mb-1">In progress </p>}
    </div></Link>
  );
};

export default HomeworkBlock;

