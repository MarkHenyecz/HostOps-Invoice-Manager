import React from "react"
import { Link, Navigate, useLocation } from 'react-router-dom';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import '../styles/scss/navbar.scss'
import NavbarItem from "../interfaces/navbarItem";


function Navbar(props: {pages: NavbarItem[]}) {
  let token: string|null = window.localStorage.getItem('token');
  const location = useLocation();
  console.log(location);
  
  if(!token && location.pathname != '/login') {
    return <Navigate to={'/login'} />;
  }

  return(
    <ul className="navbar">
      <BrowserView>
        <div className='navbar-logo'>
          <img src="https://hostops.hu/img/logo.svg" alt="Logo" />
        </div>
        
        <div>
          {props.pages.map(i => 
          <li>
            <Link to={i.link}><h1 className={location.pathname == i.link ? 'active' : ''}>{i.name}</h1></Link>
          </li>)}
        </div>
      </BrowserView>
    </ul>
  )
}

export default Navbar;