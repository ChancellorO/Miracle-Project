'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/navigation/navbar';
import { useSearchParams } from 'next/navigation';
import {getCourseInfo} from '../../../../server/routes';
import { GolfCourseOutlined } from '@mui/icons-material';
import post_component from '../../assets/post_component.png';
import Image from 'next/image';

const Assignment = () => {

  return (
    <div className="flex">
        <Navbar></Navbar>
        <div className="flex-1 m-10 py-8 bg-white">

      <div className="bg-[#FFD5D2] p-4 rounded-md mb-8 h-1/4">
        <h2 className="text-xl font-bold mb-2">Assignments</h2>
      </div>
      <div className='max-w relative '>
      <a href="/"></a>
          <Image src={post_component} className="rounded-md mb-8 h-1/4 w-full object-cover" alt='no image icon' />
        </div>
    </div>
    </div>
  );
};

export default Assignment;