import { Quicksand } from '@next/font/google';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/faqList.css';
import '../styles/globals.css';

import Router from 'next/router';
import NProgress from 'nprogress';
const montserrat = Quicksand({
  subsets: ['latin']
})

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <main className={montserrat.className}>
        <NextNProgress color="#bc8028" startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={true} />

    <Component {...pageProps} />
  </main>
  );
}

export default MyApp
