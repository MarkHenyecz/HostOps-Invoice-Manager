// Essentials
import React, { useState } from 'react';
import { BrowserRouter as Router,  Routes,  Route, Navigate, useLocation } from 'react-router-dom';

// Interfaces
import NavbarItem from './interfaces/navbarItem';

// Pages
import Navbar from './components/Navbar'
import Home from './components/Home/Home'

function AppRouter() {
  let [navItems, setNavItems] = useState<NavbarItem[]>([
    {name: 'Home', link: '/'},
  ]);

  return (
    <Router>
      <div className="App">
        <Navbar pages={navItems} />
        
        <Routes>
              <Route path='/' element={< Home />}></Route>
              <Route path='/login' element={< Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
