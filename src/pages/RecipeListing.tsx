import React, { Fragment, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { RecipeCard } from '../components/RecipeCard';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeService from '../services/recipe';
import BackIcon from '../components/icons/BackIcon';
import { isEmpty } from 'lodash';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Navbar from '../components/Navbar';

const RecipeListing = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');
  const { searchQuery } = useParams();

  const navigate = useNavigate();

  const goToHome = () => {
    navigate(`/`);
  };
  const goToRecipe = (id: String) => {
    navigate(`/recipe/${id}/${searchQuery ?? ''}`);
  };

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      RecipeService.getRecipes(searchQuery)
        .then((data: any) => {
          setRecipes(data);
        })
        .finally(() => setLoading(false));
      const wordsArray = searchQuery.split('%2C');
      setSearchString(wordsArray.join(',  '));
    }
  }, []);

  return (
    <div className='recipe-listing'>
      <Navbar />
      <div className='container listing-container'>
        <div className='search-bar-wrapper'>
          <div className='back-icon' onClick={goToHome}>
            <BackIcon />
          </div>
          <SearchBar
            setLoading={setLoading}
            initialValue={searchString}
            setRecipes={setRecipes}
          />
        </div>

        <div className='recipe-card-listing'>
          {loading ? (
            <Fragment>
              {Array(10)
                .fill(0)
                .map((i, index) => {
                  return (
                    <Skeleton
                      key={index}
                      className='recipe-card-skeleton'
                      count={1}
                    />
                  );
                })}
            </Fragment>
          ) : isEmpty(recipes) ? (
            'No Recipes Found'
          ) : (
            <Fragment>
              {recipes.map((recipe, index) => {
                return (
                  <RecipeCard
                    key={index}
                    recipe={recipe}
                    onClick={goToRecipe}
                  />
                );
              })}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeListing;
