import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaperTexture from '../../assets/images/Texture/Paper.jpg'
const FriendThumb = '/FRIEND Logo.png'

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
      <div className='bg-[#111113] rounded-2xl p-8 w-full max-w-xl'>

        {/* Avatar + Greeting */}
        <div className='flex items-center gap-4 mb-8'>
          <div className='w-14 h-14 rounded-full bg-zinc-600 flex-shrink-0' />
          <h2 className='text-white text-2xl font-semibold'>
            Hello, <span className='text-[#f16d18]'>{displayName}</span>!
          </h2>
        </div>

        {/* Fields */}
        <div className='flex flex-col gap-5'>

          {/* Display Name */}
          <div>
            <label className='text-zinc-400 text-xs mb-1 block'>Display Name</label>
            <div className='flex items-center gap-2'>
              <input
                type='text'
                value={displayName}
                disabled={!editingDisplay}
                onChange={e => setDisplayName(e.target.value)}
                className='flex-1 bg-transparent border border-zinc-600 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-[#f16d18] disabled:opacity-60'
              />
              <button onClick={() => setEditingDisplay(!editingDisplay)} className='text-[#f16d18] hover:opacity-70 transition'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z' />
                </svg>
              </button>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className='text-zinc-400 text-xs mb-1 block'>Password</label>
            <div className='flex items-center gap-2'>
              <input
                type={editingPassword ? 'text' : 'password'}
                value={password}
                disabled={!editingPassword}
                onChange={e => setPassword(e.target.value)}
                className='flex-1 bg-transparent border border-zinc-600 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-[#f16d18] disabled:opacity-60'
              />
              <button onClick={() => setEditingPassword(!editingPassword)} className='text-[#f16d18] hover:opacity-70 transition'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z' />
                </svg>
              </button>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className='text-zinc-400 text-xs mb-1 block'>E-mail Address</label>
            <div className='flex items-center gap-2'>
              <input
                type='email'
                value={email}
                disabled={!editingEmail}
                onChange={e => setEmail(e.target.value)}
                className='flex-1 bg-transparent border border-zinc-600 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-[#f16d18] disabled:opacity-60'
              />
              <button onClick={() => setEditingEmail(!editingEmail)} className='text-[#f16d18] hover:opacity-70 transition'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414H8v-2a2 2 0 01.586-1.414z' />
                </svg>
              </button>
            </div>
          </div>

          {/* Delete Account */}
          <button className='w-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold tracking-widest uppercase py-2 rounded transition duration-200 mt-2'>
            Delete Account
          </button>

        </div>
      </div>

      {/* Games Section */}
      <div className='w-full'>

        {/* Header with dividers */}
        <div className='flex items-center gap-4 mb-6'>
          <div className='flex-1 h-px bg-white/20' />
          <h2 className='text-white text-2xl font-semibold tracking-tight'>Games</h2>
          <div className='flex-1 h-px bg-white/20' />
        </div>

        {/* Game Card */}
        <div className='bg-[#1c1c1e] rounded-2xl p-5 flex items-end gap-5 w-72'>
          <img
            src={FriendThumb}
            alt='The Friend'
            className='w-20 h-30 object-cover rounded-xl flex-shrink-0'
          />
          <div className='flex flex-col gap-3'>
            <p className='the-friend-title text-white font-semibold text-lg md:text-3xl tracking-widest'>The Friend</p>
            <button
              onClick={() => navigate('/friend')}
              className='bg-[#f16d18] hover:bg-[#d45e10] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full transition duration-200'
            >
              Play Game
            </button>
          </div>
        </div>

      </div>

      </div>{/* end z-10 wrapper */}

    </div>
  )
}

export default AccountContent
