import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { RecipeCard } from '../components/RecipeCard';

const RecipeListing = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className='recipe-listing'>
      <div className='container'>
        <SearchBar setRecipes={setRecipes} />

        <div className='recipe-cards'>
          {recipes.map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeListing;
