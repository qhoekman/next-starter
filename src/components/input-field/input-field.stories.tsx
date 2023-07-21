import { Meta, StoryFn } from '@storybook/react';

import { InputField } from './input-field';

export default {
  title: 'Components/Input Field',
  component: InputField,
} as Meta<typeof InputField>;

const Template: StoryFn<typeof InputField> = (args) => <InputField {...args}></InputField>;

export const Default = {
  render: Template,
  args: {},
};
