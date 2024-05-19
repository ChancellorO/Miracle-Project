import { db } from "./firebase";
import { getDoc, doc, updateDoc, arrayUnion, addDoc } from "firebase/firestore/lite";

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

const getCourseInfo = async(courseID) => {
    const CourseRef = await getDoc(doc(db, 'course', courseID));
    return CourseRef.data();
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

export {handleAnnouncement, 
    getAnnouncements, 
    getCourses, 
    getPosts, 
    getCourseInfo,
    handleContent};