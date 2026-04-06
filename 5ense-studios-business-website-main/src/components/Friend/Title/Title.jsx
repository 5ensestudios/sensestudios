import React from 'react'

const Title = () => {
  return (
    <div className='relative w-full flex flex-col items-center justify-end pb-0' style={{ zIndex: 50, minHeight: '130vh' }}>
      <div className="relative translate-y-1/2 text-center" style={{ zIndex: 100 }}>
        <p
          className="text-white font-bold text-2xl tracking-[0.3em] uppercase mb-1"
          style={{ fontFamily: "'Brunson', sans-serif" }}
        >
          THE
        </p>
        <h1
          className="font-black uppercase leading-none"
          style={{
            fontSize: "clamp(5rem, 14vw, 9rem)",
            fontFamily: "'Brunson', sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          <span className="text-white">FRI</span>
          <span style={{ color: "white" }}>E</span>
          <span className="text-white">ND</span>
        </h1>
      </div>
    </div>
  )
}

export default Title
