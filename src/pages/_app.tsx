import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { AppComponent } from 'next/dist/shared/lib/router/router';

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
