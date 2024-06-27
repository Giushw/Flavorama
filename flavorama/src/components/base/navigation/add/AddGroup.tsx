import {FC, useState} from 'react';
import {
  Stack,
  Button,
  Modal,
  Title,
  Box,
} from '@mantine/core';
import {
  IconPlus,
} from '@tabler/icons-react';
import AddStepper from './AddStepper';

interface AddGroupProps {
  filterHandler?: (type: 'cui' | 'die' | 'dif', id: string) => void;
  cleanHandler?: () => void;
};

const AddGroup: FC<AddGroupProps> = ({
  filterHandler, 
  cleanHandler
}) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        centered
        size={'70%'}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{ transition: 'fade' }}
        title={
        <Title order={4} c={'hunyadi.3'}>Add a New Recipe</Title>
      }
      > 
        <Box p={15}>
          <AddStepper />
        </Box>
      </Modal>

      <Stack bg={'jet.1'} style={{borderRadius: 25}} px={15} py={25}>
        <Button 
          fullWidth
          radius={'md'}
          autoContrast 
          leftSection={<IconPlus size={16} />}
          onClick={() => setModalOpened(true)}
        >
          Add
        </Button>
      </Stack>
    </>
  );
};

export default AddGroup;
