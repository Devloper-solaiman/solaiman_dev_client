import React from 'react';
import { Data } from './page';
import SliderCard from './SliderCard';

type Props={
    data: Data[];
}
function Slides({data}:Props){
    return(
        <div className='flex w-full gap-6'>
            {
                data.map((data)=>{
                    return <SliderCard key={data.id} data={data} />
                })
            }
        </div>
    )
}
export default Slides;