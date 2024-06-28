import {
  FC,
  type Dispatch,
  type SetStateAction,
} from 'react';
import {
  Stack,
  Group,
  Button,
  Textarea
} from '@mantine/core';
import {IconSearch, IconTrash} from '@tabler/icons-react';

interface SearchGroupProps {
  model: string,
  changeHandler: Dispatch<SetStateAction<string>>;
  cancelHandler: () => void,
  searchHandler: () => void
};

const SearchGroup: FC<SearchGroupProps> = ({model, changeHandler, cancelHandler, searchHandler}) => (
  <Stack bg={'jet.1'} style={{borderRadius: 25}} px={15} py={25}>
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
        color={'smoke.1'}
        leftSection={<IconTrash size={16} />}
        onClick={cancelHandler}
      >
        Cancel
      </Button>

      <Button 
        radius={'md'}
        autoContrast
        leftSection={<IconSearch size={16} />}
        onClick={searchHandler}
      >
        Search
      </Button>
    </Group>
  </Stack>
);

export default SearchGroup;
