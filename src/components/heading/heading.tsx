import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/classnames';

const headingVariants = cva('tracking-tight text-foreground', {
  variants: {
    size: {
      xs: 'text-lg font-medium',
      sm: 'text-xl font-medium',
      md: 'text-2xl font-bold',
      lg: 'text-3xl font-bold',
      xl: 'text-4xl font-extrabold',
    },
  },
});

export interface HeadingProps<C extends React.ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: C;
  size?: VariantProps<typeof headingVariants>['size'];
}

export const Heading: React.FC<HeadingProps> = ({
  as: Element = 'h2',
  className,
  size = 'md',
  children,
  ...props
}) => {
  return (
    <Element className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Element>
  );
};
