import React, { useState } from 'react';
import RecipeService from '../services/recipe';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props: {
  initialValue?: string;
  setRecipes?: any;
  redirect?: boolean;
}) => {
  const { initialValue, setRecipes, redirect } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const parseSeachQuery = () => {
    const wordsArray = searchQuery.split(/[,\s]+/);
    return wordsArray.join('%2C');
  };

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (redirect) {
      navigate(`/results/${parseSeachQuery()}`);
    } else {
      fetchRecipies();
      window.history.replaceState({}, '', `/results/${parseSeachQuery()}`);
    }
  };

  const fetchRecipies = () => {
    if (searchQuery) {
      const queryString = parseSeachQuery();

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
        defaultValue={initialValue}
        placeholder='E.g. Pasta Pizza'
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
