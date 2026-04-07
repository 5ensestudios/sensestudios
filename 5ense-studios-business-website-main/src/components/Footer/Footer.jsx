import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/5ense-logo.png';
import IGIcon from '../Icons/IGIcon';
import ThreadsIcon from '../Icons/ThreadsIcon';
import YoutubeFillIcon from '../Icons/YoutubeFillIcon';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-45">
      <div className="flex flex-col md:flex-row items-center justify-between py-8 md:py-10 gap-6 md:gap-0">
        
        {/* LOGO */}
        <div className="flex items-center">
          
          <img 
            src={Logo} 
            alt="5ense-studio logo"
            className="h-35 md:h-50 w-auto block object-left"
          />
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block h-24 w-px bg-white opacity-40"></div>

        {/* LINKS */}
        <div className="flex flex-col items-center text-sm space-y-3 tracking-widest">
          <Link
            to="/"
            className="hover:text-[#f16d18] transform transition duration-200 hover:scale-105"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#f16d18] transform transition duration-200 hover:scale-105"
          >
            CONTACT
          </Link>
          <Link
            to="/friend"
            className=" hover:text-[#f16d18] transform transition duration-200 hover:scale-105"
          >
            THE FRIEND
          </Link>
          <Link
            to="/account"
            className="hover:text-[#f16d18] transform transition duration-200 hover:scale-105"
          >
            ACCOUNT
          </Link>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block h-24 w-px bg-white opacity-40"></div>

        {/* ICONS — mobile (size 22) */}
        <div className="flex md:hidden items-center gap-5 mt-10">
          <a href="https://www.instagram.com/sensestudios.v/" target='_blank' rel='noopener noreferrer' className='transition-colors duration-300 hover:text-[#f16d18]'>
            <IGIcon size={22} color="white" />
          </a>
          <a href="https://www.threads.com/@sensestudios.v?xmt=AQF05jeuhfp35PvGjK-0EIIn0jMNPYa9Nl7Aukkn5A3WqMo" target='_blank' rel='noopener noreferrer' className='transition-colors duration-300 hover:text-[#f16d18]'>
            <ThreadsIcon size={22} color="white" />
          </a>
          <a href="https://www.youtube.com/c/sensestudios" target='_blank' rel='noopener noreferrer' className='transition-colors duration-300 hover:text-[#f16d18]'>
            <YoutubeFillIcon size={22} color="white" />
          </a>
        </div>

        {/* ICONS — desktop (size 42) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="https://www.instagram.com/sensestudios.v/" target='_blank' rel='noopener noreferrer' className='transition-colors duration-300 hover:text-[#f16d18]'>
            <IGIcon size={42} color="white" />
          </a>
          <a href="https://www.threads.com/@sensestudios.v?xmt=AQF05jeuhfp35PvGjK-0EIIn0jMNPYa9Nl7Aukkn5A3WqMo" target='_blank' rel='noopener noreferrer' className='transition-colors duration-300 hover:text-[#f16d18]'>
            <ThreadsIcon size={42} color="white" />
          </a>
          <a href="https://www.youtube.com/c/sensestudios" target='_blank' rel='noopener noreferrer' className='transition-colors duration-300 hover:text-[#f16d18]'>
            <YoutubeFillIcon size={42} color="white" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;