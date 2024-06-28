import {FC, ReactNode} from 'react';
import {Grid} from '@mantine/core';
import type {WiewportObj} from '@/types/commons';

interface SplashProps {
  lSize: number | WiewportObj,
  lSlot: ReactNode,
  rSize: number | WiewportObj,
  rSlot: ReactNode
};

const Splash: FC<SplashProps> = ({lSize, rSize, lSlot, rSlot}) => (
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
    <Grid.Col 
      w={'100%'}
      h={'100%'}
      span={
        typeof lSize === 'number' ?
          {lSize} :
          {...lSize}
      }
    >
      {lSlot}     
    </Grid.Col>

    <Grid.Col 
      w={'100%'}
      h={'100%'}
      span={
        typeof rSize === 'number' ?
          {rSize} :
          {...rSize}
      }
    >
      {rSlot}
    </Grid.Col>
  </Grid>
);

export default Splash;
