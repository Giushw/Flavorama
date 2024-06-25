import {FC} from 'react';
import {Group, ActionIcon} from '@mantine/core';
import {IconSearch} from '@tabler/icons-react';
import LogoGroup from '@/components/common/LogoGroup';

interface HeaderProps {
  mHandle: () => void;
  dHandle: () => void;
};

const Header: FC<HeaderProps> = ({mHandle, dHandle}) => {  
  return (
    <Group h="100%" w='100%' p={20} justify='space-between'>
      <ActionIcon variant='subtle' aria-label='Search' size={32} onClick={mHandle} hiddenFrom="sm">
        <IconSearch style={{ width: '70%', height: '70%' }} stroke={2} />
      </ActionIcon>
      <ActionIcon variant='subtle' aria-label='Search' size={45} onClick={dHandle} visibleFrom="sm">
        <IconSearch style={{ width: '70%', height: '70%' }} stroke={2} />
      </ActionIcon>

      <LogoGroup hl fs={3} aria-label='Logo Flavorama' />
    </Group>
  )
};

export default Header;