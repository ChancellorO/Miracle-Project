'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/navigation/navbar';

const Home = () => {
  const [user, setUser] = useState('');
  const [recentAnnouncement, setRecentAnnouncement] = useState('');
  const [courses, setCourses] = useState([]);
  const [homework, setHomework] = useState([]);

  useEffect(() => {
    // Fetch user data, recent announcement, courses, and homework from an API or data source
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        setUser(userData.name);

        const announcementData = await fetchRecentAnnouncement();
        setRecentAnnouncement(announcementData.message);

        const coursesData = await fetchCourses();
        setCourses(coursesData);

        const homeworkData = await fetchHomework();
        setHomework(homeworkData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <Navbar/>
    <div className="max-w-4xl mx-auto py-8 px-4 bg-white">
      <h1 className="text-3xl font-bold mb-6">Hello, {user}</h1>

      <div className="bg-blue-100 p-4 rounded-md mb-8">
        <h2 className="text-xl font-bold mb-2">Recent Announcement</h2>
        <p className="mb-4">{recentAnnouncement}</p>
        <Link
          href="/announcements"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View All Announcements
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Courses</h2>
        <ul className="list-disc pl-4">
          {courses.map((course) => (
            <li key={course.id} className="mb-2">
              {course.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Homework</h2>
        <ul className="list-disc pl-4">
          {homework.map((assignment) => (
            <li key={assignment.id} className="mb-2">
              {assignment.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Home;