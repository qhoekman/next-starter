import { Meta, StoryFn } from '@storybook/react';

import { Input } from './input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args}></Input>;

export const Default = {
  render: Template,
  args: {
    placeholder: 'Input',
  },
};
