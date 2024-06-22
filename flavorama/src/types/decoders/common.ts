import {Iterable} from "../commons";

// Single entity for cuisines | difficulties | diets
interface Type {
  name: string
};

// List of entities for cuisines | difficulties | diets
export type TypesList = Iterable<Type>;

/* Cuisines
[
  {"id": "1", "name": "Italian"},
  {"id": "2", "name": "American"},
  {"id": "3", "name": "Mexican"},
  {"id": "4", "name": "Indian"},
  {"id": "5", "name": "Japanese"},
  {"id": "6", "name": "Spanish"},
  {"id": "7", "name": "French"},
  {"id": "8", "name": "Greek"},
  {"id": "9", "name": "Thai"},
  {"id": "10", "name": "British"},
  {"id": "11", "name": "Russian"},
  {"id": "12", "name": "Middle Eastern"},
  {"id": "13", "name": "North African"},
  {"id": "14", "name": "Korean"}
]
 */

/* Diets
[
  {"id": "1","name": "Vegetarian"},
  {"id": "2", "name": "Mediterranean"},
  {"id": "3", "name": "Non-Vegetarian"},
  {"id": "4", "name": "Pescatarian"}
]
 */

/* Difficulties
[
  {"id": "1","name": "Easy"},
  {"id": "2", "name": "Medium"},
  {"id": "3", "name": "Hard"}
]
 */