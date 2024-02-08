import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeService from '../services/recipe';
import RawHTMLComponent from '../components/RawHTML';
import { isEmpty } from 'lodash';

const Recipe = () => {
  const { recipeId, searchQuery } = useParams();
  const [recipeData, setRecipeData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const determineMealType = (recipeData: any) => {
    const isVegetarian = recipeData.vegetarian;
    const isVegan = recipeData.vegan;

    if (isVegan && isVegetarian) {
      return 'vegan';
    } else if (isVegetarian) {
      return 'veg';
    } else {
      return 'non-veg';
    }
  };

  const goBack = () => {
    if (searchQuery) {
      navigate(`/results/${searchQuery}`);
    } else {
      navigate(`/`);
    }
  };

  useEffect(() => {
    if (recipeId && recipeId !== recipeData?.id) {
      setLoading(true);
      RecipeService.getRecipeById(recipeId)
        .then((data: any) => {
          console.log({ data });
          setRecipeData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className='recipe-detail-page'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        recipeData && (
          <div className='container'>
            <div className='recipe-banner'>
              <div className='back-icon' onClick={goBack}>
                <BackIcon />
              </div>
              <div className='left-section recipe-img-wrapper'>
                <img src={recipeData.image} alt={recipeData.sourceURL} />
              </div>
              <div className='right-section'>
                <div className='recipe-title'>{recipeData.title}</div>
                <div className='recipe-stats'>
                  <div className='stat-item'>4.6</div>
                  <div className='stat-item'>30min</div>
                  <div className='stat-item'>206 Cal</div>
                </div>
                <div className='recipe-metadata'>
                  <div className='data-item'>
                    <div className='title'>
                      <MealIcon mealType={determineMealType(recipeData)} />
                    </div>
                    <div className='subtitle'>Meal Type</div>
                  </div>
                  <div className='data-item'>
                    <div className='title'>{recipeData.readyInMinutes}m</div>
                    <div className='subtitle'>Prep Time</div>
                  </div>
                  <div className='data-item'>
                    <div className='title'>{recipeData.servings}</div>
                    <div className='subtitle'>Servings</div>
                  </div>
                  <div className='data-item'>
                    <div className='title'>
                      {recipeData.extendedIngredients.length}
                    </div>
                    <div className='subtitle'>Ingredients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='recipe-summary'>
              <RawHTMLComponent rawHTML={recipeData.summary} />
            </div>

            <div className='ingredients-section'>
              <div className='section-title'>Ingredients</div>
              <div className='recipe-ingredients'>
                {recipeData.extendedIngredients.map(
                  (ingredient: any, index: number) => {
                    return (
                      <div key={index} className='recipe-ingredient'>
                        <CornIcon />
                        <div className='text'>
                          {`${ingredient.amount} ${ingredient.unit} ${
                            ingredient.unit ? 'of' : ''
                          } ${ingredient.name}`}
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>

            {!isEmpty(recipeData.analyzedInstructions) && (
              <div className='instructions-section'>
                <div className='section-title'>Instructions</div>
                <div className='recipe-instructions'>
                  {recipeData.analyzedInstructions[0].steps.map(
                    (instruction: any, index: number) => {
                      return (
                        <div key={index} className='instruction-item'>
                          <div className='step'>Step {index + 1}</div>
                          <div className='instruction'>{instruction.step}</div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Recipe;

const NonVegIcon = () => {
  return (
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='21'
        height='21'
        rx='4'
        stroke='#D80000'
        stroke-width='2'
      />
      <circle cx='11.5' cy='11.5' r='4.5' fill='#D80000' />
    </svg>
  );
};

const VeganIcon = () => {
  return (
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='21'
        height='21'
        rx='4'
        stroke='#098309'
        stroke-width='2'
      />
      <path
        d='M11.5 7C12.6935 7 13.8381 7.47471 14.682 8.31971C15.5259 9.16471 16 10.3108 16 11.5058C15.9999 13.8207 14.2479 15.7589 11.9474 15.9891C11.9537 15.8456 11.9631 15.692 11.9779 15.5837C12.1587 14.2564 12.4158 12.9283 12.8485 11.6608C13.4132 10.0067 14.6105 8.36054 14.6105 8.36054C14.6105 8.36054 14.0209 8.61731 13.757 8.83184C13.3599 9.15467 13.003 9.65833 12.7302 10.1017C11.9865 11.3103 11.4596 13.9232 11.4596 13.9232C11.4596 13.9232 10.8758 12.3363 10.5061 11.5777C10.1775 10.9037 9.71163 10.2428 9.34269 9.64134C9.56343 9.61395 9.75416 9.79508 9.93673 9.94807C10.1871 10.1579 10.5829 10.8502 10.5829 10.8502C10.5829 10.8502 10.5293 10.047 10.4388 9.78515C10.3059 9.40056 10.0329 9.07013 9.71938 8.90627C9.49449 8.78871 8.46891 8.61079 8.11013 8.55098C8.96311 7.56774 10.1993 7.00215 11.5 7ZM7.67524 9.13784C7.73426 9.5916 7.84728 10.2038 8.05036 10.5095C8.18664 10.7146 8.55548 10.889 8.77735 10.9955C9.13556 11.1675 9.68903 11.192 9.68903 11.192C9.68903 11.192 10.2358 12.1864 10.4232 12.7193C10.7903 13.7635 11.0419 14.9118 11.1742 15.9539C11.1762 15.9693 11.1779 15.9846 11.1798 16C8.82477 15.8318 7.00006 13.8698 7 11.5058C7.00112 10.669 7.23493 9.84906 7.67524 9.13784Z'
        fill='#098309'
      />
    </svg>
  );
};

const VegIcon = () => {
  return (
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='21'
        height='21'
        rx='4'
        stroke='#098309'
        stroke-width='2'
      />
      <circle cx='11.5' cy='11.5' r='4.5' fill='#098309' />
    </svg>
  );
};

const CornIcon = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='16' height='16' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_46_1111' transform='scale(0.0111111)' />
        </pattern>
        <image
          id='image0_46_1111'
          width='90'
          height='90'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};

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

const BackIcon = () => {
  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect width='50' height='50' fill='url(#pattern0)' />
      <defs>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_46_1116' transform='scale(0.0111111)' />
        </pattern>
        <image
          id='image0_46_1116'
          width='90'
          height='90'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};
