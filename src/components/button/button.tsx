import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@/lib/classnames';
import { testId } from '@/lib/testids';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-fg hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-fg hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-fg',
        secondary: 'bg-secondary text-secondary-fg hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-fg',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        data-testid={testId('button')}
        className={classNames(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
