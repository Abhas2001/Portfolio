import React from 'react'
import img from '../src/assets/abhas.jpg'
import linkedin from '../src/assets/linkedin.png'

const Home = () => {
  return (
       <section className='w-full h-full flex justify-center items-center'>
      <section className='flex gap-40 ml-[4rem]'>
            <div>
            <h1 className='text-3xl font-extrabold text-white'>
                Hi From Abhas ,
                <p>
               Front-End Developer.</p>
              </h1>
            <br />
            
         <p className='text-[#C7C7C7] text-[18px]'>
          I derive immense joy from designing and coding <br /> beautiful, simple creations.
        My work is a true passion, <br /> characterized by a commitment to elegance
         and user-friendliness.
        </p>

        <section className='flex gap-3 mt-2'>

            <button className='w-[187px] h-[54px] rounded-full bg-[#D3E97A]'><p className='text-black text-lg'>CONTACT ME </p></button>
            <button><img width="28" height="28" className='color-[#D3E97A]' src={linkedin} alt="linkedin"/></button>
            <button><img width="28" height="28" className='color-[#D3E97A]' src={linkedin} alt="linkedin"/></button> 
        </section>
             </div>

             <section className='w-[300px] h-[350px]  rounded-md'>
              <img src={img} className='h-[100%] w-[100%] rounded-md' alt="" srcset="" />
             </section>
         </section>
         </section>
    
  )
}

export default Home
