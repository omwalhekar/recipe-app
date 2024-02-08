import { isEmpty } from 'lodash';
import React, { Fragment, useEffect, useState } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import BackIcon from '../components/icons/BackIcon';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const removeFromLiked = (id: string) => {
    const newLiked = recipes.filter((recipe: any) => recipe.id !== id);
    setRecipes(newLiked);
    localStorage.setItem('likedRecipes', JSON.stringify(newLiked));
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToRecipe = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  useEffect(() => {
    const likedRecipes: any = JSON.parse(
      localStorage.getItem('likedRecipes') as any,
    );
    setRecipes(likedRecipes);
  }, []);

  return (
    <div className='container favorites-page'>
      <div className='back-btn' onClick={goToHome}>
        <BackIcon />
      </div>
      <div className='page-header'>Your Favorites</div>
      <div className='recipe-list'>
        {isEmpty(recipes) ? (
          <div className='empty-list-text'>
            You haven't marked any recipe as favorite
          </div>
        ) : (
          <div className='favorite-cards-list'>
            {recipes.map((recipe: any, index: number) => {
              return (
                <RecipeCard
                  key={index}
                  recipe={recipe}
                  onClick={goToRecipe}
                  removeFromFavorites={() => removeFromLiked(recipe?.id)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
