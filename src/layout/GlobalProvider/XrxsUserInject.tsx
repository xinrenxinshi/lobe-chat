'use client';

import { PropsWithChildren, useEffect } from 'react';

const XrxsUserInject = ({ children }: PropsWithChildren) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const trustOrigins = [
    /^https?:\/\/([\dA-Za-z-]+)\.xinrenxinshi\.com$/,
    /^https?:\/\/([\dA-Za-z-]+)\.xinrenxinshi\.tech$/,
    /^https?:\/\/([\dA-Za-z-]+)\.xinrenxinshi\.top$/,
    /^https?:\/\/([\dA-Za-z-]+)\.devtest\.vip$/,
    /^https?:\/\/localhost:\d+$/,
  ];
  useEffect(() => {
    console.log('location', location.href);
    console.log('clear localStorage', 1);
    localStorage.setItem('XRXS_USER', '');
    if (window === window.top) {
      return;
    }
    window.addEventListener('message', (event) => {
      for (const cur of trustOrigins) {
        if (cur.test(event.origin)) {
          console.log('set localStorage', event.data);
          localStorage.setItem('XRXS_USER', JSON.stringify(event.data));
          return;
        }
      }
      console.log('clear localStorage', 2);
      localStorage.setItem('XRXS_USER', '');
    });
    window.top?.postMessage('isReady', '*');
  }, []);
  return children;
};
export default XrxsUserInject;
