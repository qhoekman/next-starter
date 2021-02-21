import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AppComponent } from 'next/dist/next-server/lib/router/router';

const MyApp: AppComponent = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
