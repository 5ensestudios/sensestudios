import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import Logo from '../../assets/images/logo/5ense-logo.png';
import UserIcon from '../Icons/UserIcon.jsx';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFriend = location.pathname === '/friend';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = isFriend || location.pathname === '/account' || location.pathname === '/contact' || (location.pathname === '/' && scrolled);

  useEffect(() => {
    setScrolled(false);
    setMenuOpen(false);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isHidden = isFriend && !scrolled;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full flex items-center px-4 md:px-45 h-16 md:h-30 text-white z-100 transition-all duration-300 ${isDark ? 'bg-black' : ''} ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

        {/* Left: Hamburger — hidden when sidebar is open */}
        <div className="flex flex-1 items-center md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className={`cursor-pointer flex flex-col gap-1.5 p-1 transition-opacity duration-200 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>

        {/* Center: Logo (mobile — clickable home) / Nav links (desktop) */}
        <div className="flex items-center justify-center md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={Logo} alt="5ense Studio Logo" className="w-25" />
          </Link>
        </div>
        <div className="hidden md:flex flex-1 items-center gap-3 md:gap-4">
          <button onClick={() => navigate('/account')} className='cursor-pointer'>
            <UserIcon size={20} color="white" />
          </button>
          <button
            onClick={() => navigate("/friend")}
            className="font-spartan border border-white px-7 py-2 rounded-full text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-white hover:text-black"
          >
            THE FRIEND
          </button>
        </div>

        {/* Right: Profile (mobile) / Logo (desktop) */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <button onClick={() => navigate('/account')} className='cursor-pointer'>
            <UserIcon size={20} color="white" />
          </button>
        </div>

        {/* ── DESKTOP center nav links ── */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-widest">
          <Link to="/" className="hover:opacity-60 transition duration-200">ABOUT</Link>
          <Link to="/contact" className="hover:opacity-60 transition duration-200">CONNECT</Link>
        </div>

        {/* ── DESKTOP right logo ── */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <img src={Logo} alt="5ense Studio Logo" className="w-36" />
        </div>
      </nav>

      {/* ── MOBILE sidebar overlay (backdrop) ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-98 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── MOBILE sidebar (slides in from left) ── */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-black z-99 flex flex-col gap-8 px-8 pt-24 pb-10 text-white text-sm tracking-widest transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close button */}
        <button onClick={() => setMenuOpen(false)} className="absolute top-5 left-5 cursor-pointer flex flex-col gap-1.5 p-1">
          <span className="block w-5 h-0.5 bg-white! rotate-45 translate-y-[3px]" />
          <span className="block w-5 h-0.5 bg-white! -rotate-45 -translate-y-[3px]" />
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#f16d18] transition duration-200">ABOUT</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#f16d18] transition duration-200">CONNECT</Link>
        <Link to="/friend" onClick={() => setMenuOpen(false)} className="hover:text-[#f16d18] transition duration-200">THE FRIEND</Link>
        <Link to="/account" onClick={() => setMenuOpen(false)} className="hover:text-[#f16d18] transition duration-200">ACCOUNT</Link>
      </div>
    </>
  );
};

export default Navbar;