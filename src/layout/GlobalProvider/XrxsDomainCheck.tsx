'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import FullscreenLoading from '@/components/FullscreenLoading';
import { isDev } from '@/utils/env';

const XrxsUserInject = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation('common');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const trustOrigins = [
    /^https?:\/\/([\dA-Za-z-]+)\.xinrenxinshi\.com$/,
    /^https?:\/\/([\dA-Za-z-]+)\.xinrenxinshi\.tech$/,
    /^https?:\/\/([\dA-Za-z-]+)\.xinrenxinshi\.top$/,
    /^https?:\/\/([\dA-Za-z-]+)\.devtest\.vip$/,
    /^https?:\/\/localhost:\d+$/,
  ];
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    console.log('isDev', isDev);
    if (isDev) {
      setIsReady(true);
      return;
    }
    localStorage.setItem('XRXS_USER', '');
    if (window === window.top) {
      return;
    }
    window.addEventListener('message', (event) => {
      for (const cur of trustOrigins) {
        if (cur.test(event.origin)) {
          localStorage.setItem('XRXS_USER', JSON.stringify(event.data));
          setIsReady(true);
          break;
        } else {
          localStorage.setItem('XRXS_USER', '');
          setIsReady(false);
        }
      }
      localStorage.setItem('XRXS_USER', '');
    });
    window.top?.postMessage('isReady', '*');
  }, []);
  if (isReady) {
    return children;
  } else {
    return <FullscreenLoading title={t('appInitializing')} />;
  }
};
export default XrxsUserInject;
