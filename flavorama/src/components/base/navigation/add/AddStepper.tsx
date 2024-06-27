import {FC, useState} from 'react';
import {
  Button,
  Stepper,
  Group
} from '@mantine/core';
import type {FileWithPath} from '@mantine/dropzone';
import {
  IconArrowBack,
  IconArrowForward
} from '@tabler/icons-react';
import {postRecipes} from '@/server/Recipes';
import useStoreRecipe from '@/store/recipe';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

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

  // const handleSubmit = () => {
  //   // Use base64String for your API request
  //   const apiPayload = {
  //     image: base64String,
  //     // other fields
  //   };

  //   // Make your API call here
  //   fetch('/your-api-endpoint', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(apiPayload)
  //   }).then(response => {
  //     // Handle response
  //   }).catch(error => {
  //     // Handle error
  //   });
  // };

  const onSearch = () => {
    const paramBuilder = {
      name: name,
      ingredients: ingredients,
      cuisineId: cuisines,
      dietId: diets,
      difficultyId: difficulties,
      image: base64String
    };
    // if (value !== '') {
      postRecipes(
        paramBuilder.name,
        paramBuilder.ingredients,
        paramBuilder.cuisineId,
        paramBuilder.dietId,
        paramBuilder.difficultyId,
        paramBuilder.image
      )
      .then((data) => {
        recipeStore.updateLoading(true);
        recipeStore.updateRecipe(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => recipeStore.updateLoading(false));
    // }
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
          Completed, click back button to get to previous step
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
    </>
  );
};

export default AddStepper;
