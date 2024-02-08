import React from 'react';
import { useNavigate } from 'react-router-dom';

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
          Chef's Assistant
        </div>
        <div className='right-section' onClick={goToFavorites}>
          Your Favorites
        </div>
      </div>
    </div>
  );
};

export default Navbar;
