import {FC, useState} from 'react';
import {
  Text,
  Accordion,
  rem,
  SimpleGrid,
  UnstyledButton,
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
    <Stack>
      <Accordion variant="contained" radius={25}>
        <Accordion.Item value="cuisine" bg={'jet.1'}>
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

        <Accordion.Item value="diet" bg={'jet.1'}>
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
                    // clickHandler={() => dietSet(c.id)}
                    clickHandler={() => filterHandler('die', c.id)}
                  />
                )}
              </SimpleGrid>
            </ScrollArea>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="difficulty" bg={'jet.1'}>
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
                    // clickHandler={() => difficultySet(c.id)}
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
        bg={'smoke.1'}
        leftSection={<IconTrash size={16} />}
        onClick={cleanHandler}
      >
        Clean
      </Button>
    </Stack>
    
  );
};

export default FilterGroup;

interface FilterBtnProps {
  type: 'cuisine' | 'diet' | 'difficulty',
  id: string,
  label: string,
  clickHandler: () => void;
};

const FilterBtn: FC<FilterBtnProps> = ({
  type, 
  label, 
  clickHandler
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <UnstyledButton 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: rem(90),
        transition: 'background-color 0.3s ease',
        backgroundColor: hovered
          ? 'var(--mantine-color-hunyadi-3)'
          : 'var(--mantine-color-smoke-1)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={clickHandler}
    >

      {type === 'cuisine' &&
        <IconFlag 
          size="2rem"
          style={{ 
            transition: 'color 0.3s ease',
            color: hovered 
              ? 'var(--mantine-color-jet-1)' 
              : 'var(--mantine-color-hunyadi-6)'
          }} 
        />
      }

      {type === 'diet' &&
        <IconApple
          size="2rem"
          style={{ 
            transition: 'color 0.3s ease',
            color: hovered 
              ? 'var(--mantine-color-jet-1)' 
              : 'var(--mantine-color-hunyadi-6)'
          }} 
        />
      }

      {type === 'difficulty' &&
        <IconHourglassEmpty 
          size="2rem"
          style={{ 
            transition: 'color 0.3s ease',
            color: hovered 
              ? 'var(--mantine-color-jet-1)' 
              : 'var(--mantine-color-hunyadi-6)'
          }} 
        />
      }

      <Text size="xs" fw={500} mt={5} c={'jet.1'} >{label}</Text>
    </UnstyledButton>
  );
};