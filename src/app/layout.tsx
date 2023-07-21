import { cn } from '@/lib/classnames';
import { QueryProvider } from '@/providers/query';
import { ThemeProvider } from '@/providers/theme';
import { Toaster } from '@/components/toast/toaster';

import '@/styles/globals.css';
import { PropsWithChildren } from 'react';

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="nl">
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
