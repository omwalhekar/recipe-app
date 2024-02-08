import React from 'react';
import { capitalize } from 'lodash';
import RemoveIcon from './icons/RemoveIcon';

export const RecipeCard = (props: {
  recipe: any;
  onClick?: (id: string) => void;
  removeFromFavorites?: (id: string) => void;
}) => {
  const { recipe, onClick, removeFromFavorites } = props;
  const { id, title, image } = recipe;

  return (
    <div onClick={() => onClick && onClick(id)} className='recipe-card'>
      {removeFromFavorites && (
        <div
          className='remove-btn'
          onClick={(e: any) => {
            e.stopPropagation();
            removeFromFavorites(id);
          }}
        >
          <RemoveIcon />
        </div>
      )}
      <div className='top-section'>
        <img src={image} alt={title} className='card-image' />
      </div>
      <div className='recipe-title'>{capitalize(title)}</div>
    </div>
  );
};
