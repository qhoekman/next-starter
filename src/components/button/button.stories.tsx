import { Meta, StoryFn } from '@storybook/react';

import { Box } from '@/components/box/box';

import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Box layout="hstack">
    <Button {...args}></Button>
    <Button isLoading>Loading</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </Box>
);

export const Default = {
  render: Template,
  args: {
    children: 'Button',
  },
};
