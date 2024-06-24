import {FC} from 'react';
import {
  Card,
  Image,
  Title,
  Text,
  List,
  Group,
  Badge,
  Button,
  ActionIcon,
  rem
} from '@mantine/core';
import {IconFlag, IconApple, IconGauge} from '@tabler/icons-react';
import type {Recipe} from '@/types/decoders/recipes';
import BadgeId, {type DifficultiesType} from '../common/BadgeId';


const MOCK = {
  id: "1",
  name: "Spaghetti Carbonara",
  ingredients: [
    "Spaghetti",
    "Eggs",
    "Parmesan Cheese",
    "Pancetta",
    "Black Pepper"
  ],
  instructions: "Boil the spaghetti. Fry the pancetta. Mix eggs and cheese. Combine all.",
  cuisineId: "1",
  dietId: "3",
  difficultyId: "3",
  // image: "/uploads/carbonara-horizontal-square640-v2.jpg"
  image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
};

interface CardEntityProps {
  data?: Recipe
};

const CardEntity: FC<CardEntityProps> = ({data}) => {  
  const {image, name, ingredients, cuisineId, dietId, difficultyId } = MOCK;

  return (
    <Card radius="xl" p="md" >
      <Card.Section mb={5}>
        <Image src={image} alt={name}  />
      </Card.Section>

      <Card.Section mb={5} p={10}>
        <Title order={4} mb={10} c='hunyadi.3'>
          {name}
        </Title>

        <List withPadding>
          {ingredients.map( i => (
            <List.Item key={i} >{i}</List.Item>
          ))}
        </List>
      </Card.Section>

      <Card.Section p={10}>
        <Group gap={7} mt={5} justify='center'>
          {cuisineId &&
            <BadgeId type='cuisine' id={cuisineId} />
          }
          {dietId &&
            <BadgeId type='diet' id={dietId} />
          }
          {difficultyId &&
            <BadgeId type='difficulty' id={difficultyId as DifficultiesType} />
          }
        </Group>
      </Card.Section>
    </Card>
  )
};

export default CardEntity;
