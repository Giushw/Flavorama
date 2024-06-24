import {FC, useState, useEffect} from 'react';
// import {Link} from "react-router-dom";
import type {Recipes} from '@/types/decoders/recipes';
import {getRecipes} from '@/server/Recipes';
import Default from '@/layouts/Default';
import CardList from '@/components/search/CardList';
// import {getCuisines} from '@/server/Cuisines';
// import {getDiets} from '@/server/Diets';
// import {getDifficulties} from '@/server/Difficulties';

const Search: FC = () => {
  const [recipes, setRecipes] = useState<Recipes|null>(null);
  // const [commets, setComments] = useState<unknown|null>(null);
  // const [cuisines, setCuisines] = useState<unknown|null>(null);
  // const [diets, setDiets] = useState<unknown|null>(null);
  // const [difficulties, setDifficulties] = useState<unknown|null>(null);

  const stringList = [
    'foo', 'bar', 'baz', 'foz', 'boo'
  ]
  // Test Call
  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      });

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
  }, []);

  useEffect(()=>{
    console.log('Recipe data: ', recipes)
  }, [recipes]);

  return (
    // <Grid 
    //   justify='center'
    //   align='center'
    //   p={50}
    //   w={'100vw'}
    //   h={'100vh'}
    //   bg={'night.1'}
    //   styles={{
    //     inner: {
    //       width: '100%',
    //       height: '100%'
    //     }
    //   }}
    // >
    //   <Grid.Col span={{ base: 12, md: 7 }} w={'100%'} h={'100%'}>
    //     <Center p="md" w={'100%'} h={'100%'}>
    //       <Stack
    //         align="center"
    //         justify="center"
    //         gap="md"
    //       >
    //           <Title order={1} size='6rem' mb={24} c={'hunyadi.3'}>Craving Something New?</Title>

    //           <Container size='md' mb={30}>
    //             <Text size='xl' mb={10}>
    //               Escape the ordinary and embark on a culinary adventure with...
    //             </Text>

    //             <Group mb={16}>
    //               <Image h={50} w={50} src="/assets/Logo.svg"  fit="contain"/>
    //               <Title order={2} size='2rem'  c={'hunyadi.3'}>Flavorama</Title>
    //             </Group>

    //             <Text size='xl'>
    //               Discover a world of delicious recipes, all waiting to be explored.
    //               A vast recipe library is at your fingertips. 
    //               Search by ingredient, cuisine, or dietary preference. 
    //               Find exactly what you're craving today!
    //             </Text>
    //           </Container>

    //           <Link to="/search">
    //             <Button variant="filled" size='xl' autoContrast>Explore Flavors Now</Button>
    //           </Link>
    //       </Stack>
    //     </Center>     
    //   </Grid.Col>

    //   <Grid.Col span={{ base: 12, md: 5 }} w={'100%'} h={'100%'}>
    //     <Box 
    //       bg='smoke.1' 
    //       w={'100%'} 
    //       h={'100%'}
    //       style={{
    //         borderRadius: '50px'
    //       }}
    //     >
    //       <BackgroundImage
    //         src="/image/spl_wllp.jpg"
    //         w={'100%'} 
    //         h={'100%'}
    //         radius={'50px'}
    //       >
    //       </BackgroundImage>
    //     </Box>
    //   </Grid.Col>
    // </Grid>
    <Default mainSlot={<CardList data={stringList}/>} />
  )
};

export default Search;

