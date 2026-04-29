import React from 'react'
import GrungeTexture from '../../../assets/images/Texture/Paper.jpg'
import MenuPrototype from '../../../assets/images/main menu prototype.png'

const FriendClipPath = new URL('../../../assets/videos/THE FRIEND - Clip.mp4', import.meta.url).href

const Content = () => {
  return (
    <section className='friend-content site-gutter'>
      <img src={GrungeTexture} alt='' className='texture-layer texture-layer--grunge' />
      <div className='tone-layer tone-layer--dark' />
      <div className='friend-content__content'>
        <div className='friend-content__body'>
          <div className='friend-content__lore'>
            <p>
            At 02:14 AM, emergency services responded to a 911 call from a residential home.
            Upon arrival, paramedics found the victim, Chris, unresponsive. Four "friends" were
            found at the scene.
            </p>
            <p>
            The footage has been recovered. The cloud data is yours to navigate.
            </p>
          </div>

          <div className='friend-content__media'>
            <div className='friend-content__video-frame'>
            <video
              className='friend-content__video'
              autoPlay
              loop
              muted
              playsInline
              poster={MenuPrototype}
            >
              <source src={FriendClipPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>

            <div className='friend-content__thumb-row'>
              <div className='friend-content__thumbs'>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className='friend-content__thumb'>
                  <img
                    src={MenuPrototype}
                    alt={`Clip ${i + 1}`}
                    className='friend-content__thumb-image'
                  />
                </div>
              ))}
              </div>

              <button className='friend-content__nav-arrow friend-content__nav-arrow--left'>‹</button>
              <button className='friend-content__nav-arrow friend-content__nav-arrow--right'>›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;