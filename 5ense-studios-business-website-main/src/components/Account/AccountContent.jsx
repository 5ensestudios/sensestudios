import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaperTexture from '../../assets/images/Texture/Paper.jpg'
const FriendThumb = '/FRIEND Poster.png'

const AccountContent = () => {
  const navigate = useNavigate()

  const [displayName, setDisplayName] = useState('player_name')
  const [password, setPassword] = useState('••••••••')
  const [email, setEmail] = useState('')

  const [editingDisplay, setEditingDisplay] = useState(false)
  const [editingPassword, setEditingPassword] = useState(false)
  const [editingEmail, setEditingEmail] = useState(false)

  return (
    <div className='relative min-h-screen bg-[#111113] pt-32 md:pt-60 pb-24 px-6 md:px-45 flex flex-col items-center gap-16 overflow-hidden'>
      <img src={PaperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-50"></div>
      <div className='relative z-10 w-full flex flex-col items-center gap-16'>

      {/* Profile Card */}
      <div className='bg-[#111113] rounded-[38px] px-5 md:px-15 mb-10 md:mb-20 py-8 md:py-12 w-full max-w-3xl'>

        {/* Avatar + Greeting */}
        <div className='flex items-center gap-4 mb-2'>
          <div className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-zinc-600 shrink-0' />
          <h1 className='text-white text-[28px] md:text-[72px] tracking-[-0.063em] whitespace-nowrap'>
            Hello, <span className='text-[#f16d18]'>{displayName}</span>!
          </h1>
        </div>

        {/* Fields — 2 column grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2'>

          {/* Display Name — left col */}
          <div>
            <label className='font-mono text-white text-xs mb-1 block'>Display Name</label>
            <div className='flex items-center gap-2'>
              <input
                type='text'
                value={displayName}
                disabled={!editingDisplay}
                onChange={e => setDisplayName(e.target.value)}
                className='flex-1 min-w-0 py-2 bg-white text-black text-sm px-4 rounded-[10px] focus:outline-none disabled:opacity-100'
              />
              <button onClick={() => setEditingDisplay(!editingDisplay)} className='shrink-0 w-9 h-9 bg-[#f16d18] hover:bg-[#d45e10] rounded-full flex items-center justify-center transition'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z' />
                </svg>
              </button>
            </div>
          </div>

          {/* Password — right col */}
          <div>
            <label className='font-mono text-white text-xs mb-1 block'>Password</label>
            <div className='flex items-center gap-2'>
              <input
                type={editingPassword ? 'text' : 'password'}
                value={password}
                disabled={!editingPassword}
                onChange={e => setPassword(e.target.value)}
                className='flex-1 min-w-0 py-2 bg-white text-black text-sm px-4 rounded-[10px] focus:outline-none disabled:opacity-100'
              />
              <button onClick={() => setEditingPassword(!editingPassword)} className='shrink-0 w-9 h-9 bg-[#f16d18] hover:bg-[#d45e10] rounded-full flex items-center justify-center transition'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z' />
                </svg>
              </button>
            </div>
          </div>

          {/* Email — left col */}
          <div>
            <label className='font-mono text-white text-xs mb-1 block'>E-mail</label>
            <div className='flex items-center gap-2'>
              <input
                type='email'
                value={email}
                disabled={!editingEmail}
                onChange={e => setEmail(e.target.value)}
                className='flex-1 min-w-0 py-2 bg-white text-black text-sm px-4 rounded-[10px] focus:outline-none disabled:opacity-100'
              />
              <button onClick={() => setEditingEmail(!editingEmail)} className='shrink-0 w-9 h-9 bg-[#f16d18] hover:bg-[#d45e10] rounded-full flex items-center justify-center transition'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z' />
                </svg>
              </button>
            </div>
          </div>

          {/* Delete Account — right col */}
          <div className='flex items-end'>
            <button className='font-mono w-full mt-3 bg-red-800 hover:bg-red-700 text-white text-xs tracking-[0.043em] uppercase py-2.5 rounded-[10px] transition duration-200'>
              Delete Account
            </button>
          </div>

        </div>
      </div>

      {/* Games Section */}
      <div className='w-full mb-10'>

        {/* Header with dividers */}
        <div className='flex items-center gap-4 mb-10'>
          <div className='flex-1 h-px bg-white/20' />
          <h2 className='text-white text-5xl font-semibold tracking-tight'>Games</h2>
          <div className='flex-1 h-px bg-white/20' />
        </div>

        {/* Game Cards — 2 per row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

          {/* Card 1 */}
          <div className='bg-[#1c1c1e] rounded-3xl p-3 md:p-5 flex items-center gap-3 md:gap-5'>
            <img
              src={FriendThumb}
              alt='The Friend'
              className='w-20 h-26 md:w-30 md:h-38 object-cover rounded-xl shrink-0'
            />
            <div className='flex-1 flex flex-col items-center justify-center gap-0'>
              <p className='font-spartan text-white font-bold text-[36px] md:text-[40px] leading-none tracking-[-0.043em] text-center'>The Friend</p>
              <button
                onClick={() => navigate('/friend')}
                className='bg-[#f16d18] hover:bg-[#d45e10] text-white text-xs md:text-[13px] uppercase px-15 md:px-20 py-1.5 md:py-2.5 rounded-full transition duration-200 tracking-[-0.043em]'
              >
                Play Game
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-[#1c1c1e] rounded-3xl p-3 md:p-5 flex items-center gap-3 md:gap-5'>
            <img
              src={FriendThumb}
              alt='The Friend'
              className='w-20 h-26 md:w-30 md:h-38 object-cover rounded-xl shrink-0'
            />
            <div className='flex-1 flex flex-col items-center justify-center gap-0'>
              <p className='font-spartan text-white font-bold text-[36px] md:text-[40px] leading-none tracking-[-0.043em] text-center'>The Friend</p>
              <button
                onClick={() => navigate('/friend')}
                className='bg-[#f16d18] hover:bg-[#d45e10] text-white text-xs md:text-[13px] uppercase px-15 md:px-20 py-1.5 md:py-2.5 rounded-full transition duration-200 tracking-[-0.043em]'
              >
                Play Game
              </button>
            </div>
          </div>

        </div>

      </div>

      </div>{/* end z-10 wrapper */}

    </div>
  )
}

export default AccountContent
