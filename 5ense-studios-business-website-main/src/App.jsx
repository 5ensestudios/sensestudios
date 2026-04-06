import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

import './App.css'



//component imports

import Navbar  from './components/Navbar/navbar.jsx';  
import Footer from './components/Footer/Footer.jsx';

import About from './pages/About.jsx'
import Friend from './pages/Friend.jsx';
import Account from './pages/Account.jsx';
import Contact from './pages/Contact.jsx';
function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/friend' element={<Friend />} />
          <Route path='/account' element={<Account />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
