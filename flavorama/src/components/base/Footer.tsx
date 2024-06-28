import {FC} from 'react';
import {Link} from "react-router-dom";
import {
  Group,
  ActionIcon,
  rem,
  Flex,
  Anchor,
  Text
} from '@mantine/core';
import {IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';
import LogoGroup from '@/components/common/LogoGroup';

const Footer: FC = () => (
  <Flex justify={'space-between'} p={20}>
    <Group>
      <LogoGroup w={60} h={60} ht aria-label='Logo Flavorama' />
      <Text>© 2024 Flavorama.</Text>
    </Group>
  
    <Group justify="space-between" wrap="nowrap">
      <ActionIcon 
        size="lg"
        color="smoke.1"
        variant="subtle"
        component='a' 
        href='https://github.com/Giushw'
        target='_blank'
      >
        <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ActionIcon>
      <ActionIcon 
        size="lg"
        color="smoke.1"
        variant="subtle"
        component='a'
        href='https://www.linkedin.com/in/giuseppedellavvocato/'
        target='_blank'
      >
        <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ActionIcon>
    </Group>

    <Group justify="flex-End" wrap="nowrap">
      <Link to="/guidelines" style={{ textDecoration: 'none' }}>
        <Anchor component='span' c='smoke.1' lh={1} size="sm">Guidelines</Anchor>
      </Link>
      <Link to="/tips" style={{ textDecoration: 'none' }}>
        <Anchor c='smoke.1' component='span' lh={1} size="sm">Tips</Anchor>
      </Link>
      <Link to="/contacts" style={{ textDecoration: 'none' }}>
        <Anchor c='smoke.1' component='span' lh={1} size="sm">Contacts</Anchor>
      </Link>
    </Group>
</Flex>
);

export default Footer;
