import React, { Dispatch, SetStateAction } from 'react'

const Card = ({clicked, setClicked}:{clicked :boolean , setClicked: Dispatch<SetStateAction<boolean>> }) => {
  if (!clicked) return null;
  return (
    <div className=' text-black absolute z-50' style={{zIndex:` ${clicked ? '9999' : '0'}`}}>
       <div className="p-4 bg-white shadow-lg rounded-lg max-w-sm ">
 
      <div className="text-xl font-bold mb-2">Crushs Coaster</div>
      <button onClick={() => setClicked(!clicked)} className="absolute top-2 right-2"> X</button>
  
      <div className="flex justify-between items-center">
        <div className="font-bold">BIO</div>
        <div className="text-blue-400 font-bold">STTAR</div>
      </div>

      <div className="my-2 space-y-2">
        <div className="flex justify-between">
          <span>SB:</span>
          <div>
            <span className="font-bold">75</span> / <span className="text-blue-400 font-bold">85</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>FP:</span>
          <div>
            <span className="font-bold">0</span> / <span className="text-blue-400 font-bold">5</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>SR:</span>
          <div>
            <span className="font-bold">50</span> / <span className="text-blue-400 font-bold">20</span>
          </div>
        </div>
      </div>

      <div className="text-lg font-bold text-red-500 mb-1">Eff aj 76%</div>
      <div className="text-sm text-red-500">DPH 0.0 / GPD 0.0</div>

      <div className="mt-4">
        <div className="p-2 bg-gray-200 rounded-lg flex justify-between items-center">
          <div className="text-lg font-bold">BIO 11 / 11</div>
          <div className="text-gray-400 text-sm">Units</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-gray-400 text-sm">Cible 92%</div>
        <div className="text-gray-400 text-sm">Cibles 212/4</div>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="bg-green-500 text-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
                    
    </div>
  )
}

export default Card