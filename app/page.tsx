import React from 'react'
import dynamic from 'next/dynamic'
import { getMarkers, insertMarkers } from '@/server/db';

const Map = dynamic(() =>import ('@/components/Map'), {ssr: false})
const page = async () => {
  const transformedMarkers = [
    {
      name: "100",       // Marker 1 text
      lat: 51.494,       // Marker 1 latitude
      lng: -0.071,       // Marker 1 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "200",       // Marker 2 text
      lat: 51.495,       // Marker 2 latitude
      lng: -0.075,       // Marker 2 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "300",       // Marker 3 text
      lat: 51.498,       // Marker 3 latitude
      lng: -0.074,       // Marker 3 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "400",       // Marker 4 text
      lat: 51.4975,      // Marker 4 latitude
      lng: -0.0765,      // Marker 4 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "500",       // Marker 5 text
      lat: 51.4965,      // Marker 5 latitude
      lng: -0.0735,      // Marker 5 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "600",       // Marker 6 text
      lat: 51.494,       // Marker 6 latitude
      lng: -0.0669,      // Marker 6 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "700",       // Marker 7 text
      lat: 51.4968,      // Marker 7 latitude
      lng: -0.071,       // Marker 7 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "800",       // Marker 8 text
      lat: 51.4965,      // Marker 8 latitude
      lng: -0.068,       // Marker 8 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "900",       // Marker 9 text
      lat: 51.496,       // Marker 9 latitude
      lng: -0.064,       // Marker 9 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "100",       // Marker 10 text
      lat: 51.498,       // Marker 10 latitude
      lng: -0.066,       // Marker 10 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "101",       // Marker 11 text
      lat: 51.4978,      // Marker 11 latitude
      lng: -0.0635,      // Marker 11 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    },
    {
      name: "102",       // Marker 12 text
      lat: 51.4997,      // Marker 12 latitude
      lng: -0.064,       // Marker 12 longitude
      sb_current: 75,
      sb_max: 100,
      fp_current: 5,
      fp_max: 10,
      sr_current: 15,
      sr_max: 20,
      efficiency: "85%",
      units_current: 8,
      units_max: 10,
      target_success_rate: "92%",
      target_count: "212/4",
    }
  ];
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