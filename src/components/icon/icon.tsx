import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/classnames';

interface IconProps {
  size?: VariantProps<typeof iconVariants>['size'];
  className?: string;
  children: React.ReactNode;
}

const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
    },
  },
});

export const Icon: React.FC<IconProps> = ({ size = 'md', className = '', children, ...props }) => {
  return (
    <div
      data-testid="icon"
      className={cn(
        iconVariants({
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
