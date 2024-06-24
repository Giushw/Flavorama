import {FC, ReactNode} from 'react';
import {AppShell, Box} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';

interface DefaultProps {
  mainSlot?: ReactNode
};

const Default: FC<DefaultProps> = ({mainSlot}) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
  
  return (
    <AppShell
      header={{height: 100}}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      footer={{height: 100}}
      padding="md"
    >
      <AppShell.Header bg={'night.1'}>
        <Header mHandle={toggleMobile} dHandle={toggleDesktop} />
      </AppShell.Header>

      <AppShell.Navbar p="md" bg={'jet.1'} >Navbar</AppShell.Navbar>

      <AppShell.Main bg={'night.1'}>
        <Box p={20} w='100%' h='100%'>
          {mainSlot}
        </Box>
      </AppShell.Main>

      <AppShell.Footer bg={'night.1'}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
};

export default Default;