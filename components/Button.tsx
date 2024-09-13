"use client";
import { useState} from 'react'
import Card from './Card'
const Button = ({buttonPosition}:{buttonPosition : string | null}) => {
    const [clicked, setClicked] = useState(false)
  return (
    <div className={`w-fit h-fit min-w-10 min-h-8 absolute ${buttonPosition} ease-in-out duration-300`}>
        <button className={`bg-blue-500 h-12 w-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ${clicked}?  :hidden`} onClick={()=>setClicked(!clicked)}/>
        <Card clicked={clicked} />
    </div>
  )
}

export default Button