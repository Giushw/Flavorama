export interface Recipe {
  id: string,
  name: string,
  ingredients: string[];
  instructions: string,
  cuisineId: string,
  dietId: string,
  difficultyId: string,
  image: string
};

export type Recipes = Recipe[];

export interface Comment {
  id: string,
  recipeId: string,
  comment: string,
  rating: number 
  date: string
};

export type Comments = Comment[] ;
