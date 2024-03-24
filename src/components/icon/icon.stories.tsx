import React from 'react';
import { CloseIcon } from '@/assets/icons/close';
import { Meta, StoryFn } from '@storybook/react';

import { Icon } from './icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => (
  <Icon {...args}>
    <CloseIcon />
  </Icon>
);

export const Default = {
  render: Template,
};
