'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/navigation/navbar';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CourseBlock from '../components/navigation/courseblock';
import HomeworkBlock from '../components/navigation/homeworkBlock';


const Home = () => {
  const [user, setUser] = useState('');
  const [recentAnnouncement, setRecentAnnouncement] = useState('');
  const [courses, setCourses] = useState([]);
  const [homework, setHomework] = useState([]);
  const [animateBlocks, setAnimateBlocks] = useState(false);


  useEffect(() => {
    // Fetch user data, recent announcement, courses, and homework from an API or data source
    const fetchData = async () => {
      try {
        // const userData = await fetchUserData();
        // setUser(userData.name);

        // const announcementData = await fetchRecentAnnouncement();
        // setRecentAnnouncement(announcementData.message);

        // const coursesData = await fetchCourses();
        // setCourses(coursesData);

        // const homeworkData = await fetchHomework();
        // setHomework(homeworkData);

        setUser("Daniel");
        setRecentAnnouncement("I hope this message finds you well. I'm excited to announce our upcoming theater assignment, which will allow you to explore the world of performing arts and unleash your creativity. For this assignment, you will be working in groups to create and perform a short theatrical piece. The theme of your performance will be Overcoming Challenges, which can be interpreted in various ways. You can choose to create a comedic skit, a dramatic scene, or even a musical performance – the possibilities are endless! Each group will be responsible for the following tasks: Script Writing: Collaborate with your group members to write an original script that aligns with the theme. Your script should be engaging, thought-provoking, and showcase your storytelling abilities. Character Development: Develop well-rounded characters that drive the narrative forward. Consider their personalities, motivations, and how they contribute to the overall message of your performance.");
        setCourses([{id: "1", name: "Digital Theater", professor: "Prof Richey", location: "Zoom", date: "Tuesday", time: "5 pm"},
        {id: "1", name: "English", professor: "Dr. O", location: "Zoom", date: "Wednesday", time: "5 pm"},
        {id: "1", name: "Cooking", professor: "Dr. O", location: "Zoom", date: "Wednesday", time: "5 pm"},
        {id: "1", name: "Dance", professor: "Dr. O", location: "Zoom", date: "Wednesday", time: "5 pm"}
        ]);
        setHomework([{id: "1", assignmentName: "HW2", dueDate: "Feb 26, 2024", completionState: true, courseName: "Geometry"},
        {id: "1", assignmentName: "HW7", dueDate: "May 2, 2024", completionState: false, courseName: "Geometry"},
        {id: "1", assignmentName: "HW3", dueDate: "April 30, 2024", completionState: true, courseName: "Dance Battle"}
        ]);
        setAnimateBlocks(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
    <Navbar/>
    <div className="flex-1 m-10 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Hello, {user}</h1>

      <div className="bg-[#F4F6F7] p-4 rounded-md mb-8">
        <h2 className="text-xl font-bold mb-2">Recent Announcement</h2>
        <p className="mb-4">{recentAnnouncement}</p>
        <Link
          href="/announcements"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View All Announcements
        </Link>
      </div>
    <div className="flex flex-row items-stretch justify-between"> 
      <div className="mb-8">
      <div className="flex flex-row">
        <AutoStoriesIcon></AutoStoriesIcon>
        <h2 className="text-xl font-bold mb-4 pl-5"> Enrolled Courses</h2>
        </div>
        <div className=" pl-4 flex flex-row justify-between space-x-10">
          {courses.map((course, index) => (
            <CourseBlock course={course} index={index} className="mb-2 "/>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-row">
        <AssignmentIcon></AssignmentIcon>
        <h2 className="text-xl font-bold mb-4 pl-5">Homework</h2>
        </div>
        <ul className="list-disc pl-4">
          {homework.map((assignment) => (
            <HomeworkBlock homework={assignment} className="mb-2"/>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Home;