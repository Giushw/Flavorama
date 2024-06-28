import {FC} from 'react';
import {
  Group,
  Fieldset,
  Text,
  Box,
  Container,
  Flex,
  Grid
} from '@mantine/core';

interface FinalStepProps {
  name: string,
  ingredients: string[],
  instructions: string,
  cusId: string,
  dieId: string,
  difId: string,
  img?: string
};

const FinalStep: FC<FinalStepProps> = ({
  name,
  ingredients,
  instructions,
  cusId,
  dieId,
  difId,
  img
}) => (
  <Fieldset legend="Recap information" radius="lg" mt={20} mih={275}>
    
    <Container>
      <Grid columns={2}>
        <Grid.Col span={1}>
          <Fieldset legend="Name" radius="lg" >
            <Text size='lg' c={'smoke.1'}>{name}</Text>
          </Fieldset>
        </Grid.Col>

        <Grid.Col span={1}>
          <Fieldset legend="Type" radius="lg">
            <Flex align='center' justify='space-between'>
              <Group>
                <Text>Cusine:</Text>
                <Text size='lg' c={'smoke.1'}>{cusId}</Text>
              </Group>

              <Group>
                <Text>Diet:</Text>
                <Text size='lg' c={'smoke.1'}>{dieId}</Text>
              </Group>

              <Group>
                <Text>Difficulty:</Text>
                <Text size='lg' c={'smoke.1'}>{difId}</Text>
              </Group>
            </Flex>
          </Fieldset>
        </Grid.Col>

        {img &&
          <Grid.Col span={2}>
            <Fieldset legend="Image" radius="lg" >
              <Text size='lg' c={'smoke.1'} truncate="end">{img}</Text>
            </Fieldset>
          </Grid.Col>
        }

        <Grid.Col span={1}>
          <Fieldset legend="Instruction" radius="lg">
            <Text size='lg' c={'smoke.1'}>{instructions}</Text>
          </Fieldset>
        </Grid.Col>

        <Grid.Col span={1}>
          <Fieldset legend="Ingredients" radius="lg">
            <Box>
              {ingredients.map( (item, i) => (
                <Box component='span' key={`ingr_${i}`}>
                  {i!== 0 ? <Text component='span'> - </Text> : null}
                  <Text component='span' tt="capitalize" >{item} </Text>
                </Box>
              ))}
            </Box>
          </Fieldset>
        </Grid.Col>
      </Grid>
    </Container>
  </Fieldset>
);

export default FinalStep;
