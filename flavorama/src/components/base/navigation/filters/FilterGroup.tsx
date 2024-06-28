import {FC} from 'react';
import {
  Accordion,
  rem,
  SimpleGrid,
  ScrollArea,
  Stack,
  Button
} from '@mantine/core';
import {
  IconFlag,
  IconApple,
  IconHourglassEmpty,
  IconTrash
} from '@tabler/icons-react';
import useStoreCuisine from '@/store/cuisine';
import useStoreDiet from '@/store/diet';
import useStoreDifficulty from '@/store/difficulty';
import FilterBtn from './FilterBtn';

interface FilterGroupProps {
  filterHandler: (type: 'cui' | 'die' | 'dif', id: string) => void;
  cleanHandler: () => void;
};

const FilterGroup: FC<FilterGroupProps> = ({
  filterHandler, 
  cleanHandler
}) => {
  const cuisineStore = useStoreCuisine();
  const dietStore = useStoreDiet();
  const difficultyStore = useStoreDifficulty();

  return (
    <Stack bg={'jet.1'} px={15} py={20} style={{borderRadius: 25}}>
      <Accordion variant="contained" radius={25}>
        <Accordion.Item value="cuisine" bg={'night.1'}>
          <Accordion.Control
            icon={
              <IconFlag
                style={{ color: 'var(--mantine-color-hunyadi-3', width: rem(20), height: rem(20) }}
              />
            }
          >
            Cuisine Type
          </Accordion.Control>

          <Accordion.Panel>
            <ScrollArea h={250}>
              <SimpleGrid cols={2} mt="md">
                {cuisineStore.cuisines?.map( (c) =>
                  <FilterBtn
                    key={`cuc-${c.id}`}
                    type='cuisine'
                    label={c.name}
                    id={c.id}
                    clickHandler={() => filterHandler('cui', c.id)}
                  />
                )}
              </SimpleGrid>
            </ScrollArea>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="diet" bg={'night.1'}>
          <Accordion.Control
            icon={
              <IconApple
                style={{ color: 'var(--mantine-color-hunyadi-3', width: rem(20), height: rem(20) }}
              />
            }
          >
            Diet Preferences
          </Accordion.Control>
          <Accordion.Panel>
            <ScrollArea h={250}>
              <SimpleGrid cols={2} mt="md">
                {dietStore.diets?.map( (c) =>
                  <FilterBtn
                    key={`die-${c.id}`}
                    type='diet'
                    label={c.name}
                    id={c.id}
                    clickHandler={() => filterHandler('die', c.id)}
                  />
                )}
              </SimpleGrid>
            </ScrollArea>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="difficulty" bg={'night.1'}>
          <Accordion.Control
            icon={
              <IconHourglassEmpty
                style={{ color: 'var(--mantine-color-hunyadi-3)', width: rem(20), height: rem(20) }}
              />
            }
          >
            Difficulty Settings
          </Accordion.Control>
          <Accordion.Panel>
            <ScrollArea h={250}>
              <SimpleGrid cols={2} mt="md">
                {difficultyStore.difficulties?.map( (c) =>
                  <FilterBtn 
                    key={`dif-${c.id}`}
                    type='difficulty'
                    label={c.name} id={c.id} 
                    clickHandler={() => filterHandler('dif', c.id)}
                  />
                )}
              </SimpleGrid>
            </ScrollArea>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Button 
        fullWidth
        radius={'md'}
        autoContrast 
        color={'smoke.1'}
        leftSection={<IconTrash size={16} />}
        onClick={cleanHandler}
      >
        Clean
      </Button>
    </Stack>
  );
};

export default FilterGroup;
