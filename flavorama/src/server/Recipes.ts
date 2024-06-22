import type {Iterable} from '@/types/commons';
import type {Recipes, Recipe, Comments} from '@/types/decoders/recipes';
import {apiClient} from './client';

/**
 * Get Recipes
 * Get a list of recipes with optional filtering and pagination.
 * @param {number} _page - optional - The page number to retrieve.
 * @param {number} _limit - optional - The number of recipes per page.
 * @param {string} q - optional - A full text search query.
 * @param {string} cuisineId - optional - Filter recipes by cuisine id.
 * @param {string} dietId - optional - Filter recipes by diet preference id (e.g., vegetarian, gluten-free).
 * @param {string} difficultyId - optional - Filter recipes by difficulty level.
 * @param {Iterable<string>} _expand - optional - Embed relation in the data, this add difficulty, cuisine, diet object directy in the response Available values : difficulty, cuisine, diet.
 * @returns {Promise<Recipes>} A promise that resolves to a list of recipes.
 * @example 
 * const data = await getRecipes();
 */
export const getRecipes = async (
  _page?: string,
  _limit?: string,
  q?: string,
  cuisineId?: string,
  dietId?: string,
  difficultyId?: string,
  _expand?: Iterable<string>,
): Promise<Recipes> => {
  try {
    const response = await apiClient.get('/recipes', {
      params: {
        _page: _page ?? null,
        _limit: _limit ?? null,
        q: q ?? null,
        cuisineId: cuisineId ?? null,
        dietId: dietId ?? null,
        difficultyId: difficultyId ?? null,
        _expand: _expand ?? null,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

/**
 * Post Recipe
 * Post a new recipe.
 * @param {string} name - The name of the recipe.
 * @param {Iterable<string>} ingredients - The list of ingredients.
 * @param {string} cuisineId - The type of cuisine.
 * @param {string} dietId - The type of diet preference (e.g., vegetarian, gluten-free).
 * @param {string} difficultyId - The difficulty level of the recipe.
 * @param {string} [image] - An optional path to the image.
 * @returns {Promise<unknown>} A promise that resolves to the response data.
 * @example 
 * const data = await postRecipes({
 *   name: 'foo',
 *   ingredients: ['a', 'b'],
 *   cuisineId: 'bar',
 *   dietId: 'baz',
 *   difficultyId: 'faz',
 *   image: 'boo'
 * });
 */
export const postRecipes = async (
  name: string,
  ingredients: Iterable<string>,
  cuisineId: string,
  dietId: string,
  difficultyId: string,
  image?: string,
): Promise<any> => {
  try {
    const response = await axios.post('/recipes', {
      name,
      ingredients,
      cuisineId,
      dietId,
      difficultyId,
      image: image ?? null,
    });
    return response.data;
  } catch (error) {
    console.error('Error posting recipe:', error);
    throw error;
  }
};

/**
 * Get Recipe
 * Get detailed information about a specific recipe.
 * @param {number} id - The unique identifier of the recipe.
 * @param {Iterable<string>} _expand - optional - Embed relation in the data, this add difficulty, cuisine, diet object directy in the response Available values : difficulty, cuisine, diet.
 * @returns {Promise<Recipe>} A promise that resolves to a list of recipes.
 * @example 
 * const data = await getRecipes();
 */
export const getRecipe = async (
  id: string,
  _expand?: Iterable<string>,
): Promise<Recipe> => {
  try {
    const response = await apiClient.get(`/recipes/${id}`, {
      params: {
        _expand: _expand ?? null,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

/**
 * Get Recipe Comments
 * Get all comments and ratings for a specific recipe.
 * @param {number} id - The unique identifier of the recipe.
 * @param {Iterable<string>} _expand - optional - Embed relation in the data, this add difficulty, cuisine, diet object directy in the response Available values : difficulty, cuisine, diet.
 * @returns {Promise<Comments>} A promise that resolves to a list of recipes.
 * @example 
 * const data = await getRecipeComments('1');
 */
export const getRecipeComments = async (
  id: string,
  _expand?: Iterable<string>,
): Promise<Comments> => {
  try {
    const response = await apiClient.get(`/recipes/${id}/comments`, {
      params: {
        _expand: _expand ?? null,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

/**
 * Post Recipe Comment
 * Add a comment and rating to a specific recipe
 * @param {string} comment - The comment to the recipe.
 * @param {number} rating - The rate of the recipe, form 0 to 5.
 * @param {string} date - The date when the comment was wrote.
 * @returns {Promise<unknown>} A promise that resolves to the response data.
 * @example 
 * const data = await postRecipeComment({
 *   id: '1',
 *   comment: 'lorem Ipsum sine dolor it,
 *   rating: 2,
 *   date: '2024-06-22T15:47:07.653Z'
 * });
 */
export const postRecipeComment = async (
  id: string,
  comment: string,
  rating: Iterable<string>,
  date: string,
  _expand?: Iterable<string>,
): Promise<unknown> => {
  try {
    const response = await apiClient.post(`/recipes/${id}/comments`, {
      comment,
      rating,
      date
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};