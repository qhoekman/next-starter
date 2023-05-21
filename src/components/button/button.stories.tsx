import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '@/components/button/button';

export default {
  title: 'Components/Actions/Button',
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryFn = (args) => <Button {...args}>Hello World</Button>;
export const asLink: StoryFn = (args) => (
  <Button {...args} asChild>
    <a href="#">Hello World</a>
  </Button>
);
