import Button from '@/components/Button'
import React from 'react'

const page = () => {
  return (
    <div  className='w-screen h-screen bg-white flex justify-center items-center '>
     <div className='w-[1400px] h-[900px] relative z-0' style={{backgroundImage:"url(/background.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <Button buttonPosition={"top-[210px] left-[250px]"}/>

      <Button buttonPosition={"top-[210px] left-[250px]"}/>

      <Button buttonPosition={"top-[180px] left-[350px]"}/>


      <Button buttonPosition={"top-[50px] left-[390px]"}/>


      <Button buttonPosition={"top-[300px] left-[450px]"}/>



      <Button buttonPosition={"top-[440px] left-[300px]"}/>



      <Button buttonPosition={"top-[340px] left-[650px]"}/>


      <Button buttonPosition={"top-[580px] left-[640px]"}/>


      <Button buttonPosition={"top-[600px] left-[890px]"}/>


      <Button buttonPosition={"top-[370px] left-[850px]"}/>

      <Button buttonPosition={"top-[250px] left-[890px]"}/>


      <Button buttonPosition={"top-[170px] left-[940px]"}/>



      <Button buttonPosition={"top-[200px] left-[1000px]"}/>




      <Button buttonPosition={"top-[200px] left-[1100px]"}/>

      <Button buttonPosition={"top-[380px] left-[1100px]"}/>


      <Button buttonPosition={"top-[20px] left-[1100px]"}/>



     
      </div>
    </div>
  )
}

export default page