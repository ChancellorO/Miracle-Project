'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/navigation/navbar';
import { useSearchParams } from 'next/navigation';
import {getCourseInfo} from '../../../../server/routes';
import { GolfCourseOutlined, Watch } from '@mui/icons-material';
import post_component from '../../assets/post_component.png';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PostUpload from '../../components/navigation/fileUpload';
import Image from 'next/image';

const Course = () => {

  return (
    <div className="flex" >
        <Navbar></Navbar>
        <div className="flex-1 m-10 py-8 bg-white">

      <div className="bg-[#FFD5D2] p-4 rounded-md mb-8 h-1/4">
      <div className="flex flex-row justify-between">
      <h1 className="text-4xl font-bold mb-2">Digital Theater with Passion!</h1>
      <PostUpload></PostUpload>
       </div>

        <div className="flex flex-row">
<PersonIcon></PersonIcon>
<h3 className="text-xl font-bold mb-2"> Prof Richey</h3>
        </div>
        <div className="flex flex-row">
<CalendarMonthIcon></CalendarMonthIcon>
<h3 className="text-xl font-bold mb-2"> Tuesdays/Thursdays</h3>
        </div>
        <div className="flex flex-row">
<WatchLaterIcon></WatchLaterIcon>
<h3 className="text-xl font-bold mb-2"> 5:00 - 8:00 pm</h3>
        </div>
      </div>
      <Link href={`/hw`}className='max-w relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>
          <Image src={post_component} className="rounded-md mb-8 h-1/4 w-full object-cover" alt='no image icon'/>

    </Link>
    <Link href={`hw`}className='max-w relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>
          <Image src={post_component} className="rounded-md mb-8 h-1/4 w-full object-cover" alt='no image icon'/>

    </Link>
    </div>
    </div>
  );
};

export default Course;
