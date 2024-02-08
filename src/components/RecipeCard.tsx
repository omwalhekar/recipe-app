import React from 'react';
import { capitalize } from 'lodash';
import { Link } from 'react-router-dom';

export const RecipeCard = (props: {
  recipe: any;
  onClick: (id: String) => void;
}) => {
  const { recipe, onClick } = props;
  const { id, title, image, likes, usedIngredients } = recipe;

  return (
    <div onClick={() => onClick(id)} className='recipe-card'>
      <div className='top-section'>
        <div className='card-img-wrapper'>
          <img src={image} alt={title} className='card-image' />
        </div>
      </div>
      <div className='recipe-title'>{capitalize(title)}</div>
    </div>
  );
};
