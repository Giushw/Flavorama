import {FC} from 'react';
import {
  Box,
  BackgroundImage,
  Center,
  Stack,
  Text,
  Title,
  Container,
  Button,
} from '@mantine/core';
import {Link} from "react-router-dom";
import Splash from '@/layouts/Splash';
import LogoGroup from '@/components/common/LogoGroup';

const Home: FC = () => (
  <Splash 
    lSize={{ base: 12, md: 7 }}
    lSlot={<LeftSide />}
    rSize={{ base: 12, md: 5 }}
    rSlot={<RightSide />}
  />
);

export default Home;

const LeftSide: FC = () => (
  <Center p="md" w={'100%'} h={'100%'}>
    <Stack
      align="center"
      justify="center"
      gap="md"
    >
        <Title order={1} size='6rem' mb={24} c={'hunyadi.3'}>Craving Something New?</Title>

        <Container size='md' mb={30}>
          <Text size='xl' mb={10}>
            Escape the ordinary and embark on a culinary adventure with...
          </Text>

          <LogoGroup mb={16} />

          <Text size='xl'>
            Discover a world of delicious recipes, all waiting to be explored.
            A vast recipe library is at your fingertips. 
            Search by ingredient, cuisine, or dietary preference. 
            Find exactly what you're craving today!
          </Text>
        </Container>

        <Link to="/search">
          <Button
            variant='filled'
            size='xl'
            radius={'md'}
            autoContrast
          >
            Explore Flavors Now
          </Button>
        </Link>
    </Stack>
  </Center>  
);

const RightSide: FC = () => (
  <Box 
    bg='smoke.1' 
    w={'100%'} 
    h={'100%'}
    style={{
      borderRadius: '50px'
    }}
  >
    <BackgroundImage
      src="/image/spl_wllp.jpg"
      w={'100%'} 
      h={'100%'}
      radius={'50px'}
    >
    </BackgroundImage>
  </Box>
);