import React from 'react'
import Map from '@/components/Map'
const page = () => {
  if(typeof window === 'undefined') return;
  return (
    <div  className='w-screen h-screen bg-white flex justify-center items-center '>
   <div className='w-[1400px] h-[1000px]'>
    <Map/>
   </div>
    </div>
  )
}

export default page