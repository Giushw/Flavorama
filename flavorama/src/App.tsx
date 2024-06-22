import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import {Router} from './router/Router';
import {theme} from './style/theme';

export default function App() {
  return (
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
      <Router />
    </MantineProvider>
  );
}
