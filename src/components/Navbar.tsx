import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilledHeartIcon from './icons/FilledHeartIcon';
import Logo from './icons/Logo';

const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  const goToFavorites = () => {
    navigate('/favorites');
  };

  return (
    <div className='navbar'>
      <div className='container navbar-content'>
        <div className='left-section' onClick={goToHome}>
          <div className='logo'>
            <Logo />
          </div>
          <span> Chef's Assistant</span>
        </div>
        <div className='right-section' onClick={goToFavorites}>
          <div className='favorite-icon'>
            <FilledHeartIcon />
          </div>
          <span>Favorites</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
