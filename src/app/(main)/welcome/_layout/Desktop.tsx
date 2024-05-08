import { GridShowcase } from '@lobehub/ui';
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

import XrxsLogo from '@/components/XrxsLogo';

const COPYRIGHT = `© ${new Date().getFullYear()} XRXS`;

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flexbox
      align={'center'}
      height={'100%'}
      justify={'space-between'}
      padding={16}
      style={{ overflow: 'hidden', position: 'relative' }}
      width={'100%'}
    >
      <XrxsLogo style={{ alignSelf: 'flex-start' }} />
      {/* <Logo size={36} style={{ alignSelf: 'flex-start' }} type={'text'} /> */}
      <GridShowcase innerProps={{ gap: 24 }} style={{ maxWidth: 1024 }} width={'100%'}>
        {children}
      </GridShowcase>
      <Flexbox align={'center'} horizontal justify={'space-between'}>
        <span style={{ opacity: 0.5 }}>{COPYRIGHT}</span>
        {/* <Follow /> */}
      </Flexbox>
    </Flexbox>
  );
};

export default DesktopLayout;
