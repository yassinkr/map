import React from 'react'

import dynamic from 'next/dynamic'
const Map = dynamic(
  () => import('@/components/Map'),
  { ssr: false }
)
const page = () => {
 
  return (
    <div  className='w-screen h-screen bg-white flex justify-center items-center '>
   <div className='w-[1400px] h-[1000px]'>
    <Map/>
   </div>
    </div>
  )
}

export default page