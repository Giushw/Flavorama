import {FC} from "react";
import {Badge, rem} from "@mantine/core";
import {IconFlag, IconApple, IconHourglassEmpty} from '@tabler/icons-react';

type BadgeType = 'cuisine' | 'diet';

interface CommonIdProps {
  type: BadgeType;
  id: string;
};

export type DifficultiesType = 'Easy' | 'Medium' | 'Hard';

interface DifficultyIdProps {
  type: 'difficulty';
  id: DifficultiesType;
};

type BadgeIdProps = CommonIdProps | DifficultyIdProps;

const BadgeId: FC<BadgeIdProps> = ({type, id}) => {


  const parseDiffColor = (id: DifficultiesType) => {
    switch (id) {
      case 'Easy':
        return 'teal';

      case 'Medium':
        return 'orange';

      case 'Hard':
        return 'red';

      default:
        return 'teal'
    }
  };

  const parseColor = () => {
    if (type !== 'difficulty') {
      return type === 'cuisine' ? 'yellow' : 'white';
    } else {
      return parseDiffColor(id)
    }
  };

  const parseType = () => {
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

  return (
    <Badge 
      autoContrast
      variant="filled"
      leftSection={parseType()}
      color={parseColor()}
    >
      prova {id}
    </Badge>
  )
};

export default BadgeId;