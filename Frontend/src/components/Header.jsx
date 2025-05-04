import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { NavLink } from 'react-router-dom';

function Header() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();
  
  const navigate = useNavigate();

  const onSubmit = data => {
    // Navigate to ProductList with search query parameters
    const query = new URLSearchParams({
      search: data.name || '',
      category: data.category || ''
    }).toString();
    navigate(`/productlist?${query}`);
  };

  return (
    <>
      <header className='header'>
        {/* for logo in header */}
        <div className='headerLogo'>
          <img src="header-logo-symbol.png" alt="logo" className='headerLogoImage' />
          <p className='headerLogoText'>Brand</p>
        </div>

        {/* for search bar in header */}
        <div className='headerSearchContainer'>
          <form className='headerForm' onSubmit={handleSubmit(onSubmit)}>
            <input
              type="search"
              {...register("name")}
              className='headerSearchbar'
              placeholder='Search'
            />

            <select {...register("category")} className='headerDropDown'>
              <option value="" hidden>All Category</option>
              <option value="Accessories">Accessories</option>
              <option value="Clothes and Wear">Clothes and Wear</option>
              <option value="Home Interiors">Home Interiors</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Kitchen appliances">Kitchen appliances</option>
            </select>

            <input
              disabled={isSubmitting}
              type="submit"
              value='Search'
              className='headerSubmit'
            />
          </form>
        </div>

        {/* for links in header */}
        <div className='headerLinkContainer'>
          <NavLink className={'navlink'}>
            <Badge color="primary">
              <AccountCircleIcon fontSize="small" />
            </Badge>
            <p className='linkText'>Profile</p>
          </NavLink>

          <NavLink className={'navlink'}>
            <Badge color="secondary">
              <MailIcon fontSize="small" />
            </Badge>
            <p className='linkText'>Message</p>
          </NavLink>

          <NavLink className={'navlink'}>
            <Badge color="error">
              <ListAltIcon fontSize="small" />
            </Badge>
            <p className='linkText'>Orders</p>
          </NavLink>

          <NavLink to="/cart" className='navlink'>
            <Badge color="success">
              <ShoppingCartIcon fontSize="small" />
            </Badge>
            <p className='linkText'>My cart</p>
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;