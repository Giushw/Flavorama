import {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {
  Grid,
  Stack,
  Title,
  Text,
  Mark,
  Skeleton,
  Pagination,
} from '@mantine/core';
import type {Recipes} from '@/types/decoders/recipes';
import CardEntity from './CardEntity';

interface CardListProps {
  data: Recipes | null,
  loading: boolean
};

const CardList: FC<CardListProps> = ({data, loading}) => (
  <Stack gap="lg">
    <Stack gap="xs" mb={16}>
      {(!loading && data) &&
        <Text size='xl' c={'smoke.1'}>
          Result found <Mark px={5} ml={5} bg={'hunyadi.3'}>{data.length}</Mark>
        </Text>
      }

      {(!loading && data && data.length > 0) &&
        <Title order={3} size='2rem' c={'smoke.1'}>
          Take a look at these recipes:
        </Title>
      }
    </Stack>

    {(loading || !data) &&
      <GridSkeleton />
    }

    {
      (!loading && data && data.length === 0) &&
      <GridEmpty />
    }

    {
      (!loading && data && data.length > 0) &&
      <GridElements list={data} />
    }
  </Stack>
);

export default CardList;

const GridSkeleton: FC = () => (
  <Grid>
    <Grid.Col span={{ base: 12, xs: 4 }}>
      <Skeleton height={160} radius="md" />
    </Grid.Col>
    <Grid.Col span={{ base: 12, xs: 8 }}>
      <Skeleton height={160} radius="md" />
    </Grid.Col>
    <Grid.Col span={{ base: 12, xs: 8 }}>
      <Skeleton height={160} radius="md" />
    </Grid.Col>
    <Grid.Col span={{ base: 12, xs: 4 }}>
      <Skeleton height={160} radius="md" />
    </Grid.Col>
    <Grid.Col span={{ base: 12, xs: 3 }}>
      <Skeleton height={160} radius="md" />
    </Grid.Col>
    <Grid.Col span={{ base: 12, xs: 3 }}>
      <Skeleton height={160} radius="md" />
      </Grid.Col>
    <Grid.Col span={{ base: 12, xs: 6 }}>
      <Skeleton height={160} radius="md" />
    </Grid.Col>
  </Grid>
);

const GridEmpty: FC = () => (
  <Stack align='center' justify='center' h={600}>
    <Title>When you stare for a long time into an abyss, the abyss stares back into you.</Title>

    <Text c="dimmed" size="lg" ta="center" >
      Unfortunately, no recipe where found. You may have mistyped, or you are delving into the unknown.
      Try another search!
    </Text>
  </Stack>
);

interface GridElementsProps {
  list: Recipes
};

const GridElements: FC<GridElementsProps> = ({list}) => {
  const [activePage, setPage] = useState(1);

  const paginateList = (list: Recipes, size: number): Recipes[] => {
    if (!list.length) {
      return [];
    };

    const head = list.slice(0, size);
    const tail = list.slice(size);
    return [head, ...paginateList(tail, size)];
  };

  const paginatedList = paginateList(list, 6);
  const pageToShow = Math.ceil(list.length / 6);

  return (
    <Stack gap="md" align='center'>
      <Grid gutter={{base: 0, md: 'md', lg: 'xl'}} w={'100%'}>
        {paginatedList[activePage - 1].map(item => (
          <Grid.Col 
            span={{ base: 12, md: 6, lg: 4 }}
            key={item.id}
          >
            <Link to={`/recipe/${item.id}`} style={{textDecoration: 'none'}}>
              <CardEntity data={item}/>
            </Link>
          </Grid.Col>
        ))}
      </Grid>

    <Pagination 
      autoContrast
      mt="sm" 
      withControls={pageToShow >= 5 ? true : false} 
      withEdges= {pageToShow >= 10 ? true : false} 
      siblings={1}
      boundaries={1}
      total={pageToShow} 
      value={activePage} 
      onChange={setPage} 
    />
  </Stack>
  );
};
