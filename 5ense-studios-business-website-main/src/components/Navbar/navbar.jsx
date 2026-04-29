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
      <nav className={`site-navbar ${isDark ? 'site-navbar--solid' : ''} ${isHidden ? 'site-navbar--hidden' : ''}`}>
        {/* Mobile navigation */}
        <div className="site-navbar__column site-navbar__column--start site-navbar__mobile-only">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`site-navbar__toggle ${menuOpen ? 'site-navbar__toggle--hidden' : ''}`}
            aria-label="Open menu"
          >
            <span className="site-navbar__toggle-line" />
            <span className="site-navbar__toggle-line" />
            <span className="site-navbar__toggle-line" />
          </button>
        </div>

        <div className="site-navbar__column site-navbar__column--center site-navbar__mobile-only">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={Logo} alt="5ense Studio Logo" className="site-navbar__mobile-logo" />
          </Link>
        </div>

        {/* Desktop left controls */}
        <div className="site-navbar__column site-navbar__column--start site-navbar__desktop">
          <div className="site-navbar__desktop-actions">
            <button onClick={() => navigate('/account')} className="site-navbar__account" aria-label="Account">
              <UserIcon size={20} color="white" />
            </button>
            <button
              onClick={() => navigate('/friend')}
              className="btn btn--outline site-navbar__friend-button"
            >
              THE FRIEND
            </button>
          </div>
        </div>

        <div className="site-navbar__column site-navbar__column--end site-navbar__mobile-only">
          <button onClick={() => navigate('/account')} className="site-navbar__mobile-account" aria-label="Account">
            <UserIcon size={20} color="white" />
          </button>
        </div>

        {/* Desktop center links */}
        <div className="site-navbar__links">
          <Link to="/" className="site-navbar__link">ABOUT</Link>
          <Link to="/contact" className="site-navbar__link">CONNECT</Link>
        </div>

        {/* Desktop right brand */}
        <div className="site-navbar__column site-navbar__column--end site-navbar__desktop">
          <Link to="/">
            <img src={Logo} alt="5ense Studio Logo" className="site-navbar__desktop-logo" />
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="site-navbar__overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className={`site-navbar__drawer site-navbar__mobile-only ${menuOpen ? 'site-navbar__drawer--open' : 'site-navbar__drawer--closed'}`}>
        <button onClick={() => setMenuOpen(false)} className="site-navbar__drawer-close" aria-label="Close menu">
          <span className="site-navbar__close-line" />
          <span className="site-navbar__close-line" />
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)} className="site-navbar__drawer-link">ABOUT</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)} className="site-navbar__drawer-link">CONNECT</Link>
        <Link to="/friend" onClick={() => setMenuOpen(false)} className="site-navbar__drawer-link">THE FRIEND</Link>
        <Link to="/account" onClick={() => setMenuOpen(false)} className="site-navbar__drawer-link">ACCOUNT</Link>
      </div>
    </>
  );
};

export default Navbar;