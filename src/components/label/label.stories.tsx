import { Meta, StoryFn } from '@storybook/react';

import { Label } from './label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args}></Label>;

export const Default = {
  render: Template,
  args: {},
};
