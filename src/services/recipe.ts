import axios, { AxiosRequestConfig } from 'axios';

class Recipe {
  private baseUrl: string;

  private headerOptions: AxiosRequestConfig = {
    headers: {
      'X-RapidAPI-Key': 'e71d3b2ee3mshd39135915c832ddp11eddajsn068acecd0b03',
      // Add other headers if needed
    },
  };

  constructor() {
    this.baseUrl =
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
  }

  async getRecipes(ingredients: string): Promise<any[]> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/recipes/findByIngredients?ignorePantry=true&number=8&ranking=1&ingredients=${ingredients}`,
        this.headerOptions,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }

  async getRecipeById(id: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.baseUrl}/recipes/${id}`,
        this.headerOptions,
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching recipe with id ${id}:`, error);
      throw error;
    }
  }
}

const RecipeService = new Recipe();
export default RecipeService;
