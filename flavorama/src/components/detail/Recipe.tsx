import {FC, useState} from 'react';
import {Link} from "react-router-dom";
import type {AxiosError} from 'axios';
import {
  Grid,
  Stack,
  Title,
  Text,
  Skeleton,
  Group,
  Modal,
  BackgroundImage,
  List,
  Paper,
  Avatar,
  Box,
  Rating,
  Button,
  Fieldset,
  TextInput,
  Textarea,
  NumberInput,
  Dialog,
  Alert
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {
  IconArrowBack,
  IconArrowForward,
  IconInfoCircle,
  IconPlus
} from '@tabler/icons-react';
import type {Comments, Recipe} from '@/types/decoders/recipes';
import {apiPath} from '@/server/client';
import {postRecipeComment} from '@/server/Recipes';
import {dateParsed, getRandomIntBetween} from '@/libs/utils';
import BadgeId, {type DifficultiesType} from '../common/BadgeId';

interface RecipeInfoProps {
  data: Recipe | null,
  loading: boolean,
  cData: Comments | null,
  cLoading: boolean,
};

const RecipeInfo: FC<RecipeInfoProps> = ({
  data,
  loading,
  cData,
  cLoading
}) => (
  <Stack gap="lg">

  <Link to='/search' style={{ color: 'var(--mantine-color-smoke-1'}}>
    <Text size='xl' c={'smoke.1'}>
      Go back
    </Text>
  </Link>

    {(loading || !data) &&
      <ViewSkeleton />
    }

    {data &&
      <>
        <ViewRecipe element={data} />

        {(!cLoading && cData) &&
          <Comments elements={cData} rId={data.id} />
        }
      </>
    }
  </Stack>
);

export default RecipeInfo;

const ViewSkeleton: FC = () => (
  <>
    <Stack>
      <Skeleton height={350} radius="lg" mb='xl' />

      <Skeleton height={20} radius="lg" mb='md' width={'50%'}/>

        <Stack align='flex-end' justify='flex-end' mb='xl'>
          <Skeleton height={8} radius="lg" width={'40%'} />
          <Skeleton height={8} radius="lg" width={'40%'} />
          <Skeleton height={8} radius="lg" width={'40%'} />
        </Stack>

        <Stack>
          <Skeleton height={8} radius="lg" />
          <Skeleton height={8} radius="lg" />
          <Skeleton height={8} radius="lg" />
          <Skeleton height={8} radius="lg" width={'70%'} />
        </Stack>
    </Stack>
  </>
);

interface ViewRecipeProps {
  element: Recipe
};

const ViewRecipe: FC<ViewRecipeProps> = ({element}) => (
  <Stack gap="md" align='center'>
    <BackgroundImage
      src={`${apiPath}${element.image}`}
      w={'100%'} 
      h={350}
      radius='lg'
      mb='lg'
    >
      <Stack
        h={'100%'}
        align="center"
        justify="flex-end"
        style={{
          background: 'linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(47,47,47,0.1) 50%)'
        }}
      >
        <Title order={3} size={'3rem'} mb={10} c='hunyadi.3'>
          {element.name}
        </Title>
      </Stack>
    </BackgroundImage>

    <Paper shadow="xs" radius="lg" p="xl" bg='jet.1' w={'100%'}>
      <Group align='center' justify='space-evenly'>
        <BadgeId big type='cuisine' id={element.cuisineId} />
        <BadgeId big type='diet' id={element.dietId} />
        <BadgeId big type='difficulty' id={element.difficultyId as DifficultiesType} />
      </Group>
    </Paper>
    
    <Grid columns={4} w={'100%'} bg='jet.1' style={{ borderRadius: 25}}>
      <Grid.Col span={{ base: 1, md: 3 }} >
        <Paper shadow="xs" radius="lg" p="xl" bg='jet.1'>
          <Text c={'hunyadi.3'}>Procedure:</Text>
          <Text size='xl'>
            {element.instructions}
          </Text>
        </Paper>
      </Grid.Col>
      
      <Grid.Col span={1} h={'100%'}>
        <Paper shadow="xs" radius="lg" p="xl" bg='jet.1'>
          <Text c={'hunyadi.3'} mb='md'>Ingredients:</Text>
          <List>
            {
              element.ingredients.map((el, i) => 
                <List.Item key={i}>{el}</List.Item>
              )
            }
          </List>
        </Paper>
      </Grid.Col>
    </Grid>
  </Stack>
);

interface CommentsProps {
  elements: Comments,
  rId: string
};

interface CustAlert {
  status: number,
  code: string,
  message: string
};

const Comments: FC<CommentsProps> = ({elements, rId}) => {
  const [modalOpened, setModalOpened] = useState(false);

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const [alertMsg, setAlertMsg] = useState<CustAlert | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const srcBuilder = () => {
    const pathprefix = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-'    
    return `${pathprefix}${getRandomIntBetween(1, 9)}.png`
  };

  const onAddComment = (id: string) => {
    const now = dateParsed();

    postRecipeComment(
      id,
      review,
      rating,
      now
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
    <Stack gap="md" align='center'>
      <Grid columns={3} w={'100%'}>   
        {
          elements.map(el => 
            <Grid.Col span={1}>
              <Paper shadow="xs" radius="lg" p="md" bg='jet.1'>
                <Group>
                  <Avatar
                    src={srcBuilder()}
                    alt="User"
                    radius="xl"
                  />
                  <Box>
                    <Text size="sm">Anon User_{el.id}</Text>
                    <Text size="xs" c="dimmed">
                      Posted: {el.date}
                    </Text>
                  </Box>
                </Group>

                <Text pl={54} pt="sm" size="sm" mb={20}>
                  {el.comment}
                </Text>

                <Rating value={el.rating} color="hunyadi.3" readOnly pl={54}/>
              </Paper>
            </Grid.Col>
          )
        }

        <Grid.Col span={1}>
          <Paper 
            shadow="xs" 
            radius="lg" 
            p="md" 
            bg='jet.1' 
            styles={{
              root: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }
            }}
          >
            <Text pt="sm" size="sm" mb={20}>
              Don't be a stranger and leave a review!
            </Text>

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
                <Fieldset legend="Recipe information" radius="lg" mt={20} mih={275}>
                  <Group w={'100%'} justify='space-between' mb={20}>
                    <TextInput
                      value={name}
                      data-autofocus
                      w={'49%'}
                      label="Your Name"
                      description="Only letters, no numbers."
                      onChange={(event) => setName(event.currentTarget.value)}
                    />

                    <NumberInput
                      value={rating}
                      w={'49%'}
                      label="Your Vote"
                      description="A Number form 0 to 5."
                      min={0}
                      max={5}
                      onChange={(event) => setRating(typeof event === 'string' ? parseFloat(event) : event)}
                    />
                  </Group>
                  
                  <Textarea
                    value={review}
                    autosize
                    minRows={3}
                    maxRows={6}
                    label="Review"
                    description="Tell us what you think about."
                    onChange={(event) => setReview(event.currentTarget.value)}
                  />
                </Fieldset>

                <Group justify="center" mt="xl">
                  <Button 
                    radius={'md'}
                    autoContrast 
                    color={'smoke.1'}
                    leftSection={<IconArrowBack size={16} />}
                    onClick={() => setModalOpened(false)}
                  >
                    Cancel
                  </Button>

                  <Button 
                    radius={'md'}
                    autoContrast
                    leftSection={<IconArrowForward size={16} />}
                    onClick={() => onAddComment(rId)}
                  >
                    Submit
                  </Button>
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
              </Modal>

              <Button 
                radius={'md'}
                autoContrast
                leftSection={<IconPlus size={16} />}
                onClick={() => setModalOpened(true)}
              >
                Add One
              </Button>
            </>
          </Paper>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
