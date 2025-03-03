import React from 'react'
import { useState } from 'react'
import prjct1 from '../src/assets/expense.png'
import img from '../src/assets/abhas.jpg'
import Camscan from '../src/assets/Camscan.png'

const Project = () => {

  let arr = [1,2,3,4,5,6,7,8];

  const[count,setcount] = useState(0);
  const[flag,setflag] = useState(false);
  const[trans,settrans] = useState(false);
  console.log(flag);

  let ProjectName = ["Expense Manager","Camera To Pdf","Hiring Manager","Resume Editor"]
  let ProjectImage = [prjct1,Camscan,img]
  let ProjectLinks= ["https://gleeful-fudge-cbc4c7.netlify.app/","https://fabulous-kitsune-8894e2.netlify.app/"]
  
  const handlenext = ()=>{
           setcount(count+1);
  }
  
  const handleprev = ()=>{
    setcount(count-1);
}
setTimeout(() => {
    settrans(true);
  
}, 1000);
setTimeout(() => {
  settrans(false);
}, 2000);
  return (
    <section className='w-full'>
        <div className='text-white text-xl font-bold'>
            FEATURED PROJECTS
        </div>
      
        
  <div className='flex justify-center items-center '>

  <button className='text-white p-4' onClick={handleprev}>prev</button>
  
       
             <section className='w-full flex gap-2 h-auto border-2 border-white mt-4'>

              <section className='w-full h-[400px]  flex flex-col justify-evenly border-r-2 border-white p-4'>
                       <h1 className='text-2xl font-extrabold text-amber-400'>{ProjectName[count]}</h1>
                       <p className=' text-slate-100 font-bold'>The Expense Manager is a React-based application designed to help users calculate and manage their expenses efficiently. Built using React for functionality and Tailwind CSS for styling, the app provides a modern, responsive interface to track expenses seamlessly. Key features include adding, categorizing, and calculating expenses, making it a valuable tool for personal finance management.</p>
                        <button className={`w-32 p-2 border-2 border-white text-amber-300 `}> <a target="blank" href={ProjectLinks[count]} className={''}> <p className={''}>View Project</p></a></button>
              </section>

              <section className='w-full h-[400px] p-2' onMouseEnter={()=>setflag(true)} onMouseLeave={()=>setflag(false)}>
                    <img src={ProjectImage[count]} alt="" srcset="" className={'w-full h-full object-contain'} />
              </section>

             </section>
         
        
            

          <button className='text-white p-2' onClick={handlenext} >next</button>
         
           

        
        </div>
    </section>
  )
}

export default Project
