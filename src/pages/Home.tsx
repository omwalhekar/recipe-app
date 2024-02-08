import React, { useEffect, useState } from 'react';

import RecipeService from '../services/recipe';
import SearchBar from '../components/SearchBar';

const Home = () => {
  // const [recipes, setRecipes] = useState([]);

  return (
    <div className='home-page'>
      <img className='banner-img' src='assets/banner-image.jpg' alt='' />
      <div className='banner-content'>
        <div className='container'>
          <div className='navbar'></div>
          <div className='search-section'>
            <header className='banner-title'>Eat what makes you happy!</header>

            <SearchBar redirect={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
