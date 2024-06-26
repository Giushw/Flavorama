import {
  FC,
  type Dispatch,
  type SetStateAction,
} from 'react';
import {
  Stack,
  Group,
  Button,
  Text,
  Accordion,
  rem,
  SimpleGrid,
  Textarea
} from '@mantine/core';
import {
  IconSearch,
  IconTrash,
  IconFlag,
  IconApple,
  IconHourglassEmpty
} from '@tabler/icons-react';

interface SearchGroupProps {
  model: string,
  changeHandler: Dispatch<SetStateAction<string>>;
  cancelHandler: () => void;
  searchHandler: () => void;
};

const SearchGroup: FC<SearchGroupProps> = ({model, changeHandler, cancelHandler, searchHandler}) => {
  return (
    <Stack bg={'jet.1'} style={{borderRadius: 25}} px={15} py={25}>
      <Text size='lg' c={'smoke.1'} >Search a recipe</Text>

      <Textarea
        size="md"
        radius="lg"
        mb="sm"
        placeholder="What do you fancy today?"
        value={model}
        onChange={(event) => changeHandler(event.currentTarget.value)}
      />

      <Group justify="center">
        <Button 
          radius={'md'}
          autoContrast 
          bg={'smoke.1'}
          leftSection={<IconTrash size={16} />}
          onClick={cancelHandler}
        >
          Cancel
        </Button>

        <Button 
          radius={'md'}
          autoContrast
          rightSection={<IconSearch size={16} />}
          onClick={searchHandler}
        >
          Search
        </Button>
      </Group>
    </Stack>
  );
};

export default SearchGroup;


const FilterGroup: FC = () => {
  return (
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
        <SimpleGrid cols={2} mt="md">
          <Button variant='default'>
            <IconHourglassEmpty
                size="2rem"
                style={{ color: 'var(--mantine-color-hunyadi-3)' }}
              />
            <Text size="xs" mt={7}>
              item.title.1
            </Text>
          </Button>
          <Button variant='default'>
            <IconHourglassEmpty
                size="2rem"
                style={{ color: 'var(--mantine-color-hunyadi-3)' }}
              />
            <Text size="xs" mt={7}>
              item.title.2
            </Text>
          </Button>
        </SimpleGrid>
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
        <Accordion.Panel>Content</Accordion.Panel>
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
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};