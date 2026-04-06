import React, { useState } from 'react';
import PaperTexture from '../../assets/images/Texture/Paper.jpg'
import IGIcon from '../Icons/IGIcon';
import YoutubeFillIcon from '../Icons/YoutubeFillIcon';

const ContactContent = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className='relative min-h-screen bg-[#1a1a1c] flex flex-col items-center justify-center gap-8 px-6 py-32 mt-16 overflow-hidden'>
      <img src={PaperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-50"></div>
      <div className='relative z-10 w-full flex flex-col items-center gap-8'>

      {/* Heading */}
      <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>
        Get in <span className='text-[#f16d18]'>touch</span> with us
      </h1>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className='bg-[#111113] rounded-3xl p-10 flex flex-col gap-5 w-full max-w-lg'
      >
        {/* Full Name */}
        <div className='flex flex-col gap-1'>
          <label className='text-white text-xs tracking-widest'>Full Name</label>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='bg-white text-black rounded-md px-4 py-2 text-sm outline-none w-full'
          />
        </div>

        {/* E-mail */}
        <div className='flex flex-col gap-1'>
          <label className='text-white text-xs tracking-widest'>E-mail</label>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='bg-white text-black rounded-md px-4 py-2 text-sm outline-none w-full'
          />
        </div>

        {/* Message */}
        <div className='flex flex-col gap-1'>
          <label className='text-white text-xs tracking-widest'>Message</label>
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            rows={5}
            className='bg-white text-black rounded-md px-4 py-2 text-sm outline-none w-full resize-none'
          />
        </div>

        {/* Submit */}
        <div className='flex justify-center mt-2'>
          <button
            type='submit'
            className='bg-[#f16d18] hover:bg-[#d45e10] transition-colors duration-200 text-white text-xs tracking-widest px-10 py-2 rounded-md cursor-pointer'
          >
            SEND MESSAGE
          </button>
        </div>
      </form>

      {/* Social Icons Pill */}
      <div className='bg-[#111113] rounded-full px-10 py-5 flex items-center gap-8'>
        {/* Mail icon */}
        <a href='mailto:sensestudios@example.com' className='text-white hover:text-[#f16d18] transition-colors duration-200'>
          <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href='https://www.instagram.com/sensestudios.v/'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors duration-200 hover:text-[#f16d18] text-white'
        >
          <IGIcon size={28} color='white' />
        </a>

        {/* YouTube */}
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-colors duration-200 hover:text-[#f16d18] text-white'
        >
          <YoutubeFillIcon size={28} color='#ffffff' />
        </a>
      </div>

      </div>{/* end z-10 wrapper */}

    </div>
  );
};

export default ContactContent;
