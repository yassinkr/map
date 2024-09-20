import React from 'react'
import dynamic from 'next/dynamic'
import { getMarkers, insertMarkers } from '@/server/db';

const Map = dynamic(() =>import ('@/components/Map'), {ssr: false})
const page = async () => {

   const markers = await getMarkers();
   if (markers.length === 0) {
      return <div>Loading...</div>;   }
  return (
    <div  className='w-screen h-screen bg-white flex justify-center items-center '>
   <div className='w-3/4 h-3/4'>
    <Map markers={markers}/>
   </div>
    </div>
  )
}

export default page