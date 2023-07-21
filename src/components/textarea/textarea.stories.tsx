import { Meta, StoryFn } from '@storybook/react';

import { Textarea } from './textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => <Textarea {...args}></Textarea>;

export const Default = {
  render: Template,
  args: {},
};
