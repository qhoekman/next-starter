import { Inter } from 'next/font/google';

import { cn } from '@/lib/classnames';

export interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const interFont = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn(interFont.variable, 'font-sans', className)}>
      {children}
    </div>
  );
};
