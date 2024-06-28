import {FC, useEffect} from 'react';
import {getRecipes} from '@/server/Recipes';
import useStoreRecipe from '@/store/recipe';
import Default from '@/layouts/Default';
import CardList from '@/components/search/CardList';

const Search: FC = () => {
  const recipeStore = useStoreRecipe();  

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
  }, []);

  return (
    <Default mainSlot={
      <CardList data={recipeStore.recipes} loading={recipeStore.loading} />
    } />
  )
};

export default Search;

