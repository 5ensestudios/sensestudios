import React, { useRef, useEffect } from 'react'

const BGVideo = '/Teaser.mp4'

import Title from '../components/Friend/Title/Title.jsx';
import Content from '../components/Friend/Content/Content.jsx';
import Game from '../components/Friend/Game/Game.jsx';
import FAQ from '../components/Friend/FAQ/FAQ.jsx';

const Friend = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className='min-h-screen'>
        <video 
        ref={videoRef}
        className='fixed top-0 left-0 w-full h-full object-cover bg -z-10'
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        src={BGVideo}
        />
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 -z-10"></div>
        <Title />
        <Content />
        <Game />
        <FAQ />
    </div>
  )
}

export default Friend