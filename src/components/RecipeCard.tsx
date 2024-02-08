import React from 'react';
import { capitalize } from 'lodash';
import { Link } from 'react-router-dom';

export const RecipeCard = (props: { recipe: any }) => {
  const { recipe } = props;
  const { id, title, image, likes, usedIngredients } = recipe;

  return (
    <Link to={`/recipe/${id}`} className='recipe-card'>
      <div className='top-section'>
        <div className='card-img-wrapper'>
          <img src={image} alt={title} className='card-image' />
        </div>
        <div className='recipe-title-wrapper'>
          <div className='title-wrapper'>
            <div className='recipe-title'>{capitalize(title)}</div>
          </div>
          <div className='recipe-rating'>{likes}</div>
        </div>
      </div>
      <div className='bottom-section'>
        <div className='ingredient-listing'>
          {usedIngredients.map((ingredient: any, index: number) => {
            let quantity = `${ingredient.amount} ${ingredient.unit}`;
            return (
              <RecipeIngredient
                key={index}
                name={ingredient.name}
                quantity={quantity}
              />
            );
          })}
        </div>
      </div>
    </Link>
  );
};

const RecipeIngredient = (props: { name: string; quantity: string }) => {
  const { name, quantity } = props;
  return (
    <div className='ingredient-wrapper'>
      <div className='ingredient-item'>{capitalize(name)}</div>
      <div className='separator'></div>
      <div className='ingredient-item quantity'>{quantity}</div>
    </div>
  );
};
