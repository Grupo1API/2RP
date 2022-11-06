import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import {Bars, Nav, NavBtn,NavBtnLink} from './NavbarData';
import './style.css';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
  <IconContext.Provider value={{ color: '#fff' }}>
  <Nav>
  <div className='navbar'>
      <Link to='#' >
        <Bars onClick={showSidebar} />
      </Link>
  </div>
  <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    <ul className='nav-menu-items' onClick={showSidebar}>
      <li className='navbar-toggle'>
        <Link to='#' >
          <AiIcons.AiFillHome className='menu-bars' />
        </Link>
      </li>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
  <NavBtn>
    <NavBtnLink to='/login'>Login</NavBtnLink>
  </NavBtn>
  {
  /*
  <NavBtn>
    <NavBtnLink to='/login'>Logout</NavBtnLink>
  </NavBtn>
  */}
  <img className="logo-2rp" src="https://www.2rpnet.com.br/assets/images/2rp-net.svg" alt="logo da empresa"/> 
  </Nav>
</IconContext.Provider>
  )
}

export default Sidebar;