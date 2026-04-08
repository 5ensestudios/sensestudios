import React from 'react'
import GrungeTexture from '../../../assets/images/Texture/Paper.jpg'
import MenuPrototype from '../../../assets/images/main menu prototype.png'

const FriendClipPath = new URL('../../../assets/videos/THE FRIEND - Clip.mp4', import.meta.url).href

const Content = () => {
  return (
    <div className='relative min-h-screen bg-[#1F1F21] flex items-center py-19 md:py-25 pb-30 px-6 md:px-45 overflow-hidden' style={{ zIndex: 0 }}>
      <img src={GrungeTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.50] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>
      <div className='w-full pt-24 relative z-10'>
        <div className="font-mono text-white text-md md:text-[17.5px] leading-[1.4] mb-22 w-full text-justify mt-0 md:mt-5 tracking-[-0.043em]">
          <p className=" mb-10">
            At 02:14 AM, emergency services responded to a 911 call from a residential home.
            Upon arrival, paramedics found the victim, Chris, unresponsive. Four "friends" were
            found at the scene.
          </p>
          <p>
            The footage has been recovered. The cloud data is yours to navigate.
          </p>
        </div>

        {/* Video + carousel wrapper — same width */}
        <div className="w-full">

          {/* Video embed */}
          <div className="relative w-full aspect-video bg-[#1a1a1a] rounded-sm overflow-hidden mb-4 border border-white/10">
            <video
              className="w-full h-full object-cover"
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

          {/* Thumbnail carousel with images */}
          <div className="relative w-full flex items-center mt-4">
            {/* Thumbnails */}
            <div className="flex gap-3 w-full">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex-1 relative overflow-hidden rounded-sm border border-white/10">
                  <img
                    src={MenuPrototype}
                    alt={`Clip ${i + 1}`}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              ))}
            </div>

            {/* Arrows overlaid */}
            <button className="absolute left-0 -translate-x-6 text-white/60 hover:text-white text-2xl font-bold">‹</button>
            <button className="absolute right-0 translate-x-6 text-white/60 hover:text-white text-2xl font-bold">›</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Content