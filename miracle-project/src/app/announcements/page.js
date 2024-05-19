'use client';
import { db } from "../../../server/firebase";
import { getDoc, doc, updateDoc, arrayUnion, addDoc } from "firebase/firestore/lite";
import { useState } from 'react';
import Navbar from "../components/navigation/navbar";
import Paper from '@mui/material/Paper';


export default function Announcements() {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [courseID, setCourseID] = useState('');
    const [contentType, setContentType] = useState('');
    const [data, setData] = useState('');

    const handleAnnouncement = async () => {
        const AnnouncementRef = await addDoc(doc(db, "announcements"), {
            description,
            title,
        });
        console.log("Announcement Document written with ID: ", AnnouncementRef.id);

        const CourseRef = await updateDoc(doc(db, "course", courseID), {
            'announcements': arrayUnion(AnnouncementRef.id)
        });
    }

    const getAnnouncements = async () => {
        // array of announcements
        const arrAnnouncementsIDS = [];
        const arrAnnouncements = [];
        arrAnnouncementsIDS.forEach(async (element) => {
            const AnnouncementRef = await getDoc(doc(db, 'announcements', element));
            arrAnnouncements.push(AnnouncementRef.data());
        });
    }

    const getCourses = async () => {
        const arrCoursesIDS = [];
        const arrCourses = [];
        arrCoursesIDS.forEach(async (element) => {
            const CoursesRef = await getDoc(doc(db, 'course', element));
            arrCourses.push(CoursesRef.data());
        });
    }

    const getPosts = async () => {
        const arrPostsIDS = [];
        const arrPosts = [];
        arrPostsIDS.forEach(async (element) => {
            const PostRef = await getDoc(doc(db, 'post', element));
            arrPosts.push(PostRef.data());
        });
    }

    const handleContent = async () => {
        const ContentRef = await addDoc(doc(db, "content"), {
            'content-type': contentType,
            data,
        });

        const CourseRef = await updateDoc(doc(db, "course", courseID), {
            'content': arrayUnion(ContentRef.id)
        });

        const PostRef = await updateDoc(doc(db, "post", postID), {
            post: arrayUnion(ContentRef.id)
        });
    }



    




    return(
        <div className="flex flex-row">
            <Navbar />
            <div className="flex flex-col grow py-8 px-16">
                <div className="flex flex-row justify-between">
                    <h1>Announcements</h1>
                    <div>
                        Filter By:{' '}
                        Most Recent
                    </div>
                </div>
                <Paper> Something </Paper>
            </div>
        </div>
    );
}