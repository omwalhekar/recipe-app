import axios, { AxiosRequestConfig } from 'axios';

class Recipe {
  private baseUrl: string;

  private headerOptions: AxiosRequestConfig = {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    },
  };

  constructor() {
    this.baseUrl = process.env.REACT_APP_HOST || '';
  }

  async getRecipes(ingredients: string): Promise<any[]> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/recipes/findByIngredients?ignorePantry=true&number=8&ranking=1&ingredients=${ingredients}`,
        this.headerOptions,
      );
      return response.data;
      // return new Promise((res, rej) => {
      //   res(MULTIPLE as any);
      // });
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }

  async getRecipeById(id: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/recipes/${id}/information?includeNutrition=false`,
        this.headerOptions,
      );
      return response.data;
      // return new Promise((res, rej) => {
      //   res(SINGLE as any);
      // });
    } catch (error) {
      console.error(`Error fetching recipe with id ${id}:`, error);
      throw error;
    }
  }
}

const RecipeService = new Recipe();
export default RecipeService;

// DUMMY DATA
const SINGLE = {
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: false,
  veryHealthy: false,
  cheap: false,
  veryPopular: true,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 11,
  gaps: 'no',
  preparationMinutes: 20,
  cookingMinutes: 20,
  aggregateLikes: 6042,
  healthScore: 10,
  creditsText: 'Jo Cooks',
  sourceName: 'Jo Cooks',
  pricePerServing: 93.63,
  extendedIngredients: [
    {
      id: 18064,
      aisle: 'Bakery/Bread',
      image: 'white-bread.jpg',
      consistency: 'SOLID',
      name: 'bread',
      nameClean: 'bread',
      original: '8 slices of your favorite bread',
      originalName: 'your favorite bread',
      amount: 8.0,
      unit: 'slices',
      meta: ['your favorite'],
      measures: {
        us: {
          amount: 8.0,
          unitShort: 'slice',
          unitLong: 'slices',
        },
        metric: {
          amount: 8.0,
          unitShort: 'slice',
          unitLong: 'slices',
        },
      },
    },
    {
      id: 5006,
      aisle: 'Meat',
      image: 'whole-chicken.jpg',
      consistency: 'SOLID',
      name: 'chicken fajitas',
      nameClean: 'whole chicken',
      original: 'chicken fajitas, click for recipe',
      originalName: 'chicken fajitas, click for recipe',
      amount: 4.0,
      unit: 'servings',
      meta: ['for recipe'],
      measures: {
        us: {
          amount: 1.92,
          unitShort: 'servings',
          unitLong: 'servings',
        },
        metric: {
          amount: 1.92,
          unitShort: 'servings',
          unitLong: 'servings',
        },
      },
    },
    {
      id: 93838,
      aisle: 'Cheese',
      image: 'taleggio-cheese.jpg',
      consistency: 'SOLID',
      name: 'thicker of havarti cheese',
      nameClean: 'havarti',
      original: '4 thicker slices of havarti cheese',
      originalName: 'thicker slices of havarti cheese',
      amount: 4.0,
      unit: '',
      meta: [],
      measures: {
        us: {
          amount: 4.0,
          unitShort: '',
          unitLong: '',
        },
        metric: {
          amount: 4.0,
          unitShort: '',
          unitLong: '',
        },
      },
    },
  ],
  id: 559886,
  title: 'Chicken Fajita Sandwiches',
  readyInMinutes: 40,
  servings: 4,
  sourceUrl:
    'http://www.jocooks.com/main-courses/poultry-main-courses/chicken-fajita-sandwiches/',
  image: 'https://spoonacular.com/recipeImages/559886-556x370.jpg',
  imageType: 'jpg',
  summary:
    'Chicken Fajita Sandwiches takes roughly <b>40 minutes</b> from beginning to end. One serving contains <b>390 calories</b>, <b>26g of protein</b>, and <b>19g of fat</b>. This recipe serves 4 and costs 94 cents per serving. This recipe from Jo Cooks has 6042 fans. It is a <b>very reasonably priced</b> recipe for fans of Mexican food. Head to the store and pick up bread, chicken fajitas, thicker of havarti cheese, and a few other things to make it today. It works well as a main course. All things considered, we decided this recipe <b>deserves a spoonacular score of 82%</b>. This score is amazing. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/chicken-fajita-sandwiches-with-guacamole-and-bacon-575837">Chicken Fajita Sandwiches with Guacamole and Bacon</a>, <a href="https://spoonacular.com/recipes/slow-cooker-fajita-pulled-pork-sandwiches-with-avocado-onion-slaw-1198857">Slow-Cooker Fajita Pulled Pork Sandwiches with Avocado-Onion Slaw</a>, and <a href="https://spoonacular.com/recipes/slow-cooker-fajita-pulled-pork-sandwiches-with-avocado-onion-slaw-165365">Slow-Cooker Fajita Pulled Pork Sandwiches with Avocado-Onion Slaw</a>.',
  cuisines: ['Mexican'],
  dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
  diets: [],
  occasions: [],
  winePairing: {
    pairedWines: ['pinot noir', 'riesling', 'sparkling rose'],
    pairingText:
      'Pinot Noir, Riesling, and Sparkling rosé are great choices for Mexican. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling rosé is a safe pairing too. You could try Goldeneye Gowan Creek Vineyard Pinot Noir. Reviewers quite like it with a 4.9 out of 5 star rating and a price of about 80 dollars per bottle.',
    productMatches: [
      {
        id: 434365,
        title: 'Goldeneye Gowan Creek Vineyard Pinot Noir',
        description:
          'Made in the style preferred by our founder, Dan Duckhorn, this wine exudes richness, depth, dark fruit and structure. On the palate, it is deep and lush, with layers of wild blackberry and plum pie supported by a streak of acidity that adds definition to the flavors, while drawing the wine to a lingering finish with hints of lavender, pennyroyal, and Asian spices.',
        price: '$79.98999786376953',
        imageUrl: 'https://spoonacular.com/productImages/434365-312x231.jpg',
        averageRating: 0.9800000190734863,
        ratingCount: 6.0,
        score: 0.927368440126118,
        link: 'https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fgoldeneye-gowan-creek-vineyard-pinot-noir-2014%2F189602',
      },
    ],
  },
  instructions:
    "Heat the panini maker. If you don't have a panini maker, you could use a pan with a little bit of butter and brown the sandwich on each side.Lay out 4 slices of the bread on your work surface. Divide the fajita mixture in 4 and top each slice with the chicken fajita mixture. Place a slice of cheese on top of the chicken fajitas then finally the other slice of bread.Place the sandwich in the panini maker and grill for about 3 or 4 minutes, or until cheese has melted and you have grill marks.Serve with salsa or sour cream if preferred.",
  analyzedInstructions: [
    {
      name: '',
      steps: [
        {
          number: 1,
          step: "Heat the panini maker. If you don't have a panini maker, you could use a pan with a little bit of butter and brown the sandwich on each side.",
          ingredients: [
            {
              id: 1001,
              name: 'butter',
              localizedName: 'butter',
              image: 'butter-sliced.jpg',
            },
          ],
          equipment: [
            {
              id: 415613,
              name: 'panini press',
              localizedName: 'panini press',
              image: 'panini-maker.jpg',
            },
            {
              id: 404645,
              name: 'frying pan',
              localizedName: 'frying pan',
              image: 'pan.png',
            },
          ],
        },
        {
          number: 2,
          step: 'Lay out 4 slices of the bread on your work surface. Divide the fajita mixture in 4 and top each slice with the chicken fajita mixture.',
          ingredients: [
            {
              id: 0,
              name: 'chicken',
              localizedName: 'chicken',
              image: 'whole-chicken.jpg',
            },
            {
              id: 18064,
              name: 'bread',
              localizedName: 'bread',
              image: 'white-bread.jpg',
            },
          ],
          equipment: [],
        },
        {
          number: 3,
          step: 'Place a slice of cheese on top of the chicken fajitas then finally the other slice of bread.',
          ingredients: [
            {
              id: 0,
              name: 'chicken',
              localizedName: 'chicken',
              image: 'whole-chicken.jpg',
            },
            {
              id: 1041009,
              name: 'cheese',
              localizedName: 'cheese',
              image: 'cheddar-cheese.png',
            },
            {
              id: 18064,
              name: 'bread',
              localizedName: 'bread',
              image: 'white-bread.jpg',
            },
          ],
          equipment: [],
        },
        {
          number: 4,
          step: 'Place the sandwich in the panini maker and grill for about 3 or 4 minutes, or until cheese has melted and you have grill marks.',
          ingredients: [
            {
              id: 1041009,
              name: 'cheese',
              localizedName: 'cheese',
              image: 'cheddar-cheese.png',
            },
          ],
          equipment: [
            {
              id: 415613,
              name: 'panini press',
              localizedName: 'panini press',
              image: 'panini-maker.jpg',
            },
            {
              id: 404706,
              name: 'grill',
              localizedName: 'grill',
              image: 'grill.jpg',
            },
          ],
          length: {
            number: 4,
            unit: 'minutes',
          },
        },
        {
          number: 5,
          step: 'Serve with salsa or sour cream if preferred.',
          ingredients: [
            {
              id: 1056,
              name: 'sour cream',
              localizedName: 'sour cream',
              image: 'sour-cream.jpg',
            },
            {
              id: 6164,
              name: 'salsa',
              localizedName: 'salsa',
              image: 'salsa.png',
            },
          ],
          equipment: [],
        },
      ],
    },
  ],
  originalId: null,
  spoonacularScore: 81.86246490478516,
};
const MULTIPLE = [
  {
    id: 835677,
    title: 'Christmas Tree Fruit and Cheese Platter',
    image: 'https://spoonacular.com/recipeImages/835677-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 1001025,
        amount: 2.0,
        unit: 'pounds',
        unitLong: 'pounds',
        unitShort: 'lb',
        aisle: 'Cheese',
        name: 'cheddar and/or monterey jack cheese',
        original:
          '2 pounds of cheddar and/or Monterey Jack cheese, cut into bit sized cubes',
        originalName:
          'cheddar and/or Monterey Jack cheese, cut into bit sized cubes',
        meta: ['cut into bit sized cubes'],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/shredded-cheese-white.jpg',
      },
      {
        id: 1012049,
        amount: 1.0,
        unit: 'Sprigs',
        unitLong: 'Sprig',
        unitShort: 'Sprigs',
        aisle: 'Produce',
        name: 'thyme',
        original: 'Sprigs of fresh thyme',
        originalName: 'fresh thyme',
        meta: ['fresh'],
        extendedName: 'fresh thyme',
        image: 'https://spoonacular.com/cdn/ingredients_100x100/thyme.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 1019132,
        amount: 2.0,
        unit: 'large bunches',
        unitLong: 'large bunches',
        unitShort: 'large bunches',
        aisle: 'Produce',
        name: 'grapes',
        original: '2 large bunches of red and green grapes',
        originalName: 'red and green grapes',
        meta: ['green', 'red'],
        extendedName: 'red green grapes',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/white-grapes.jpg',
      },
    ],
    unusedIngredients: [],
    likes: 51,
  },
  {
    id: 122919,
    title: 'Sweet Tart Shots',
    image: 'https://spoonacular.com/recipeImages/122919-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 9200,
        amount: 1.0,
        unit: 'ounce',
        unitLong: 'ounce',
        unitShort: 'oz',
        aisle: 'Produce',
        name: 'orange soda',
        original: '1 ounce orange soda',
        originalName: 'orange soda',
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/orange.png',
      },
      {
        id: 14051,
        amount: 1.0,
        unit: 'ounce',
        unitLong: 'ounce',
        unitShort: 'oz',
        aisle: 'Alcoholic Beverages',
        name: 'vodka',
        original: '1 ounce vodka',
        originalName: 'vodka',
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/vodka.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 9132,
        amount: 1.0,
        unit: 'ounce',
        unitLong: 'ounce',
        unitShort: 'oz',
        aisle: 'Produce',
        name: 'grape soda',
        original: '1 ounce grape soda, or',
        originalName: 'grape soda, or',
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/red-grapes.jpg',
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 122934,
    title: 'Bette Davis Eyes Appetizers',
    image: 'https://spoonacular.com/recipeImages/122934-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 1159,
        amount: 4.0,
        unit: 'ounces',
        unitLong: 'ounces',
        unitShort: 'oz',
        aisle: 'Cheese',
        name: 'goat cheese',
        original: '4 ounces goat cheese',
        originalName: 'goat cheese',
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/goat-cheese.jpg',
      },
      {
        id: 12151,
        amount: 0.5,
        unit: 'cup',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Nuts',
        name: 'pistachios',
        original: '1/2 cup pistachios, ground',
        originalName: 'pistachios, ground',
        meta: [],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/pistachios.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 9132,
        amount: 25.0,
        unit: '',
        unitLong: '',
        unitShort: '',
        aisle: 'Produce',
        name: 'grapes',
        original: '25 seedless grapes',
        originalName: 'seedless grapes',
        meta: ['seedless'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/red-grapes.jpg',
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 122953,
    title: 'Strawberry and Grape Salad',
    image: 'https://spoonacular.com/recipeImages/122953-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 98897,
        amount: 250.0,
        unit: 'g',
        unitLong: 'grams',
        unitShort: 'g',
        aisle: 'Dried Fruits',
        name: 'strawberries',
        original:
          '250 g strawberries, washed, dried, hulled and cut into quarters',
        originalName:
          'strawberries, washed, dried, hulled and cut into quarters',
        meta: ['dried', 'washed', 'hulled', 'cut into quarters'],
        extendedName: 'dried strawberries',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/freeze-dried-strawberries.jpg',
      },
      {
        id: 9231,
        amount: 100.0,
        unit: 'ml',
        unitLong: 'milliliters',
        unitShort: 'ml',
        aisle: 'Produce',
        name: 'passion fruit and strawberry salad dressing',
        original: '100 ml passion fruit and strawberry salad dressing',
        originalName: 'passion fruit and strawberry salad dressing',
        meta: [],
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/passion-fruit.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 1029132,
        amount: 250.0,
        unit: 'g',
        unitLong: 'grams',
        unitShort: 'g',
        aisle: 'Produce',
        name: 'grapes',
        original: '250 g green seedless grapes, washed, dried',
        originalName: 'green seedless grapes, washed, dried',
        meta: ['dried', 'green', 'seedless', 'washed'],
        extendedName: 'green dried grapes',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/white-grapes.jpg',
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
  {
    id: 409732,
    title: 'Sparkling White Grape Juice',
    image: 'https://spoonacular.com/recipeImages/409732-312x231.jpg',
    imageType: 'jpg',
    usedIngredientCount: 1,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 14144,
        amount: 4.6666665,
        unit: 'cups',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Beverages',
        name: 'lemon-lime soda',
        original: '4-2/3 cups chilled lemon-lime soda',
        originalName: 'chilled lemon-lime soda',
        meta: ['chilled'],
        image: 'https://spoonacular.com/cdn/ingredients_100x100/soda-can.jpg',
      },
      {
        id: 1009135,
        amount: 2.3333333,
        unit: 'cups',
        unitLong: 'cups',
        unitShort: 'cup',
        aisle: 'Beverages',
        name: 'grape juice',
        original: '2-1/3 cups white grape juice, chilled',
        originalName: 'white grape juice, chilled',
        meta: ['white', 'chilled'],
        extendedName: 'white grape juice',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/white-grape-juice.jpg',
      },
    ],
    usedIngredients: [
      {
        id: 1019132,
        amount: 7.0,
        unit: 'servings',
        unitLong: 'servings',
        unitShort: 'servings',
        aisle: 'Produce',
        name: 'grapes',
        original: 'Green grapes',
        originalName: 'Green grapes',
        meta: ['green'],
        extendedName: 'green grapes',
        image:
          'https://spoonacular.com/cdn/ingredients_100x100/white-grapes.jpg',
      },
    ],
    unusedIngredients: [],
    likes: 0,
  },
];
