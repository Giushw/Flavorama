import {useState, useEffect} from 'react';
import {Welcome} from '../components/Welcome/Welcome';
import {ColorSchemeToggle} from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {getRecipes} from '@/server/Recipes';

export function HomePage() {
  const [state, setState] = useState<unknown|null>(null);

  // Test Call
  useEffect(() => {
    getRecipes()
      .then((data) => {
        setState(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      });
  }, []);

  // useEffect(() => {
  //   console.log('monitor data: ', state);
  // }, [state]);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
