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
  rating: number // from 0 to 5
  date: string // datestring
};

export type Comments = Comment[] ;

/* Recipes
  [
    {
      "id": "1",
      "name": "Spaghetti Carbonara",
      "ingredients": [
        "Spaghetti",
        "Eggs",
        "Parmesan Cheese",
        "Pancetta",
        "Black Pepper"
      ],
      "instructions": "Boil the spaghetti. Fry the pancetta. Mix eggs and cheese. Combine all.",
      "cuisineId": "1",
      "dietId": "3",
      "difficultyId": "3",
      "image": "/uploads/carbonara-horizontal-square640-v2.jpg"
    },
    {
      "id": "2",
      "name": "Margherita Pizza",
      "ingredients": [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Basil",
        "Olive Oil"
      ],
      "instructions": "Prepare the dough. Spread tomato sauce. Add cheese and basil. Bake in the oven.",
      "cuisineId": "1",
      "dietId": "1",
      "difficultyId": "2",
      "image": "/uploads/Margherita-9920.webp"
    }
]
*/

/* Comments
[
  {
    "id": "1",
    "recipeId": "1",
    "comment": "Delicious and easy to make!",
    "rating": 5,
    "date": "2024-06-08T14:48:00.000Z"
  },
  {
    "id": "2",
    "recipeId": "1",
    "comment": "Loved it! Perfect for a quick dinner.",
    "rating": 4,
    "date": "2024-06-09T12:30:00.000Z"
  },
  {
    "id": "3",
    "recipeId": "1",
    "comment": "Great flavors, will make again.",
    "rating": 5,
    "date": "2024-06-10T09:45:00.000Z"
  }
]
*/