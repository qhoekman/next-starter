import { Meta, StoryFn } from '@storybook/react';

import { ErrorLayout } from './error';

export default {
  title: 'Layouts/Error',
  component: ErrorLayout,
} as Meta<typeof ErrorLayout>;

const Template: StoryFn<typeof ErrorLayout> = (args) => <ErrorLayout {...args}></ErrorLayout>;

export const Default = {
  render: Template,
  args: {},
};
