import React from 'react'

//compoenent imports
import Text from '../components/About/Hero/HeroText.jsx';
import Content from '../components/About/Content/AboutContent.jsx';
import Team from '../components/About/Team/Team.jsx';
import TalkToUs from '../components/About/CTA/TalkToUs.jsx';
import GamePromo from '../components/About/GamePromo/GamePromo.jsx';


//asset imports
const BGvideo = '/Teaser.mp4'


const About = () => {
  return (
    <div className='min-h-screen'>
      <video 
      className='fixed top-0 left-0 w-full h-full object-cover bg -z-10'
      autoPlay
      loop
      muted
      playsInline
      src={BGvideo}
      />

      <div className="fixed top-0 left-0 w-full h-full bg-black/70 -z-10"></div>

      <div className=''>
        <Text />
        <Content />
        <Team />
        <TalkToUs />
        <GamePromo />
      </div>
    </div>


  )
}

export default About