import {FC} from 'react';
import {
  Group,
  TextInput,
  TagsInput,
  Textarea,
  Fieldset
} from '@mantine/core';

interface FirstStepProps {
  name: string,
  ingredients: string[],
  instructions: string,
  nameSet: React.Dispatch<React.SetStateAction<string>>,
  ingredientsSet: React.Dispatch<React.SetStateAction<string[]>>,
  instructionsSet: React.Dispatch<React.SetStateAction<string>>
};

const FirstStep: FC<FirstStepProps> = ({
  name,
  ingredients,
  instructions,
  nameSet,
  ingredientsSet,
  instructionsSet
}) => (
  <Fieldset legend="Recipe information" radius="lg" mt={20} mih={275}>
    <Group w={'100%'} justify='space-between' mb={20}>
      <TextInput
        value={name}
        data-autofocus
        w={'49%'}
        label="Name"
        description="Only letters no numbers."
        onChange={(event) => nameSet(event.currentTarget.value)}
      />

      <TagsInput
        value={ingredients} 
        w={'49%'}
        label="Ingredients"
        description="Press enter after every one."
        data={[]} 
        onChange={ingredientsSet} 
      />
    </Group>
    
    <Textarea
      value={instructions}
      autosize
      minRows={3}
      maxRows={6}
      label="Instructions"
      description="Write the steps needed."
      onChange={(event) => instructionsSet(event.currentTarget.value)}
    />
  </Fieldset>
);

export default FirstStep;
