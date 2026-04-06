import React, { useState } from 'react'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

import Christian from '../../../assets/images/Team/minji-frontside.jpg'
import Eana from '../../../assets/images/Team/hyein-frontside.jpg'
import Fredrick from '../../../assets/images/Team/hanni-frontside.jpg'
import JR from '../../../assets/images/Team/haerin-frontside.jpg'
import Nathan from '../../../assets/images/Team/danielle-frontside.jpg'

const TeamMembers = [
  { name: 'Christian Tan', role: 'Marketing', image: Christian },
  { name: 'Eana Mae Tagana', role: 'Creative Director', image: Eana },
  { name: 'Fredrick Arago', role: 'Cinematographer', image: Fredrick },
  { name: 'John Richard Roble', role: 'Technical Director', image: JR },
  { name: 'Nathan Bartolo', role: 'Sound Designer, Programmer', image: Nathan },
]

const Team = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className='relative flex items-center px-6 md:px-45 py-20 bg-[#1a1a1c] overflow-hidden'>
      {/* Paper texture bg */}
      <img
        src={PaperTexture}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none"
      />      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>      <div className="w-full relative z-10">

        {/* Header */}
        <div className='flex justify-end mb-4'>
          <h1 className='text-white text-3xl md:text-5xl font-semibold tracking-tight leading-none uppercase'>
            Meet the Team
          </h1>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-5 gap-5'>
          {TeamMembers.map((member, index) => (
            <div
              key={index}
              className='flex flex-col'
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}  
            >
              {/* Photo */}
              <div
                className={`relative overflow-hidden transition-all duration-300 ease-out ${
                  hovered === index ? "scale-105 brightness-110" : ""
                }`}
                style={{
                  aspectRatio: "3/4",
                  boxShadow: hovered === index
                    ? "0 8px 30px rgba(0,0,0,0.6)"
                    : "0 2px 10px rgba(0,0,0,0.4)"
                }}
              >
                <img
                  src={member.image}  
                  alt={member.name}
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Info */}
              <div className="mt-3 px-1">
                <h2 className="text-white font-bold text-l leading-tight">
                  {member.name}
                </h2>
                <p className="text-zinc-400 text-xs italic mt-1">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Team