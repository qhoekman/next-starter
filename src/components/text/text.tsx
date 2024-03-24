import React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/classnames';

const textVariants = cva('text-foreground', {
  variants: {},
});

export interface TextProps<C extends React.ElementType = 'p' | 'span'>
  extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: C;
}

export const Text: React.FC<TextProps> = ({ as: Element = 'p', className, children, ...props }) => {
  return (
    <Element className={cn(textVariants(), className)} {...props}>
      {children}
    </Element>
  );
};
