import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeService from '../services/recipe';

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipeData, setRecipeData] = useState();

  useEffect(() => {
    if (recipeId) {
      // RecipeService.getRecipeById(recipeId).then((data: any) => {
      //   console.log({ data });
      //   setRecipeData(data);
      // });
    }
  }, []);
  return <div className=''>Recipe</div>;
};

export default Recipe;
