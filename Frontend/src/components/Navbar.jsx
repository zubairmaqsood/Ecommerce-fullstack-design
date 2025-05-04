import React from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbarLinkContainer'>
        <NavLink className='links' to="">
          <MenuIcon fontSize="small" />
          All Category
        </NavLink>
        <NavLink className='links' to="">
          Hot Offers
        </NavLink>
        <NavLink className='links' to="">
          Giftboxes
        </NavLink>
        <NavLink className='links' to="">
          Projects
        </NavLink>
        <NavLink className='links' to="">
          Menu Item
        </NavLink>
        <NavLink className='links' to="">
          Help <ArrowDropDownIcon fontSize="small" />
        </NavLink>
      </div>

      <div className='navRegionContainer'>
        <div className='navCountryRegion'>
          English,USD
          <ArrowDropDownIcon fontSize="small" />
        </div>

        <div className='navFlagRegion'>
          Ship to
          <img src="flag.png" alt="" className='navFlagIcon' />
          <ArrowDropDownIcon fontSize="small" />
        </div>

      </div>
    </nav>
  )
}
