import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="z-10 h-screen w-64 fixed flex flex-col items-center gap-40 bg-[#0E3663] text-sm text-white">
            <Image
              src="/title.png"
              alt="Miracle Project Logo"
              className="mt-10"
              width={200}
              height={24}
              priority
            />
            <div className="flex flex-col gap-10">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/calendar">Calendar</Link>
                <Link href="/enrolledCourses">Enrolled Courses</Link>
                <Link href="/files">Files</Link>
                <Link href="/notifications">Notifications</Link>
            </div>
            <div className="flex flex-col gap-4">
                settings
                <div className="flex flex-col gap-5">
                <Link href="/dashboard">Account Settings</Link>
                <Link href="/calendar">Notification Preferences</Link>
                <Link href="/enrolledCourses">Logout</Link>
                </div>
            </div>
        </div>
    );
};