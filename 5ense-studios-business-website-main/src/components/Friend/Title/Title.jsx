import React from 'react'

const Title = () => {
  return (
    <div className='relative w-full flex flex-col items-center justify-end pb-0' style={{ zIndex: 50, minHeight: '130vh' }}>
      <div className="relative translate-y-1/2 text-center" style={{ zIndex: 100 }}>
        <img 
          src="/FRIEND LOGO .png" 
          alt="FRIEND Logo"
          style={{
            maxWidth: "clamp(220px, 40vw, 500px)",
            height: "auto",
            display: "block",
            margin: "0 auto"
          }}
          className="mb-1"
        />
      </div>
    </div>
  )
}

export default Title
