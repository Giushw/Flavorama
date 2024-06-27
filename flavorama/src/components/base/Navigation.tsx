import {FC, useState} from 'react';
import {
  Stack,
  Divider,
  Text
} from '@mantine/core';
import useStoreRecipe from '@/store/recipe';
import {
  getRecipes,
  getRecipesByCuisine,
  getRecipesByDiet,
  getRecipesByDifficulty
} from '@/server/Recipes';
import SearchGroup from './navigation/SearchGroup';
import FilterGroup from './navigation/FilterGroup';
import AddGroup from './navigation/AddGroup';

const Navigation: FC = () => {  
  const recipeStore = useStoreRecipe();
  const [value, setValue] = useState('');

  const resetCall = () => {
    getRecipes()
      .then((data) => {
        recipeStore.updateLoading(true);
        recipeStore.updateRecipe(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => recipeStore.updateLoading(false));
  };

  const onClean = () => {
    resetCall();
  }
;
  const onCancel = () => {
    if (value !== '') {
      setValue('');

      resetCall();
    };
  };

  const onSearch = () => {
    if (value !== '') {
      getRecipes(value)
      .then((data) => {
        recipeStore.updateLoading(true);
        recipeStore.updateRecipe(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => recipeStore.updateLoading(false));
    }
  };

  const onFilter = (type: 'cui' | 'die' | 'dif', id: string) => {
    if (type === 'cui') {

      getRecipesByCuisine(id)
      .then((data) => {
        recipeStore.updateLoading(true);
        recipeStore.updateRecipe(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => recipeStore.updateLoading(false));

    } else if (type === 'die') {

      getRecipesByDiet(id)
      .then((data) => {
        recipeStore.updateLoading(true);
        recipeStore.updateRecipe(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => recipeStore.updateLoading(false));

    } else {

      getRecipesByDifficulty(id)
      .then((data) => {
        recipeStore.updateLoading(true);
        recipeStore.updateRecipe(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => recipeStore.updateLoading(false));
    };
  };

  return (
    <Stack>
      <Divider 
        my="md"
        labelPosition="center"
        label={
          <Text size='sm' c={'smoke.1'}> New Search</Text>
        }
      />

      <SearchGroup 
        model={value}
        changeHandler={setValue} 
        cancelHandler={onCancel} 
        searchHandler={onSearch}
      />

      <Divider 
        my="md"
        labelPosition="center"
        label={
          <Text size='sm' c={'smoke.1'}>Quick Searches</Text>
        }
      />

      <FilterGroup 
        filterHandler={onFilter}
        cleanHandler={onClean}
      />

      <Divider 
        my="md"
        labelPosition="center"
        label={
          <Text size='sm' c={'smoke.1'}>Add a Recipe</Text>
        }
      />

      <AddGroup />
    </Stack>
  )
};

export default Navigation;
