import {FC} from "react";
import {Badge, rem} from "@mantine/core";
import {IconFlag, IconApple, IconHourglassEmpty} from '@tabler/icons-react';
import useStoreCuisine from "@/store/cuisine";
import useStoreDiet from "@/store/diet";
import useStoreDifficulty from "@/store/difficulty";

type BadgeType = 'cuisine' | 'diet';

interface CommonIdProps {
  type: BadgeType;
  id: string;
  big?: boolean
};

export type DifficultiesType = 'Easy' | 'Medium' | 'Hard';

interface DifficultyIdProps {
  type: 'difficulty';
  id: DifficultiesType;
  big?: boolean
};

type BadgeIdProps = CommonIdProps | DifficultyIdProps;

const BadgeId: FC<BadgeIdProps> = ({type, id, big}) => {
  const cuisineStore = useStoreCuisine();
  const dietStore = useStoreDiet();
  const difficultyStore = useStoreDifficulty();

  const {cuisines} = cuisineStore;
  const {diets} = dietStore;
  const {difficulties} = difficultyStore;

  const parseDiffColor = (id: string) => {
    const idParser = difficulties ? difficulties.filter((el: { id: string; }) => el.id === id)[0].name : 'ND'

    switch (idParser) {
      case 'Easy':
        return 'teal';

      case 'Medium':
        return 'orange';

      case 'Hard':
        return 'red';

      case 'ND':
        return 'blue';
    }
  };

  const parseColor = () => {
    if (type !== 'difficulty') {
      return type === 'cuisine' ? 'yellow' : 'white';
    } else {
      return parseDiffColor(id)
    }
  };

  const parseIconType = () => {
    const commonProps = { 
      width: rem(12), 
      height: rem(12) 
    };
    
    switch (type) {
      case 'cuisine':
        return <IconFlag style={commonProps} />;

      case 'diet':
        return <IconApple style={commonProps} />;

      case 'difficulty':
        return <IconHourglassEmpty style={commonProps} />;
    };
  };

  const parseIdValue = (id: string) => {
    switch (type) {
      case 'cuisine':
        return cuisines ? cuisines.filter( el => el.id === id)[0].name : id;
      
      case 'diet':
        return diets ? diets.filter( el => el.id === id)[0].name : id;

      case 'difficulty':
        return difficulties ? difficulties.filter( (el: { id: string; }) => el.id === id)[0].name : id;
    
      default:
        return id;
    }
  };

  return (
    <Badge 
      autoContrast
      variant="filled"
      size={big ? 'lg' : 'md'}
      leftSection={parseIconType()}
      color={parseColor()}
    >
      {parseIdValue(id)}
    </Badge>
  )
};

export default BadgeId;
