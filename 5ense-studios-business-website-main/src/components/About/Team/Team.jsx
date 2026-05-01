import React, { useState } from 'react'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

import Christian from '../../../assets/images/Team/Team - Christian.png'
import Eana from '../../../assets/images/Team/Team - Eana.png'
import Fredrick from '../../../assets/images/Team/Team - Fred.png'
import JR from '../../../assets/images/Team/Team - JR.png'
import Nathan from '../../../assets/images/Team/Team - Nathan.png'

const TeamMembers = [
  { 
    name: 'Christian\nTan',
    role: 'Marketing Coordinator',
    image: Christian,
  },
  { 
    name: 'Eana Mae\nTagana',
    role: 'Creative Director &\nProject Manager',
    image: Eana,
    
  },
  { 
    name: 'Fredrick\nArago',
    role: 'Visual Editor &\nMedia Producer',
    image: Fredrick
  },
  { 
    name: 'John Richard\nRoble',
    role: 'Frontend Developer',
    image: JR,
  },
  { 
    name: 'Nathan\nBartolo',
    role: 'Lead Developer &\nSound Designer',
    image: Nathan,
  },
]

const Team = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className='relative flex items-center px-6 md:px-12 lg:px-45 py-20 pb-50 bg-[#1a1a1c] overflow-hidden'>
      
      {/* Background */}
      <img
        src={PaperTexture}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>

      <div className="w-full relative z-10">

        {/* Header */}
        <div className='flex justify-end mb-6 md:mb-8'>
          <h1 className='text-white text-3xl md:text-4xl lg:text-[53px] font-bold tracking-[-0.063em] leading-none text-right'>
            Meet the team 
          </h1>
        </div>

        {/* Grid - Mobile: 2 cols, Tablet: 3 cols, Surface Pro/MD: 4 cols, Desktop: 5 cols */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-4 lg:gap-5' id="team-grid">
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
                  aspectRatio: "2/3",
                  boxShadow: hovered === index
                    ? "0 8px 30px rgba(0,0,0,0.6)"
                    : "0 2px 10px rgba(0,0,0,0.4)"
                }}
              >
                <img
                  src={member.image}  
                  alt={member.name}
                  className={`w-full h-full object-cover transition-transform duration-500 grayscale ${
                    member.zoom || ''
                  }`}
                  style={{
                    objectPosition: member.position || 'center'
                  }}
                />
              </div>

              {/* Info */}
              <div className="mt-2 md:mt-3 px-1">
                <h2 className="font-glacial text-white text-[19px] md:text-[22px] mt-2 mb-0.5 leading-[1.09em] whitespace-pre-line">
                  {member.name}
                </h2>
                <p className="font-glacial text-white text-xs md:text-[11px] italic whitespace-pre-line">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        /* iPad Mini portrait (768px) & Tablet & Surface Pro (768-1023px): 4 columns so 5th item stays in grid */
        @media (min-width: 768px) and (max-width: 1023px) {
          #team-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        /* Center orphan items on mobile only (last item alone on 2-col layout) */
        @media (max-width: 767px) {
          .grid.grid-cols-2 > :nth-child(5):nth-last-child(1) {
            grid-column: 1 / -1;
            max-width: 50%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  )
}

export default Team;