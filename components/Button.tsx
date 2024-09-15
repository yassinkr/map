// components/Button.tsx

"use client";
import { useState, useEffect, useRef } from 'react';
import Card from './Card';

const Button: React.FC = () => {
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
    <div className="relative z-20">
      <button
        ref={buttonRef}
        className={`bg-blue-500 h-12 w-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${clicked ? 'hidden' : ''}`}
        onClick={() => setClicked(!clicked)}
      />
      <div ref={cardRef}>
        <Card clicked={clicked} setClicked={setClicked} />
      </div>
    </div>
  );
};

export default Button;
