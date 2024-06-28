import {FC} from "react";
import {Group, Image, Title} from "@mantine/core";

type ColorType = 'accent' | 'black' | 'white';

interface ColorGroup {
  url: string,
  hue: string
};

interface LogoGroupProps {
  mb?: number,
  w?: number,
  h?: number,
  fs?: number,
  hl?: boolean,
  ht?: boolean,
  col?: ColorType
};

const LogoGroup: FC<LogoGroupProps> = ({mb, w, h, fs, hl, ht, col}) => {
  const handleFs = fs ?  `${fs}rem` : '2rem';
  const handleHl = hl ?  hl : false;
  const handleHt = ht ?  ht : false;
  const handleCol: ColorType = col ? col: 'accent';

  const calcCol = (): ColorGroup => {
    switch (handleCol) {
      case 'accent':
        return {
          url: '/assets/Logo.svg',
          hue: 'hunyadi.3'
        };

      case 'white':
        return {
          url: '/assets/Logo_white.svg',
          hue: 'smoke.1'
        };

      case 'black':
        return {
          url: '/assets/Logo_black.svg',
          hue: 'jet.1'
        };
    }
  };

  return (
    <Group mb={mb ?? 0}>
      {!handleHl && 
        <Image h={h ?? 50} w={w ?? 50} src={calcCol().url}  fit="contain"/>
      }
      {!handleHt &&
        <Title order={2} size={handleFs}  c={calcCol().hue}>Flavorama</Title>
      }
    </Group>
  );
};

export default LogoGroup;
