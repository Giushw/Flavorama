import {
  FC,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import {
  Stack,
  Group,
  TextInput,
  Button,
  Divider,
  Text,
  Accordion,
  rem,
  SimpleGrid
} from '@mantine/core';
import {
  IconSearch,
  IconArrowBackUp,
  IconFlag,
  IconApple,
  IconHourglassEmpty
} from '@tabler/icons-react';

interface NavigationProps {
  mHandle?: () => void;
  dHandle?: () => void;
};

const Navigation: FC<NavigationProps> = ({mHandle, dHandle}) => {  
  const [value, setValue] = useState('');

  return (
    <Stack>
      <SearchGroup cHandler={setValue}/>

      <Divider 
        my="md"
        labelPosition="center"
        label={
          <Text size='sm' c={'smoke.1'}>Filters</Text>
        }
      />

      <FilterGroup />

      <Divider 
        my="md"
        labelPosition="center"
        label={
          <Text size='sm' c={'smoke.1'}>Add One</Text>
        }
      />
    </Stack>
  )
};

export default Navigation;

interface SearchGroupProps {
  cHandler: Dispatch<SetStateAction<string>>;
};

const SearchGroup: FC<SearchGroupProps> = ({cHandler}) => {
  return (
    <Stack bg={'jet.1'} style={{borderRadius: 25}} px={15} py={25}>
      <Text size='lg' c={'smoke.1'} >Search a recipe</Text>

      <TextInput
        size="md"
        radius="lg"
        mb="sm"
        placeholder="If you stare into the abyss, the abyss stares back at you."
        onChange={(event) => cHandler(event.currentTarget.value)}
      />

      <Group justify="center">
        <Button leftSection={<IconArrowBackUp size={16} />} bg={'smoke.1'} autoContrast radius={'md'}>
          Cancel
        </Button>

        <Button rightSection={<IconSearch size={16} />} autoContrast radius={'md'}>
          Search
        </Button>
      </Group>
    </Stack>
  );
};

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