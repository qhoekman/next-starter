import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/classnames';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps;

const LinkStyle = cva('font-semibold text-primary hover:text-primary/90', {
  variants: {},
});

export const Link: React.FC<LinkProps> = ({ className, children, ...props }) => {
  return (
    <NextLink data-testid="link" className={cn(LinkStyle(), className)} {...props}>
      {children}
    </NextLink>
  );
};
