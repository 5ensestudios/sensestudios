import React, { useRef, useEffect } from 'react'

//compoenent imports
import Text from '../components/About/Hero/HeroText.jsx';
import Content from '../components/About/Content/AboutContent.jsx';
import Team from '../components/About/Team/Team.jsx';
import TalkToUs from '../components/About/CTA/TalkToUs.jsx';
import GamePromo from '../components/About/GamePromo/GamePromo.jsx';


//asset imports
const BGvideo = '/Teaser.mp4'


const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className='page-shell page-shell--video'>
      <video
        ref={videoRef}
        className='page-video'
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload='auto'
        src={BGvideo}
      />

      <div className='page-overlay page-overlay--heavy' />

      <div className='section-stack'>
        <Text />
        <Content />
        <Team />
        <TalkToUs />
        <GamePromo />
      </div>
    </div>
  );
};

export default About;