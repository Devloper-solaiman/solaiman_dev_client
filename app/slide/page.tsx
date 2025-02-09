"use client"
import { AnimatePresence } from 'framer-motion';
import { Righteous } from 'next/font/google';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import SlideInfo from './SlideInfo';
import Slides from './Slides';
import Controls from './Controls';


const inter = Righteous({
    subsets: ["latin"],
    weight: ['400'],
})
export type Data = {
    id:number;
    img: string;
    title: string;
    description: string;
    location: string
}
export type CurrentSlideData = {
    data: Data;
    index: number;
}

export default function Slide() {
    const [data, setData] = React.useState<Data[]>(sliderData.slice(1))
    const [transitionData, setTransitionData] = React.useState<Data>(
        sliderData[0]
    )
    const [currentSlideData, setCurrentSlideData] = React.useState<CurrentSlideData>({
        data: initData,
        index: 0,
    })
    return (
        <div
            className={`
            ${inter.className}
            relative min-h-screen select-none overflow-hidden text-white antialiased
            `}
        >
            <AnimatePresence>
                <BackgroundImage
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}
                />
                <div className='absolute z-20 h-full w-full' >
                    {/* <Header/> */}
                    <div className='flex h-full w-full grid-cols-10 flex-col md:grid'>
                        <div className='col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10'>
                            <SlideInfo
                            transitionData={transitionData}
                            currentSlideData={currentSlideData}
                            />
                        </div>
                        <div className='col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10'>
                            <Slides data={data}/>
                            <Controls
                            currentSlideData={currentSlideData}
                            data={data}
                            transitionData={transitionData}
                            initData={initData}
                            handleData={setData}
                            handleTransitionData = {setTransitionData}
                            handleCurrentSlideData = {setCurrentSlideData}
                            sliderData={sliderData}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
};

const sliderData = [
    {
        id:1,
        img: "https://i.ibb.co/ZgfdyXZ/Black-Green-Tech-Programmer-Presentation.png",
        location: "Costa Rica",
        description: "The journey to Rich Coast typically starts in the is a country in the Central American region of North Ame",
        title: "NAYARA CAMP"
    },
    {
        id:2,
        img: "https://i.ibb.co/ZgfdyXZ/Black-Green-Tech-Programmer-Presentation.png",
        location: "Columbia",
        description: "The journey to Rich Coast typically starts in the is a country in the Central American region of North Ame",
        title: "NAYARA"
    },
];
const initData = sliderData[0]