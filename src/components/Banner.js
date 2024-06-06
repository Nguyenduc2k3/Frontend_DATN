import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { mBanner1, mBanner2, mBanner3, mBanner4, wBanner1, wBanner2, wBanner3, wBanner4 } from "../assets";


const Banner = () => {


    const selectedSexCategory = useSelector((state) => state.next.sexCategory)

    const [currentSlide, setCurrentSlide] = useState(0);

    const womenBanners = [
        wBanner1,
        wBanner2,
        wBanner3,
        wBanner4,

    ];

    const menBanners = [
        mBanner1,
        mBanner2,
        mBanner3,
        mBanner4,

    ];

    const banners = selectedSexCategory === "women" ? womenBanners : menBanners;

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide])

    return (
        <div className=" w-full h-auto overflow-x-hidden">
            <div className="w-screen h-[700px] relative">
                <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }} className="w-[400vw] h-full flex transition-transform duration-700">
                    {banners.map((banner, index) => (
                        <img
                            key={index}
                            src={banner}
                            alt={`Banner${index + 1}`}
                            loading="priority"
                            className="w-screen h-full object-cover"
                        />
                    ))}
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-20">
                    <div onClick={prevSlide} className="w-10 h-10 border-[1px] rounded-md text-white border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                        <FaAngleLeft />
                    </div>

                    <div onClick={nextSlide} className="w-10 h-10 border-[1px] rounded-md text-white border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                        <FaAngleRight />
                    </div>
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-4 bottom-10">
                    {banners.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 border-[1px] rounded-full ${currentSlide === index ? 'bg-gray-100' : 'border-gray-300'} hover:cursor-pointer duration-300`}
                            onClick={() => setCurrentSlide(index)}
                        >
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Banner
