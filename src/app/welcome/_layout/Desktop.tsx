'use client';

import { PropsWithChildren, memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import ClientResponsiveLayout from '@/components/client/ClientResponsiveLayout';

import XrxsLogo from '../../../components/XrxsLogo';
import { useStyles } from '../features/Banner/style';

const Desktop = memo<PropsWithChildren>(({ children }) => {
  const { styles } = useStyles();
  return (
    <Center
      className={styles.layout}
      flex={1}
      height={'100%'}
      horizontal
      style={{ position: 'relative' }}
    >
      <XrxsLogo className={styles.logo} />
      {/*<Logo className={styles.logo} size={36} type={'text'} />*/}
      <Flexbox className={styles.view} flex={1}>
        {children}
      </Flexbox>
    </Center>
  );
});

export default ClientResponsiveLayout({ Desktop, Mobile: () => import('./Mobile') });
