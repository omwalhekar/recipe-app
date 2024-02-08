import React, { useState } from 'react';
import RecipeService from '../services/recipe';

const SearchBar = (props: { setRecipes: any }) => {
  const { setRecipes } = props;
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    fetchRecipies();
  };

  const fetchRecipies = () => {
    if (searchQuery) {
      const wordsArray = searchQuery.split(/[,\s]+/);
      const queryString = wordsArray.join('%2C');

      RecipeService.getRecipes(queryString).then((data: any) => {
        setRecipes(data);
      });
    }
  };
  return (
    <div>
      <input
        className='search-bar'
        type='text'
        placeholder='E.g. Pasta Pizza'
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
