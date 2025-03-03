

import React from 'react'
import Project from './Project'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import { useState,useRef } from 'react'

const Navigation = () => {
    const[Work,setWork] = useState('');
    console.log(Work);
    const sectionRef = useRef(null);
    const secRef = useRef(null);

    const handleScroll = () => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScrol = () => {
       secRef.current?.scrollIntoView({behavior: "smooth"});
    }
   
  return (
   
    <section className='w-full h-full p-5 '>
      <section className='w-full  p-4 flex justify-between text-[#C7C7C7]'>
       
         <section className='w-full flex justify-end items-end fixed top-0 right-10'>
       <div className='flex gap-16 '>
       <button className='flex justify-start font-serif' onClick={()=>{setWork('Home')}}>Home</button>
        <button className='flex justify-start font-serif' onClick={handleScroll}>Work</button>
        <button className='flex justify-start' onClick={handleScrol}>About</button>
        <button className='flex justify-start' onClick={()=>{setWork('contact')}}>Contact Us</button>
        
       </div>
       </section>
      </section>
         
       
         
       
  <section className='w-full h-[640px] flex justify-center items-center'>
        {Work==='project'?
       <Project/>
       :Work==='contact'?
       <Contact/>
       :Work==='About'?
        <About/>
        :
        <Home/>
        }
        </section>
      
    
    <section ref={sectionRef} className='w-full  bg-[#1D1C1D]'>
          <Project/>
         </section>
         <section ref={secRef} className='mt-96'>
        <About/>
        </section>
    </section>

  

  )
}

export default Navigation
