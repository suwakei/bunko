"use client"
import CommonHeader from "@/components/feature/CommonHeader"
import useScroll from "@/hooks/useScroll";


const UserProfilePage = () => {
    const isActive = useScroll(400);
    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="sticky top-0 z-50">
        <CommonHeader isActive={isActive} />
        </div>
    </div>
);
}

export default UserProfilePage;