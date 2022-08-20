import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <Script src='../../node_modules/flowbite/dist/flowbite.js' />
    </Component>
  );
}

export default MyApp;
