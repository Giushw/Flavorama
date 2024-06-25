import {FC} from 'react';
import {
  Card,
  Title,
  Text,
  Group,
  BackgroundImage,
  Blockquote,
  Stack
} from '@mantine/core';
import {IconInfoCircle} from '@tabler/icons-react'
import type {Recipe} from '@/types/decoders/recipes';
import BadgeId, {type DifficultiesType} from '../common/BadgeId';
import {apiPath} from '@/server/client';

interface CardEntityProps {
  data: Recipe
};

const CardEntity: FC<CardEntityProps> = ({data}) => {  
  const {image, name, ingredients, cuisineId, dietId, difficultyId } = data;

  return (
    <Card radius="xl" p="md" >
      <Card.Section>
        <BackgroundImage
          src={`${apiPath}${image}`}
          w={'100%'} 
          h={300}
        >
          <Stack
            h={'100%'}
            align="center"
            justify="flex-end"
            style={{
              background: 'linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(47,47,47,0.1) 50%)'
            }}
          >
            <Title order={3} size={'2rem'} mb={10} c='hunyadi.3'>
              {name}
            </Title>
          </Stack>
        </BackgroundImage>
      </Card.Section>

      <Card.Section mb={5} px={15}>
        <Blockquote 
          color="hunyadi" 
          cite="– Ingredients" 
          icon={<IconInfoCircle />}
          px={25}
          py={20}
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20
            // borderBottomLeftRadius: 0
          }}
        >
          <Group gap={6} justify='center' mb={15}>
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

          {ingredients.map( (item, i) => (
            <>
              {i!== 0 ? <Text component='span'> - </Text> : null}
            <Text component='span' tt="capitalize" key={i}>{item} </Text>
            </>
          ))}
        </Blockquote>
      </Card.Section>
    </Card>
  )
};

export default CardEntity;
