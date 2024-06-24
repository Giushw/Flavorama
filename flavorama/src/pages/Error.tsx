import {FC} from 'react';
import {
  Box,
  BackgroundImage,
  Center,
  Stack,
  Text,
  Title,
  Container,
  Button
} from '@mantine/core';
import {Link} from "react-router-dom";
import Splash from '@/layouts/Splash';

const Error: FC = () => {
  return (
    <Splash 
      lSize={{ base: 12, md: 5 }}
      lSlot={<LeftSide />}
      rSize={{ base: 12, md: 7 }}
      rSlot={<RightSide />}
    />
  )
};

export default Error;

const LeftSide: FC = () => {
  return (
    <Box 
      bg='jet.1'
      w={'100%'} 
      h={'100%'} 
      style={{
        borderRadius: '50px'
      }}
    >
      <BackgroundImage
        src="/image/err_wllp.jpg"
        w={'100%'} 
        h={'100%'}
        radius={'50px'}
      >
      </BackgroundImage>
    </Box>
  )
};

const RightSide: FC = () => {
  return (
    <Center p="md" w={'100%'} h={'100%'}>
      <Stack
        align="center"
        justify="center"
        gap="md"
      >
          <Title order={1} size='6rem' mb={24} c={'hunyadi.3'}>404</Title>

          <Container size='md'>
            <Text size='xl' mb={30}>
              Every journey has its ups and downs, and sometimes you just take a wrong turn. 
              The page you requested couldn't be found, but don't worry, we can help you get back on track!
            </Text>
          </Container>

          <Link to='/search'>
            <Button variant="filled" size='xl' autoContrast>Go to Search</Button>
          </Link>
      </Stack>
    </Center> 
  )
};