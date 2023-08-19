import '../styles/globals.css'
import '../styles/faqList.css'
import type { AppProps } from 'next/app'
import {Quicksand} from '@next/font/google'

const montserrat = Quicksand({
  subsets: ['latin']
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <main className={montserrat.className}>
    <Component {...pageProps} />
  </main>
  );
}

export default MyApp
