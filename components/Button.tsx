// components/Button.tsx

"use client";
import { useState } from 'react';
import Card from './Card';

const Button: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative z-20">
      <button
        className={`bg-blue-500 h-12 w-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${clicked ? 'hidden' : ''}`}
        onClick={() => setClicked(!clicked)}
      />
      <Card clicked={clicked} setClicked={setClicked}/>
    </div>
  );
};

export default Button;
