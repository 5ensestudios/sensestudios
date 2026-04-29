import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import Logo from '../../assets/images/logo/5ense-logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFriend = location.pathname === '/friend';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark =
    isFriend ||
    location.pathname === '/account' ||
    location.pathname === '/contact' ||
    (location.pathname === '/' && scrolled);

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
      <nav
        className={`fixed top-0 left-0 w-full flex items-center px-4 md:px-8 lg:px-16 xl:px-45 h-16 md:h-20 lg:h-24 xl:h-30 text-white z-100 transition-all duration-300 ${
          isDark ? 'bg-black' : ''
        } ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >

        {/* Left: Hamburger */}
        <div className="flex flex-1 items-center lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`cursor-pointer flex flex-col gap-1.5 p-1 transition-opacity duration-200 ${
              menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>

        {/* Center: Logo (mobile & tablet) */}
        <div className="flex items-center justify-center lg:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={Logo} alt="5ense Studio Logo" className="w-24 md:w-28" />
          </Link>
        </div>

        {/* Right spacer (mobile & tablet, replaces icon) */}
        <div className="flex flex-1 items-center justify-end lg:hidden" />

        {/* ── DESKTOP left controls ── */}
        <div className="hidden lg:flex flex-1 items-center gap-3 lg:gap-4">
          <button
            onClick={() => navigate("/friend")}
            className="font-spartan border border-white px-10 py-2 rounded-full text-sm lg:text-sm tracking-widest cursor-pointer transition-all duration-200 hover:bg-white hover:text-black"
          >
            THE FRIEND
          </button>
        </div>

        {/* ── DESKTOP center nav links ── */}
        <div className="hidden lg:flex items-center gap-10 lg:gap-12 text-xs lg:text-sm tracking-widest">
          <Link to="/" className="hover:opacity-60 transition duration-200">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:opacity-60 transition duration-200">
            CONNECT
          </Link>
        </div>

        {/* ── DESKTOP right logo ── */}
        <div className="hidden lg:flex flex-1 items-center justify-end">
          <Link to="/" className="cursor-pointer">
            <img src={Logo} alt="5ense Studio Logo" className="w-32 lg:w-36 xl:w-40" />
          </Link>
        </div>
      </nav>

      {/* ── MOBILE backdrop ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-98 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── MOBILE sidebar ── */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-99 flex flex-col gap-8 px-8 pt-24 pb-10 text-white text-sm tracking-widest transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 left-5 cursor-pointer flex flex-col gap-1.5 p-1"
        >
          <span className="block w-5 h-0.5 bg-white rotate-45 translate-y-[3px]" />
          <span className="block w-5 h-0.5 bg-white -rotate-45 -translate-y-[3px]" />
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#f16d18] transition duration-200">
          ABOUT
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#f16d18] transition duration-200">
          CONNECT
        </Link>
        <Link to="/friend" onClick={() => setMenuOpen(false)} className="hover:text-[#f16d18] transition duration-200">
          THE FRIEND
        </Link>
      </div>
    </>
  );
};

export default Navbar;