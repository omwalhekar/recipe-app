import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeService from '../services/recipe';
import RawHTMLComponent from '../components/RawHTML';
import { isEmpty } from 'lodash';
import CornIcon from '../components/icons/CornIcon';
import MealIcon from '../components/icons/MealIcon';
import BackIcon from '../components/icons/BackIcon';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Recipe = () => {
  const { recipeId, searchQuery } = useParams();
  const [recipeData, setRecipeData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const determineMealType = (recipeData: any) => {
    const isVegetarian = recipeData?.vegetarian;
    const isVegan = recipeData?.vegan;

    if (isVegan && isVegetarian) {
      return 'vegan';
    } else if (isVegetarian) {
      return 'veg';
    } else {
      return 'non-veg';
    }
  };

  const calculateRating = (recipeData: any) => {
    return (((recipeData?.spoonacularScore || 0) / 100) * 5).toFixed(2);
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
      <div className='container'>
        {loading ? (
          <Fragment>
            <div className='recipe-banner-skeleton'>
              <Skeleton className='left-section recipe-img-wrapper' count={1} />
              <div className='right-section'>
                <Skeleton className='title-skeleton' count={1} />
                <div className='recipe-meta-skeleton'>
                  <Skeleton className='meta-item' count={1} />
                  <Skeleton className='meta-item' count={1} />
                  <Skeleton className='meta-item' count={1} />
                </div>
              </div>
            </div>
            <Skeleton className='recipe-summary-skeleton' count={5} />
          </Fragment>
        ) : (
          <Fragment>
            <div className='recipe-banner'>
              <div className='back-icon' onClick={goBack}>
                <BackIcon />
              </div>
              <div className='left-section recipe-img-wrapper'>
                <img src={recipeData?.image} alt={recipeData?.sourceURL} />
              </div>
              <div className='right-section'>
                <div className='recipe-title'>{recipeData?.title}</div>
                <div className='recipe-stats'>
                  <div className='stat-item'>{calculateRating(recipeData)}</div>{' '}
                  |
                  <div className='stat-item'>{recipeData?.readyInMinutes}m</div>{' '}
                  |
                  <div className='stat-item'>
                    {recipeData?.aggregateLikes} Likes
                  </div>
                </div>
                <div className='recipe-metadata'>
                  <div className='data-item'>
                    <div className='title'>
                      <MealIcon mealType={determineMealType(recipeData)} />
                    </div>
                    <div className='subtitle'>Meal Type</div>
                  </div>
                  <div className='data-item'>
                    <div className='title'>{recipeData?.readyInMinutes}m</div>
                    <div className='subtitle'>Prep Time</div>
                  </div>
                  <div className='data-item'>
                    <div className='title'>{recipeData?.servings}</div>
                    <div className='subtitle'>Servings</div>
                  </div>
                  <div className='data-item'>
                    <div className='title'>
                      {recipeData?.extendedIngredients.length}
                    </div>
                    <div className='subtitle'>Ingredients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='recipe-summary'>
              <RawHTMLComponent rawHTML={recipeData?.summary} />
            </div>

            <div className='ingredients-section'>
              <div className='section-title'>Ingredients</div>
              <div className='recipe-ingredients'>
                {recipeData?.extendedIngredients.map(
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

            {!isEmpty(recipeData?.analyzedInstructions) && (
              <div className='instructions-section'>
                <div className='section-title'>Instructions</div>
                <div className='recipe-instructions'>
                  {recipeData?.analyzedInstructions[0].steps.map(
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
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Recipe;
