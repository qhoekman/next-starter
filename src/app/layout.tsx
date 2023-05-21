import { ThemeProvider } from '@/providers/theme';

import '@/styles/globals.css';
import { PropsWithChildren } from 'react';

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="nl">
      <body>
        <ThemeProvider enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
