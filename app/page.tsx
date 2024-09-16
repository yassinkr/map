import React from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() =>import ('@/components/Map'), {ssr: false})
const page = () => {
  return (
    <div  className='w-screen h-screen bg-white flex justify-center items-center '>
   <div className='w-3/4 h-3/4'>
    <Map/>
   </div>
    </div>
  )
}

export default page