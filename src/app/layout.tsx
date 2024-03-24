import { cn } from '@/lib/classnames';
import { Toaster } from '@/components/toast/toaster';

import '@/styles/globals.css';
import { PropsWithChildren } from 'react';

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="nl">
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
