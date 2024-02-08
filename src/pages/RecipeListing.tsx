import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { RecipeCard } from '../components/RecipeCard';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeService from '../services/recipe';

const RecipeListing = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchString, setSearchString] = useState('');
  const { searchQuery } = useParams();

  const navigate = useNavigate();

  const navigateToRecipe = (id: String) => {
    navigate(`/recipe/${id}/${searchQuery ?? ''}`);
  };

  useEffect(() => {
    if (searchQuery) {
      RecipeService.getRecipes(searchQuery).then((data: any) => {
        setRecipes(data);
      });
      const wordsArray = searchQuery.split('%2C');
      setSearchString(wordsArray.join(',  '));
    }
  }, []);

  return (
    <div className='recipe-listing'>
      <div className='container'>
        <SearchBar initialValue={searchString} setRecipes={setRecipes} />

        <div className='recipe-cards'>
          {recipes.map((recipe, index) => {
            return (
              <RecipeCard
                key={index}
                recipe={recipe}
                onClick={navigateToRecipe}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeListing;
