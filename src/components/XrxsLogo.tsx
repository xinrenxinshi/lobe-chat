'use client';

import { createStyles } from 'antd-style';
import { CSSProperties } from 'react';

const useStyles = createStyles(({ css }) => ({
  xrxsLogo: css`
    display: inline-block;

    width: 120px;
    height: 36px;

    background-image: url('https://static.xinrenxinshi.com/official4/logo.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  `,
}));

export interface XrxsLogoProps {
  className?: string;
  style?: CSSProperties;
}

const XrxsLogo = (props: XrxsLogoProps) => {
  const { styles } = useStyles();

  return <span className={`${styles.xrxsLogo} ${props.className}`} style={props.style} />;
};

export default XrxsLogo;
