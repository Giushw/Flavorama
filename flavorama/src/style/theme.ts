import {createTheme, type MantineColorsTuple} from '@mantine/core';
import {generateColors} from '@mantine/colors-generator';

// generateColors() don't work well with #2F2F2F & #111111
const jet: MantineColorsTuple = [
  '#2F2F2F',
  '#2A2A2A',
  '#262626',
  '#212121',
  '#1c1c1c',
  '#181818',
  '#131313',
  '#0E0E0E',
  '#090909',
  '#050505',
];

const night: MantineColorsTuple = [
  '#111111',
  '#0F0F0F',
  '#0E0E0E',
  '#0C0C0C',
  '#0A0A0A',
  '#090909',
  '#070707',
  '#050505',
  '#030303',
  '#020202',
];

const smoke =  generateColors('#f5f5f5');
const hunyadi = generateColors('#FFC874');

export const theme = createTheme({
  primaryColor: 'hunyadi',
  primaryShade: 3,
  colors: {
    smoke,
    jet,
    night,
    hunyadi
  },
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Carter One, system-ui'
  }
});
