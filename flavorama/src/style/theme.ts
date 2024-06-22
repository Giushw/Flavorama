import {createTheme, type MantineColorsTuple} from '@mantine/core';
import {generateColors} from '@mantine/colors-generator';

// TODO: hunderstand why the generato colot don't work with these 2 colors
const jet: MantineColorsTuple = [
  '#2F2F2F',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
];

const night: MantineColorsTuple = [
  '#111111',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
  '#000000',
];

const smoke =  generateColors('#f5f5f5');
const hunyadi = generateColors('#FFC874');

export const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: 'green',
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
