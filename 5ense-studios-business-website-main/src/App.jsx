import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/About.jsx';
import Friend from './pages/Friend.jsx';
import Account from './pages/Account.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {

  return (
    <BrowserRouter>
      <div className='app-shell'>
        <ScrollToTop />
        <Navbar />
        <main className='app-main'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/friend' element={<Friend />} />
            <Route path='/account' element={<Account />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
