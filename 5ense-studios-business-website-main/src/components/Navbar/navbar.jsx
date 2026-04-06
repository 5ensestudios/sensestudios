import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import Logo from '../../assets/images/logo/5ense-logo.png';
import UserIcon from '../Icons/UserIcon.jsx';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFriend = location.pathname === '/friend';

  const [scrolled, setScrolled] = useState(false);

  const isDark = isFriend || location.pathname === '/account' || location.pathname === '/contact' || (location.pathname === '/' && scrolled);

  useEffect(() => {
    setScrolled(false);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isHidden = isFriend && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-45 h-16 md:h-30 text-white z-100 transition-all duration-300 ${isDark ? 'bg-black' : ''} ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Left: User Icon + Button */}
      <div className="flex items-center gap-3 md:gap-4">
        <button onClick={() => navigate('/account')} className='cursor-pointer'>
          <UserIcon size={20} color="white" />
        </button>
        <button
          onClick={() => navigate("/friend")}
          className="font-spartan hidden md:block border border-white px-5 py-2 rounded-full text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-white hover:text-black"
        >
          THE FRIEND
        </button>
      </div>

      {/* Center: Nav links */}
      <div className="flex items-center gap-6 md:gap-10 text-xs md:text-sm tracking-widest">
        <Link to="/" className="hover:opacity-60 transition duration-200">ABOUT</Link>
        <Link to="/contact" className="hover:opacity-60 transition duration-200">CONNECT</Link>
      </div>

      {/* Right: Logo */}
      <div className="flex items-center justify-end w-24 md:w-36">
        <img src={Logo} alt="5ense Studio Logo" className="w-full" />
      </div>
    </nav>
  );
};

export default Navbar;