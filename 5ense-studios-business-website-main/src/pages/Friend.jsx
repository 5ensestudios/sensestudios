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
        src={BGVideo}
        />
        <div className='page-overlay'></div>
        <div className='section-stack'>
        <Title />
        <Content />
        <Game />
        <FAQ />
        </div>
    </div>
  );
};

export default Friend;