import {FC, useState} from 'react';
import {
  Stack,
  Button,
  Modal,
  Title,
  Stepper,
  Group,
  Box
} from '@mantine/core';
import {
  IconPlus,
  IconArrowBack,
  IconArrowForward
} from '@tabler/icons-react';
// import useStoreCuisine from '@/store/cuisine';
// import useStoreDiet from '@/store/diet';
// import useStoreDifficulty from '@/store/difficulty';

interface AddGroupProps {
  filterHandler?: (type: 'cui' | 'die' | 'dif', id: string) => void;
  cleanHandler?: () => void;
};

const AddGroup: FC<AddGroupProps> = ({
  filterHandler, 
  cleanHandler
}) => {
  // const cuisineStore = useStoreCuisine();
  // const dietStore = useStoreDiet();
  // const difficultyStore = useStoreDifficulty();
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

const AddStepper: FC = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper 
        color={'hunyadi.4'}
        active={active}
        onStepClick={setActive}
      >
        <Stepper.Step 
          label="First step" 
          description="Insert Info"
        >
          Step 1 content: Create an account
        </Stepper.Step>

        <Stepper.Step
          label="Second step"
          description="Insert Type"
        >
          Step 2 content: Verify email
        </Stepper.Step>

        <Stepper.Step
          label="Final step"
          description="Upload an Image"
        >
          Step 3 content: Get full access
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button 
          radius={'md'}
          autoContrast 
          color={'smoke.1'}
          leftSection={<IconArrowBack size={16} />}
          onClick={prevStep}
        >
          Back
        </Button>

        <Button 
          radius={'md'}
          autoContrast
          leftSection={<IconArrowForward size={16} />}
          onClick={nextStep}
        >
          Next
        </Button>
      </Group>
    </>
  );
};
