import React, { useState } from 'react'
import GrungeTexture from '../../../assets/images/Texture/Paper.jpg'
import MenuPrototype from '../../../assets/images/main menu prototype.png'


import Gallery1 from '../../../assets/gallery/gallery 1.png'
import Gallery2 from '../../../assets/gallery/gallery 2.png'
import Gallery3 from '../../../assets/gallery/gallery 3.png'
import Gallery4 from '../../../assets/gallery/gallery 4.png'


const FriendClipPath = new URL('../../../assets/gallery/8 - Gameplay (1).mp4', import.meta.url).href

const Content = () => {
  const [galleryPage, setGalleryPage] = useState(0)

  const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4,]
  const pageSize = 4
  const galleryPageCount = Math.ceil(galleryImages.length / pageSize)
  const visibleGalleryImages = galleryImages.slice(
    galleryPage * pageSize,
    galleryPage * pageSize + pageSize
  )

  const handlePreviousGalleryPage = () => {
    setGalleryPage((currentPage) =>
      currentPage === 0 ? galleryPageCount - 1 : currentPage - 1
    )
  }

  const handleNextGalleryPage = () => {
    setGalleryPage((currentPage) =>
      currentPage === galleryPageCount - 1 ? 0 : currentPage + 1
    )
  }

  return (
    <div className='relative min-h-screen bg-[#1F1F21] flex items-center py-19 md:py-25 pb-30 px-6 md:px-45 overflow-hidden' style={{ zIndex: 0 }}>
      
      <img src={GrungeTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.50] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>

      <div className='w-full pt-10 md:pt-24 relative z-10'>
        
        <div className="font-mono text-white text-md md:text-[21px] leading-[1.4] mb-22 w-full text-justify mt-0 md:mt-5 tracking-[-0.043em]">
          <p className=" mb-10">
            At 2:14 AM, emergency services responded to a 911 call from a private residence in Oak Ridge Creeks. 
          </p>
          <p className='mb-10'>
            Upon arrival, paramedics found the victim, Chris, unresponsive. Four of his friends remained at the scene. They claimed it was a prank—a harmless attempt to get back at a friend. A joke that simply went too far.
          </p>
          <p className='mb-10'>
            By 4:00 AM, the four friends were each sitting in an interogation room, every one recounting their night.
          </p>
          <p className='mb-10'>
            These are their stories. 
          </p>
        </div>

        {/* Video + gallery */}
        <div className="w-full">

          {/* Video */}
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

          {/* Thumbnails */}
          <div className="relative w-full flex items-center mt-4">
            
            <div className="flex gap-3 w-full">
              {visibleGalleryImages.map((img, i) => (
                <div
                  key={galleryPage * pageSize + i}
                  className="flex-1 relative overflow-hidden rounded-sm border border-white/10 group"
                >
                  <img
                    src={img}
                    alt={`Clip ${galleryPage * pageSize + i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
              ))}
            </div>

  

            

          </div>
          <div className="font-mono text-white text-md md:text-[21px] leading-[1.4] mb-0 md:mb-22 w-full text-justify mt-10 md:mt-20 tracking-[-0.043em]">
          <p className=" mb-10">
            <span className="font-bold">Navigate the Interface</span> - The system operates like a real computer desktop right in your browser. You will need to manually open files and folders to begin.
          </p>
          <p className='mb-10'>
            <span className="font-bold">Watch the Footage</span> - The core piece to your investigation are the video files. Watch the recovered interviews closely to piece together the timeline of what happened.
          </p>
          <p className='mb-10'>
            <span className="font-bold">Choose Your Perspectives</span> - You will not hear everyone's side of the story. As you dig deeper, your access becomes restricted. You will frequently be forced to choose. Decide whose perspective you need—or suspect—the most.
          </p>
          <p className='mb-10'>
            <span className="font-bold">Connect the Pieces</span> - Explore the files to gain context, navigate the story, and ultimately make your choice. The rest is for you to uncover.
          </p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Content