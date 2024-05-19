import Link from "next/link";
import Image from "next/image";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
    return (
        <div className="z-10 h-screen w-64 flex flex-col gap-28 bg-[#0E3663] text-sm text-white">
            <Image
              src="/title.png"
              alt="Miracle Project Logo"
              className="mt-20 self-center"
              width={200}
              height={24}
              priority
            />
            <div className="flex flex-col grow gap-8 ml-10 text-sm">
                MATERIAL
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-1 py-2 items-center ease-in-out hover:bg-white-gradient transition duration-150 rounded-l-lg pl-4 hover:border-l-8">
                        <SpaceDashboardIcon />
                        <Link href="/dashboard">Dashboard</Link>
                    </div>
                    <div className="flex flex-row gap-1 py-2 items-center ease-in-out hover:bg-white-gradient transition duration-150 rounded-l-lg pl-4 hover:border-l-8">
                        <CalendarMonthIcon />
                        <Link href="/calendar">Calendar</Link>                        
                    </div>
                    <div className="flex flex-row gap-1 py-2 items-center ease-in-out hover:bg-white-gradient transition duration-150 rounded-l-lg pl-4 hover:border-l-8">
                        <NotificationsActiveIcon />
                        <Link href="/announcements">Announcements</Link>                        
                    </div>
                </div>
                SETTINGS
                <div className="flex grow flex-col justify-between mb-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-row gap-1 py-2 items-center ease-in-out hover:bg-white-gradient transition duration-150 rounded-l-lg pl-4 hover:border-l-8">
                                <NotificationsIcon />
                                <Link href="/dashboard">Profile</Link>                   
                        </div>
                        <div className="flex flex-row gap-1 py-2 items-center ease-in-out hover:bg-white-gradient transition duration-150 rounded-l-lg pl-4 hover:border-l-8">
                            <SettingsIcon />
                            <Link href="/calendar">Account Settings</Link>                        
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 py-2 items-center ease-in-out hover:bg-white-gradient transition duration-150 rounded-l-lg pl-4 hover:border-l-8">
                            <LogoutIcon />
                            <Link href="/enrolledCourses">Logout</Link>                                    
                    </div>
                </div>
            </div>
        </div>
    );
};