import {FC, ReactNode} from 'react';
import {AppShell, Box} from '@mantine/core';
import {useDisclosure, useHeadroom} from '@mantine/hooks';
import Header from '@/components/base/Header';
import Navigation from '@/components/base/Navigation';
import Footer from '@/components/base/Footer';

interface DefaultProps {
  mainSlot?: ReactNode,
  navDisable?: boolean
};

const Default: FC<DefaultProps> = ({mainSlot, navDisable = false}) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const pinned = useHeadroom({ fixedAt: 120 });
  
  return (
    <AppShell
      transitionTimingFunction="ease-in-out"
      header={{ height: 100, collapsed: !pinned, offset: true }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      footer={{ height: 100, collapsed: pinned, offset: true }}
      padding="md"
    >
      <AppShell.Header bg={'night.1'}>
        <Header 
          mState={mobileOpened}
          dState={desktopOpened}
          mHandle={toggleMobile}
          dHandle={toggleDesktop}
          burgherDisable={navDisable}
        />
      </AppShell.Header>

      {!navDisable &&
        <AppShell.Navbar p="md" bg={'night.1'} >
          <Navigation />
        </AppShell.Navbar>
      }

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
