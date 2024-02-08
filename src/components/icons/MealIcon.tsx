import React from 'react';
import VeganIcon from './VeganIcon';
import VegIcon from './VegIcon';
import NonVegIcon from './NonVegIcon';

const MealIcon = ({ mealType }: any) => {
  switch (mealType) {
    case 'vegan':
      return <VeganIcon />;
    case 'veg':
      return <VegIcon />;
    case 'non-veg':
      return <NonVegIcon />;
    default:
      return null; // Handle other cases if needed
  }
};

export default MealIcon;
