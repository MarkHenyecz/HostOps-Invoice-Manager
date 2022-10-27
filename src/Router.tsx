// Essentials
import React, { useState } from 'react';
import { BrowserRouter as Router,  Routes,  Route, Navigate, useLocation } from 'react-router-dom';

// Interfaces
import NavbarItem from './interfaces/navbarItem';

// Pages
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login';

function AppRouter() {
  let [navItems, setNavItems] = useState<NavbarItem[]>([
    {name: 'Dashboard', link: '/'},
    {name: 'Logout', link: '/logout'},
  ]);

  return (
    <Router>
      <div className="App">
        <Navbar pages={navItems} />
        
        <div className='App-wrapper'>
          <div className='App-wrapper--modal'>
            <Routes>
                  <Route path='/' element={< Home />}></Route>
                  <Route path='/login' element={< Login />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
