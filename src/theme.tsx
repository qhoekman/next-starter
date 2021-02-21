import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    initialColorMode: "light",
    useSystemColorMode: false,
    colors: {
      black: '#16161D',
    },
  }
);

export default theme;
