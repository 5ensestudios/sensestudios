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
    <section className='contact-section site-gutter'>
      <img src={PaperTexture} alt='' className='texture-layer texture-layer--paper' />
      <div className='tone-layer tone-layer--soft' />
      <div className='contact-section__content'>
        <h1 className='contact-section__title'>
        Get in <span className='text-[#f16d18]'>touch</span> with us
      </h1>

      <form
        onSubmit={handleSubmit}
        className='contact-form'
      >
        <div className='contact-form__field'>
          <label className='contact-form__label'>Full Name</label>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='contact-form__input'
          />
        </div>

        <div className='contact-form__field'>
          <label className='contact-form__label'>E-mail</label>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='contact-form__input'
          />
        </div>

        <div className='contact-form__field'>
          <label className='contact-form__label'>Message</label>
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            rows={5}
            className='contact-form__textarea'
          />
        </div>

        <div className='contact-form__actions'>
          <button type='submit' className='btn btn--solid'>
            SEND MESSAGE
          </button>
        </div>
      </form>

        <div className='contact-socials'>
        <a href='mailto:sensestudios@example.com' className='contact-socials__link'>
          <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'/>
          </svg>
        </a>

        <a
          href='https://www.instagram.com/sensestudios.v/'
          target='_blank'
          rel='noopener noreferrer'
          className='contact-socials__link'
        >
          <IGIcon size={28} color='white' />
        </a>

        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='contact-socials__link'
        >
          <YoutubeFillIcon size={28} color='#ffffff' />
        </a>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
