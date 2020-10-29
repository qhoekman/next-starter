import { ChakraProvider } from '@chakra-ui/core';
import { AppComponent } from 'next/dist/next-server/lib/router/router';
import theme from '../theme';

const MyApp: AppComponent = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
