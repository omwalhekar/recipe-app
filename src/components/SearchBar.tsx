import React, { useState } from 'react';
import RecipeService from '../services/recipe';
import { useNavigate } from 'react-router-dom';
import SearchIcon from './icons/SearchIcon';

const SearchBar = (props: {
  initialValue?: string;
  setRecipes?: any;
  redirect?: boolean;
  setLoading: (arg0: boolean) => void;
}) => {
  const { initialValue, setRecipes, redirect, setLoading } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const parseSeachQuery = () => {
    const wordsArray = searchQuery.split(/[,\s]+/);
    return wordsArray.join('%2C');
  };

  const handleChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      if (redirect) {
        navigate(`/results/${parseSeachQuery()}`);
      } else {
        fetchRecipies();
        window.history.replaceState({}, '', `/results/${parseSeachQuery()}`);
      }
    }
  };

  const fetchRecipies = () => {
    if (searchQuery) {
      const queryString = parseSeachQuery();
      setLoading(true);
      RecipeService.getRecipes(queryString)
        .then((data: any) => {
          setRecipes(data);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className='search-bar-wrapper'>
      <input
        className='search-bar'
        type='text'
        defaultValue={initialValue}
        placeholder='E.g. Pasta Pizza'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className='search-icon' onClick={handleSearch}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
