'use client';

import { SideNav } from '@lobehub/ui';
import { memo } from 'react';

import { useActiveTabKey } from '@/hooks/useActiveTabKey';

import Avatar from './Avatar';
import TopActions from './TopActions';

const Nav = memo(() => {
  const sidebarKey = useActiveTabKey();
  return (
    <SideNav
      avatar={<Avatar />}
      bottomActions={null}
      style={{ height: '100%', zIndex: 100 }}
      topActions={<TopActions tab={sidebarKey} />}
    />
  );
});

Nav.displayName = 'DesktopNav';

export default Nav;
