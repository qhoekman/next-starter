import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/classnames';

const boxVariants = cva('', {
  variants: {
    layout: {
      default: '',
      container: 'mx-auto max-w-7xl',
      vstack: 'flex flex-col space-y-4',
      hstack: 'flex flex-row items-center space-x-4',
      centered: 'flex items-center justify-center',
      flex: 'flex',
      grid: 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      reel: 'flex h-auto overflow-x-auto overflow-y-hidden',
    },
  },
});

export interface BoxProps<C extends React.ElementType = 'div'>
  extends React.HTMLAttributes<HTMLDivElement> {
  as?: C;
  layout?: VariantProps<typeof boxVariants>['layout'];
}

export const Box: React.FC<BoxProps> = ({
  as: Element = 'div',
  className,
  layout = 'default',
  children,
  ...props
}) => {
  return (
    <Element className={cn(boxVariants({ layout }), className)} {...props}>
      {children}
    </Element>
  );
};
