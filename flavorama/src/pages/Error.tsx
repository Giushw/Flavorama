import {FC} from 'react';
import {
  Grid,
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

const Error: FC = () => {
  return (
    <Grid 
      justify='center'
      align='center'
      p={50}
      w={'100vw'}
      h={'100vh'}
      bg={'night.1'}
      styles={{
        inner: {
          width: '100%',
          height: '100%'
        }
      }}
    >
      <Grid.Col span={{ base: 12, md: 5 }} w={'100%'} h={'100%'}>
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
      </Grid.Col>
      
      <Grid.Col span={{ base: 12, md: 7 }} w={'100%'} h={'100%'}>
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

              <Link to="/">
                <Button variant="filled" size='xl' autoContrast>Go Back</Button>
              </Link>
          </Stack>
        </Center>     
      </Grid.Col>
    </Grid>
  )
};

export default Error;