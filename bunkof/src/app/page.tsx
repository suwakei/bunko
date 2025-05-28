"use client"
import RootHeader from "@/components/feature/RootHeader"
import useScroll from "@/hooks/useScroll";


const Home = () => {
  const isActive = useScroll(900);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="sticky top-0 z-50">
        <RootHeader isActive={isActive} />
      </div>
    </div>
  );
}

export default Home;