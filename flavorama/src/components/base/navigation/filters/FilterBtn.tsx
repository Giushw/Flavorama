import {FC, useState} from 'react';
import {
  Text,
  rem,
  UnstyledButton
} from '@mantine/core';
import {
  IconFlag,
  IconApple,
  IconHourglassEmpty,
} from '@tabler/icons-react';


interface FilterBtnProps {
  type: 'cuisine' | 'diet' | 'difficulty',
  id: string,
  label: string,
  clickHandler: () => void;
};

const FilterBtn: FC<FilterBtnProps> = ({
  type, 
  label, 
  clickHandler
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <UnstyledButton 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: rem(90),
        transition: 'background-color 0.3s ease',
        backgroundColor: hovered
          ? 'var(--mantine-color-hunyadi-3)'
          : 'var(--mantine-color-smoke-1)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={clickHandler}
    >

      {type === 'cuisine' &&
        <IconFlag 
          size="2rem"
          style={{ 
            transition: 'color 0.3s ease',
            color: hovered 
              ? 'var(--mantine-color-jet-1)' 
              : 'var(--mantine-color-hunyadi-6)'
          }} 
        />
      }

      {type === 'diet' &&
        <IconApple
          size="2rem"
          style={{ 
            transition: 'color 0.3s ease',
            color: hovered 
              ? 'var(--mantine-color-jet-1)' 
              : 'var(--mantine-color-hunyadi-6)'
          }} 
        />
      }

      {type === 'difficulty' &&
        <IconHourglassEmpty 
          size="2rem"
          style={{ 
            transition: 'color 0.3s ease',
            color: hovered 
              ? 'var(--mantine-color-jet-1)' 
              : 'var(--mantine-color-hunyadi-6)'
          }} 
        />
      }

      <Text size="xs" fw={500} mt={5} c={'jet.1'} >{label}</Text>
    </UnstyledButton>
  );
};

export default FilterBtn;
