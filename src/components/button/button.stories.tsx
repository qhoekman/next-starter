import { Meta, StoryFn } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}></Button>;

export const Default = {
  render: Template,
  args: {
    children: 'Button',
  },
};
