import React, { useState } from 'react'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

import Christian from '../../../assets/images/Team/Christian.jpeg'
import Eana from '../../../assets/images/Team/Eana.png'
import Fredrick from '../../../assets/images/Team/Fred.jpg'
import JR from '../../../assets/images/Team/JR.jpg'
import Nathan from '../../../assets/images/Team/Nathan.JPG'

const TeamMembers = [
  { name: 'Christian\nTan', role: 'Marketing Coordinator', image: Christian },
  { name: 'Eana Mae\nTagana', role: 'Creative Director &\nProject Manager', image: Eana },
  { name: 'Fredrick\nArago', role: 'Visual Editor &\nMedia Producer', image: Fredrick },
  { name: 'John Richard\nRoble', role: 'Frontend Developer', image: JR },
  { name: 'Nathan\nBartolo', role: 'Lead Developer &\nSound Designer', image: Nathan },
]

const Team = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className='team-section site-gutter'>
      <img src={PaperTexture} alt='' className='texture-layer texture-layer--paper' />
      <div className='tone-layer tone-layer--dark' />
      <div className='team-section__content'>
        <div className='team-section__heading-row'>
          <h1 className='team-section__heading'>
            Meet the team 
          </h1>
        </div>

        <div className='team-section__grid'>
          {TeamMembers.map((member, index) => (
            <div
              key={index}
              className='team-card'
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}  
            >
              <div
                className={`team-card__image-wrap ${hovered === index ? 'team-card__image-wrap--hovered' : ''}`}
              >
                <img
                  src={member.image}  
                  alt={member.name}
                  className='team-card__image'
                />
              </div>

              <div className='team-card__meta'>
                <h2 className='team-card__name'>
                  {member.name}
                </h2>
                <p className='team-card__role'>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;