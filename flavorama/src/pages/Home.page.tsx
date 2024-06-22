// import {useState, useEffect} from 'react';
import {Welcome} from '../components/Welcome/Welcome';
import {ColorSchemeToggle} from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import {getRecipeComments, getRecipes} from '@/server/Recipes';
// import {getCuisines} from '@/server/Cuisines';
// import {getDiets} from '@/server/Diets';
// import {getDifficulties} from '@/server/Difficulties';

export function HomePage() {
  // const [recipes, setRecipes] = useState<unknown|null>(null);
  // const [commets, setComments] = useState<unknown|null>(null);
  // const [cuisines, setCuisines] = useState<unknown|null>(null);
  // const [diets, setDiets] = useState<unknown|null>(null);
  // const [difficulties, setDifficulties] = useState<unknown|null>(null);

  // Test Call
  // useEffect(() => {
    // getRecipes()
    //   .then((data) => {
    //     setRecipes(data);
    //   })
    //   .catch((error: Error) => {
    //     console.error('error: ', error);
    //   });

    // getRecipeComments('1')
    //   .then((data) => {
    //     setComments(data);
    //   })
    //   .catch((error: Error) => {
    //     console.error('error: ', error);
    //   });

    // getCuisines()
    //   .then((data) => {
    //     setCuisines(data);
    //   })
    //   .catch((error: Error) => {
    //     console.error('error: ', error);
    //   });

    // getDiets()
    //   .then((data) => {
    //     setDiets(data);
    //   })
    //   .catch((error: Error) => {
    //     console.error('error: ', error);
    //   });

    // getDifficulties()
    //   .then((data) => {
    //     setDifficulties(data);
    //   })
    //   .catch((error: Error) => {
    //     console.error('error: ', error);
    //   });
  // }, []);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
