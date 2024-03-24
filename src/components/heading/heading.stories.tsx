import { Meta } from '@storybook/react';

import { Heading } from '@/components/heading/heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta<typeof Heading>;

export const Default = {
  args: {
    children: 'Heading',
    size: 'md',
  },
};
