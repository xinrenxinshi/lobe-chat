'use client';

import { memo } from 'react';
import { Center } from 'react-layout-kit';

const Logo = memo<{ mobile?: boolean }>(({ mobile }) => {
  return mobile ? (
    <Center height={240} width={240}>
      {/* <LogoThree size={240} /> */}
      <img
        src="https://static.xinrenxinshi.com/official4/6FA9ECF8-9557-4124-B764-FB77992D463D.png"
        style={{ height: '100%' }}
      />
    </Center>
  ) : (
    <Center
      style={{
        height: `min(482px, 40vw)`,
        // marginBottom: '-10%',
        marginTop: '-20%',
        position: 'relative',
        width: `min(976px, 80vw)`,
      }}
    >
      <img
        src="https://static.xinrenxinshi.com/official4/6FA9ECF8-9557-4124-B764-FB77992D463D.png"
        style={{ height: '100%' }}
      />
      {/* <LogoSpline height={'min(482px, 40vw)'} width={'min(976px, 80vw)'} /> */}
    </Center>
  );
});

export default Logo;
