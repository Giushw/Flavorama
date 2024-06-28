import {FC} from 'react';
import {Group, Burger} from '@mantine/core';
import LogoGroup from '@/components/common/LogoGroup';

interface HeaderProps {
  mState: boolean,
  dState: boolean,
  mHandle: () => void,
  dHandle: () => void,
  burgherDisable: boolean
};

const Header: FC<HeaderProps> = ({mState, dState, mHandle, dHandle, burgherDisable}) => {  
  return (
    <Group h="100%" w='100%' p={20} justify='space-between'>
      {!burgherDisable &&
        <>
          <Burger opened={mState} onClick={mHandle} hiddenFrom="sm" size="md" />
          <Burger opened={dState} onClick={dHandle} visibleFrom="sm" size="md" />
        </>
      }
      <LogoGroup hl fs={3} aria-label='Logo Flavorama' />
    </Group>
  )
};

export default Header;