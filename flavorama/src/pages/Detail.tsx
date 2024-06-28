import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Title} from '@mantine/core';
import {getRecipe, getRecipeComments} from '@/server/Recipes';
import type {Recipe} from '@/types/decoders/recipes';
import type {Comments} from '@/types/decoders/recipes';
import Default from '@/layouts/Default';
import RecipeInfo from '@/components/detail/Recipe';

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loadingRecipe, setLoadingRecipe] = useState(false);
  const [comments, setComments] = useState< Comments | null>(null);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    if (id) {
      getRecipe(id)
      .then((data) => {
        setRecipe(data)
        setLoadingRecipe(true)
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => setLoadingRecipe(false));

    getRecipeComments(id)
      .then((data) => {
        setComments(data);
        setLoadingComments(true)
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => setLoadingComments(false));
    }
  }, []);

  useEffect(() => {
    console.log('recipe: ', recipe)
  }, [recipe]);

  useEffect(() => {
    console.log('comments: ', comments)
  }, [comments]);

  return (
    <Default 
      navDisable
      mainSlot={
        <RecipeInfo 
          data={recipe} 
          loading={loadingRecipe} 
          cData={comments}
          cLoading={loadingComments}
        />
      } 
    />
  )
};

export default Detail;
