import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  // const [recipes, setRecipes] = useState([]);
  const tags = ['Pasta', 'Spinach', 'Eggs', 'Tomatoes', 'Pizza'];
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTagSelection = (tag: String) => {
    navigate(`/results/${tag}`);
  };

  return (
    <div className='home-page'>
      <Navbar />
      <div className='container'>
        <div className='center-section'>
          <img className='banner-img' src='assets/banner-image.jpg' alt='' />
          <div className='banner-content'>
            <div className='container'>
              <div className='search-section'>
                <header className='banner-title'>
                  Eat what makes you happy!
                </header>

                <SearchBar redirect={true} setLoading={setLoading} />
              </div>
            </div>
          </div>
        </div>
        <div className='default-tags'>
          {tags.map((tag, index) => {
            return (
              <div
                key={index}
                className='food-tag'
                onClick={() => handleTagSelection(tag)}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
