import {FC} from 'react';
import {MantineProvider} from '@mantine/core';
import Router from './router/Router';
import {theme} from './style/theme';

import '@mantine/core/styles.css';

const App: FC = () => {
  return (
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
      <Router />
    </MantineProvider>
  );
};

export default App;