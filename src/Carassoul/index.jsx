import React from 'react'
import { useState } from 'react'

const index = () => {
    const[move,setMove] = useState(false);
    let[count,setCount] = useState(0);
    const[pos1,setPos1] = useState(0);
    const[pos2,setPos2] = useState(0);
    const[pos3,setPos3] = useState(0);
    
    const handleNext = () =>{
        
        setCount(count + 1);
        console.log(count);
        setMove(true);
        setPos1(pos1+300);
        setPos2(pos2+300);
        setPos3(pos3-600);
    }
    
  return (
    <section className=' flex justify-center items-center h-screen'>
        <section>
        <section className='flex gap-2'>
        <div className={`w-72 h-72 border-2  border-black ${move&&`translate-x-[${pos1}px]`}`}>1</div>
        <div className={`w-72 h-72 border-2 border-black ${move&&`translate-x-[${pos2}px]`}`}>2</div>
        <div className={`w-72 h-72  border-2 border-black ${move&&`translate-x-[${pos3}px]`}`}>3</div>
        </section>

        <section className='w-full flex gap-2 justify-center items-center mt-2'>
            <div className='p-2 bg-gray-500' ><button>prev</button></div>
            <div className='p-2 bg-gray-500' onClick={handleNext}> <button>next</button></div>
        </section>
        </section>
    </section>
  )
}

export default index
