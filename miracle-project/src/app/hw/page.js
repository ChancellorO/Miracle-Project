'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/navigation/navbar';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import noimage from '../assets/noimage.png'
import FileData from '../components/navigation/fileData';
import PostUpload from '../components/navigation/fileUpload';

const Assignment = () => {

  return (
    <div className="flex flex-column">
        <Navbar></Navbar>
        <div className="flex-1 m-10 py-8 bg-white">

        <div className="bg-[#FFD5D2] p-4 rounded-md mb-8 h-1/4">
        <h1 className="text-4xl font-bold mb-2">Digital Theater with Passion!</h1>
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
        <PostUpload></PostUpload>

      </div>
      <div className='max-w relative '>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <div className="flex items-center mb-4">
        <div className="relative w-10 h-10 mr-4">
          <Image
            src={noimage}
            alt={"profile pic"}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold">Chance Ogura</h3>
      </div>
      <h2 className="text-2xl font-bold mb-2">New Annoucement</h2>
      <p className="text-gray-700">
      Dear Students,
I hope this message finds you well. I'm excited to announce our upcoming theater assignment, which will allow you to explore the world of performing arts and unleash your creativity.
For this assignment, you will be working in groups to create and perform a short theatrical piece. The theme of your performance will be "Overcoming Challenges," which can be interpreted in various ways. You can choose to create a comedic skit, a dramatic scene, or even a musical performance – the possibilities are endless!
      </p>
    <FileData></FileData>
    </div>
    </div>

    
    </div>
  );
};

export default Assignment;