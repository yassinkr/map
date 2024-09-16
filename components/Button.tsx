// components/Button.tsx

"use client";
import { useState, useEffect, useRef } from 'react';
import Card from './Card';

const Button  = ({text}:{text : string |null}) => {
  const [clicked, setClicked] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click happened outside the button or card
      if (
        buttonRef.current &&
        cardRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <button
        ref={buttonRef}
        className={` h-12 w-12 text-white font-bold relative  py-2 px-4 rounded ${clicked ? 'hidden' : ''}`}
        onClick={() => setClicked(!clicked)}
      >
        <div >

    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="70" viewBox="0 0 50 70">
  <circle cx="25" cy="25" r="24" stroke="black" strokeWidth="2" fill="#4CAF50"/>

  <g transform="rotate(30, 25, 25)">
    <circle cx="25" cy="60" r="5" fill="black"/>
    
    <line x1="25" y1="49" x2="25" y2="60" stroke="black" strokeWidth="2"/>
  </g>
</svg>
        </div>
<div className='absolute top-5 left-6 text-xl'>
  {text}
</div>



        </button>
      <div ref={cardRef}>
        <Card clicked={clicked} setClicked={setClicked} />
      </div>
    </div>
  );
};

export default Button;
