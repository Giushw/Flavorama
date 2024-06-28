import {FC} from 'react';
import {
  Flex,
  Fieldset,
  Stack,
  Chip,
  Loader,
  SimpleGrid,
  Center
} from '@mantine/core';
import useStoreCuisine from '@/store/cuisine';
import useStoreDiet from '@/store/diet';
import useStoreDifficulty from '@/store/difficulty';

interface SecondStepProps {
  cuisines: string,
  diets: string,
  difficulties: string,
  cuisinseSet: React.Dispatch<React.SetStateAction<string>>,
  dietsSet: React.Dispatch<React.SetStateAction<string>>,
  difficultiesSet: React.Dispatch<React.SetStateAction<string>>
};

const SecondStep: FC<SecondStepProps> = ({
  cuisines,
  diets,
  difficulties,
  cuisinseSet,
  dietsSet,
  difficultiesSet
}) => {
  const cuisineStore = useStoreCuisine().cuisines;
  const dietStore = useStoreDiet().diets;
  const difficultyStore = useStoreDifficulty().difficulties;

  const diffColor = (disc: string) => {
    switch (disc) {
      case 'Easy':
        return 'teal';

      case 'Medium':
        return 'orange';

      case 'Hard':
        return 'red';
      
      default:
        return 'blue';
    }
  };

  return (
    <Fieldset legend="Recipe Tags" radius="lg" mt={20} mih={275}>
      <Flex w={'100%'} justify='space-around'>
        <Fieldset legend="Cuisine type" >
          <Center>
            {!cuisineStore &&
              <Loader color="smoke" size={40} />
            }

            {cuisineStore &&
              <Chip.Group multiple={false} value={cuisines} onChange={cuisinseSet}>
                <SimpleGrid cols={3}>
                  {
                    cuisineStore.map(c => <Chip key={c.id} value={c.id} autoContrast color="hunyadi.3">{c.name}</Chip>)
                  }
                </SimpleGrid>
              </Chip.Group>
            }
          </Center>
          
        </Fieldset>

        <Fieldset legend="Diet type">
          <Stack align='center' justify='center'>
            {!dietStore &&
              <Loader color="smoke" size={40} />
            }

            {dietStore &&
              <Chip.Group multiple={false} value={diets} onChange={dietsSet}>
                <SimpleGrid cols={1}>
                  {
                    dietStore.map(c => <Chip key={c.id} value={c.id} autoContrast color="smoke.1">{c.name}</Chip>)
                  }
                </SimpleGrid>
              </Chip.Group>
            }
          </Stack>
        </Fieldset>

        <Fieldset legend="Difficulty">
          <Center>
            {!difficultyStore &&
              <Loader color="smoke" size={40} />
            }

            {difficultyStore &&
              <Chip.Group multiple={false} value={difficulties} onChange={difficultiesSet}>
                <SimpleGrid cols={1}>
                  {
                    difficultyStore.map(c => <Chip key={c.id} value={c.id} autoContrast color={diffColor(c.name)}>{c.name}</Chip>)
                  }
                </SimpleGrid>
              </Chip.Group>
            }
          </Center>
        </Fieldset>
      </Flex>
    </Fieldset>
  );
};

export default SecondStep;
