import {Iterable} from "../commons";

export interface Recipe {
  id: string,
  name: string,
  ingredients: Iterable<string>;
  instructions: string,
  cuisineId: string,
  dietId: string,
  difficultyId: string,
  image: string, // "/uploads/carbonara-horizontal-square640-v2.jpg" // add localh 8080
};

export type Recipes = Iterable<Recipe>;

export interface Comment {
  id: string,
  recipeId: string,
  comment: string,
  rating: number // da 0 a 5
  date: string // 2024-06-22T15:20:47.876Z
};

export type Comments = Iterable<Comment> ;
