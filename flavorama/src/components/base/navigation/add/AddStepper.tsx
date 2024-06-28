import {FC, useState} from 'react';
import {
  Button,
  Stepper,
  Group,
  Dialog,
  Alert
} from '@mantine/core';
import type {FileWithPath} from '@mantine/dropzone';
import {useDisclosure} from '@mantine/hooks';
import {
  IconArrowBack,
  IconArrowForward,
  IconInfoCircle
} from '@tabler/icons-react';
import {postRecipes} from '@/server/Recipes';
import useStoreRecipe from '@/store/recipe';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FinalStep from './FinalStep';
import {AxiosError} from 'axios';

const AddStepper: FC = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const recipeStore = useStoreRecipe();

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');
  const [cuisines, setCuisines] = useState('');
  const [diets, setDiets] = useState('');
  const [difficulties, setDifficulties] = useState('');
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [base64String, setBase64String] = useState<string>('');

  const [opened, { open, close }] = useDisclosure(false);

  interface Alert {
    status: number,
    code: string,
    message: string
  };

  const [alertMsg, setAlertMsg] = useState<Alert | null>(null);

  const onSearch = () => {
    postRecipes(
      name,
      ingredients,
      cuisines,
      diets,
      difficulties,
      base64String
    )
    .then(() => {
      setAlertMsg({
        message: 'Request successed with status code 200',
        code: 'SUCCESS',
        status: 200
      })
    })
    .catch((error: AxiosError) => {
      console.error('error: ', error);
      setAlertMsg({
        code: error.code ?? 'ERROR',
        message: error.message,
        status: error.status ? error.status : 500
      })
    })
    .finally(() => open());
  };

  return (
    <>
      <Stepper 
        color={'hunyadi.4'}
        active={active}
        onStepClick={setActive}
      >
        <Stepper.Step 
          label="First step" 
          description="Insert Infos"
        >
          <FirstStep 
            name={name} 
            nameSet={setName}
            ingredients={ingredients}
            ingredientsSet={setIngredients}
            instructions={instructions}
            instructionsSet={setInstructions}
          />
        </Stepper.Step>

        <Stepper.Step
          label="Second step"
          description="Insert Tags"
        >
          <SecondStep 
            cuisines={cuisines} 
            cuisinseSet={setCuisines}
            diets={diets}
            dietsSet={setDiets}
            difficulties={difficulties}
            difficultiesSet={setDifficulties}
          />
        </Stepper.Step>

        <Stepper.Step
          label="Final step"
          description="Upload an Image"
        >
          <ThirdStep 
            files={files}
            filesSet={setFiles}
            setBase64String={setBase64String} 
          />

        </Stepper.Step>

        <Stepper.Completed>
          <FinalStep 
            name={name}
            ingredients={ingredients}
            instructions={instructions}
            cusId={cuisines}
            dieId={diets}
            difId={difficulties}
            img={base64String ?? null}
          />
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button 
          radius={'md'}
          autoContrast 
          color={'smoke.1'}
          leftSection={<IconArrowBack size={16} />}
          disabled={active === 0 ? true : false}
          onClick={prevStep}
        >
          Back
        </Button>

        {active !== 3 &&
          <Button 
            radius={'md'}
            autoContrast
            leftSection={<IconArrowForward size={16} />}
            onClick={nextStep}
          >
            Next
          </Button>
        }

        {active === 3 &&
          <Button 
            radius={'md'}
            autoContrast
            leftSection={<IconArrowForward size={16} />}
            onClick={onSearch}
          >
            Submit
          </Button>
        }
      </Group>

      {alertMsg &&
        <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="lg" bg={'night.1'} p={30}>
          <Alert 
            autoContrast
            variant="filled" 
            icon={<IconInfoCircle />}
            color={alertMsg.status >= 400 ? 'red' : 'teal'} 
            title={alertMsg.code} 
            radius={'lg'}
          >
            {alertMsg.message}
          </Alert>
        </Dialog>
      }
      
    </>
  );
};

export default AddStepper;
