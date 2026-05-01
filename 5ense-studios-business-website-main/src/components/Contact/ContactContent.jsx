import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import PaperTexture from '../../assets/images/Texture/Paper.jpg'
import IGIcon from '../Icons/IGIcon'
import YoutubeFillIcon from '../Icons/YoutubeFillIcon'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ContactContent = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('') // success / error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('missing-config')
      return
    }

    setLoading(true)
    setStatus('')

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    })
    .catch(() => {
      setLoading(false)
      setStatus('error')
    })
  }

  return (
    <div className='relative min-h-screen bg-[#1a1a1c] flex flex-col items-center justify-center gap-8 px-6 py-32 mt-16 overflow-hidden'>
      
      <img src={PaperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-50"></div>

      <div className='relative z-10 w-full flex flex-col items-center gap-4 md:gap-8'>

        {/* Heading */}
        <h1 className='text-white text-[42px] md:text-[69px] tracking-[-0.063em] text-center'>
          Get in <span className='text-[#f16d18]'>touch</span> with us
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className='bg-[#111113] rounded-3xl md:rounded-[50px] p-6 md:p-15 flex flex-col gap-5 w-full max-w-160'
        >

          {/* Name */}
          <div className='flex flex-col gap-1'>
            <label className='font-mono text-white text-xs'>Full Name</label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              className='bg-white text-black rounded-[10px] px-4 py-2 text-sm outline-none'
            />
          </div>

          {/* Email */}
          <div className='flex flex-col gap-1'>
            <label className='font-mono text-white text-xs'>E-mail</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              className='bg-white text-black rounded-[10px] px-4 py-2 text-sm outline-none'
            />
          </div>

          {/* Message */}
          <div className='flex flex-col gap-1'>
            <label className='font-mono text-white text-xs'>Message</label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className='bg-white text-black rounded-[10px] px-4 py-2 text-sm outline-none resize-none'
            />
          </div>

          {/* Submit */}
          <div className='flex flex-col items-center mt-2 gap-2'>
            <button
              type='submit'
              disabled={loading}
              className='bg-[#f16d18] hover:bg-[#d45e10] transition-colors duration-200 font-mono text-white text-xs px-6 py-2.5 rounded-full cursor-pointer disabled:opacity-50'
            >
              {loading ? 'SENDING...' : 'SEND MESSAGE'}
            </button>

      
          </div>

        </form>

        {/* Socials */}
        <div className='bg-[#111113] rounded-full px-10 py-5 flex items-center gap-8'>

          {/* Mail */}
          <a href='mailto:5ense.studios2026@gmail.com' className='text-white hover:text-[#f16d18] transition-colors'>
            <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href='https://www.instagram.com/sensestudios.v/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[#f16d18] text-white transition-colors'
          >
            <IGIcon size={28} color='white' />
          </a>

          {/* YouTube */}
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[#f16d18] text-white transition-colors'
          >
            <YoutubeFillIcon size={28} color='#ffffff' />
          </a>

        </div>

      </div>
    </div>
  )
}

export default ContactContent