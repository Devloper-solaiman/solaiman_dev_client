import React from 'react';
import { motion } from "framer-motion"
import { CurrentSlideData, Data } from './page';
type Props = {
    transitionData: Data;
    currentSlideData: CurrentSlideData;
}
function BackgroundImage({ transitionData, currentSlideData }: Props) {
    return (
        <>
        <h1>dfk</h1>
            {
                transitionData && (
                    <motion.img
                        key={transitionData.id}
                        layoutId={transitionData.img}
                        alt='Transition Image'
                        transition={{
                            opacity: { ease: "linear" },
                            layout: { duration: 0.6 },
                        }}
                        className='absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50'
                        src={transitionData.img}
                    />
                )
            }
            <motion.img
            alt='Current Image'
            key={currentSlideData.data.id + "transition"}
            src={currentSlideData.data.img}
            className='absolute left-0 top-0 w-full h-full object-cover brightness-50'
            />
        </>
    )
}

export default BackgroundImage