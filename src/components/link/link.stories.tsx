import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Link } from './link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary'],
      },
    },
  },
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args}>Click me</Link>;

export const Default = {
  render: Template,
  args: {
    href: 'https://google.com',
    color: 'primary',
  },
};
