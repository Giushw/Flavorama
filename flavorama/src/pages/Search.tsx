import {FC, useState, useEffect} from 'react';
import {getRecipes} from '@/server/Recipes';
import useStoreRecipe from '@/store/recipe';
import useStoreCuisine from '@/store/cuisine';
import useStoreDiet from '@/store/diet';
import useStoreDifficulty from '@/store/difficulty';
import {getCuisines} from '@/server/Cuisines';
import {getDifficulties} from '@/server/Difficulties';
import {getDiets} from '@/server/Diets';
import Default from '@/layouts/Default';
import CardList from '@/components/search/CardList';

const Search: FC = () => {
  const recipeStore = useStoreRecipe();  
  const cuisineStore = useStoreCuisine();
  const dietStore = useStoreDiet();
  const difficultyStore = useStoreDifficulty();

  useEffect(() => {
    getRecipes()
      .then((data) => {
        recipeStore.updateLoading(true);
        recipeStore.updateRecipe(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => recipeStore.updateLoading(false));

    // getRecipeComments('1')
    //   .then((data) => {
    //     setComments(data);
    //   })
    //   .catch((error: Error) => {
    //     console.error('error: ', error);
    //   });

    getCuisines()
      .then((data) => {
        cuisineStore.updateLoading(true);
        cuisineStore.updateCuicine(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => cuisineStore.updateLoading(false));

    getDiets()
      .then((data) => {
        dietStore.updateLoading(true);
        dietStore.updateDiets(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => dietStore.updateLoading(false));


    getDifficulties()
      .then((data) => {
        difficultyStore.updateLoading(true);
        difficultyStore.updateDifficulties(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => difficultyStore.updateLoading(false));
  }, []);

  return (
    <Default mainSlot={<CardList data={recipeStore.recipes} loading={recipeStore.loading} />} />
  )
};

export default Search;

