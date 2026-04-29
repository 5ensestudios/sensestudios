import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/5ense-logo.png';
import IGIcon from '../Icons/IGIcon';
import ThreadsIcon from '../Icons/ThreadsIcon';
import YoutubeFillIcon from '../Icons/YoutubeFillIcon';

const Footer = () => {
  return (
    <footer className="site-footer site-gutter">
      <div className="site-footer__inner">
        {/* Brand */}
        <div className="site-footer__brand">
          <Link to="/">
            <img src={Logo} alt="5ense-studio logo" className="site-footer__logo" />
          </Link>
        </div>

        <div className="site-footer__divider" />

        {/* Site links */}
        <div className="site-footer__links">
          <Link to="/" className="site-footer__link">ABOUT</Link>
          <Link to="/contact" className="site-footer__link">CONTACT</Link>
          <Link to="/friend" className="site-footer__link">THE FRIEND</Link>
          <Link to="/account" className="site-footer__link">ACCOUNT</Link>
        </div>

        <div className="site-footer__divider" />

        {/* Mobile socials */}
        <div className="site-footer__socials site-footer__socials--mobile">
          <a href="https://www.instagram.com/sensestudios.v/" target='_blank' rel='noopener noreferrer' className='site-footer__social-link'>
            <IGIcon size={22} color="white" />
          </a>
          <a href="https://www.threads.com/@sensestudios.v?xmt=AQF05jeuhfp35PvGjK-0EIIn0jMNPYa9Nl7Aukkn5A3WqMo" target='_blank' rel='noopener noreferrer' className='site-footer__social-link'>
            <ThreadsIcon size={22} color="white" />
          </a>
          <a href="https://www.youtube.com/c/sensestudios" target='_blank' rel='noopener noreferrer' className='site-footer__social-link'>
            <YoutubeFillIcon size={22} color="white" />
          </a>
        </div>

        {/* Desktop socials */}
        <div className="site-footer__socials site-footer__socials--desktop">
          <a href="https://www.instagram.com/sensestudios.v/" target='_blank' rel='noopener noreferrer' className='site-footer__social-link'>
            <IGIcon size={35} color="white" />
          </a>
          <a href="https://www.threads.com/@sensestudios.v?xmt=AQF05jeuhfp35PvGjK-0EIIn0jMNPYa9Nl7Aukkn5A3WqMo" target='_blank' rel='noopener noreferrer' className='site-footer__social-link'>
            <ThreadsIcon size={35} color="white" />
          </a>
          <a href="https://www.youtube.com/c/sensestudios" target='_blank' rel='noopener noreferrer' className='site-footer__social-link'>
            <YoutubeFillIcon size={35} color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;