import {FC} from 'react';
import {Grid, Stack, Title, Text, Mark} from '@mantine/core';
import type {Iterable} from '@/types/commons';
import CardEntity from './CardEntity';

interface CardListProps {
  data: Iterable<string>;
};

const CardList: FC<CardListProps> = ({data}) => {  
  const datalenght = data.length;
  return (
    <Stack gap="lg">
      <Stack gap="xs" mb={16}>
        <Text size='xl' c={'smoke.1'}>
          Result found <Mark px={5} ml={5}>{datalenght}</Mark>
        </Text>

        <Title order={3} size='2rem' c={'smoke.1'}>
          Take a look at these recipes:
        </Title>
      </Stack>

      <Grid grow gutter={{base: 0, md: 'md', lg: 'xl'}}>
        {data.map(d => (
          <Grid.Col 
            bg={'jet.1'} 
            span={{ base: 12, md: 6, lg: 4 }}
            key={d}
          >
            {d}
          </Grid.Col>
        ))}
          <Grid.Col 
            bg={'jet.1'} 
            span={{ base: 12, md: 6, lg: 4 }}
            
          >
            <CardEntity />
          </Grid.Col>
      </Grid>
    </Stack>
  )
};

export default CardList;
