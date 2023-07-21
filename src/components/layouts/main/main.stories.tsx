import { Meta, StoryFn } from '@storybook/react';

import { MainLayout } from './main';

export default {
  title: 'Layouts/Main',
  component: MainLayout,
} as Meta<typeof MainLayout>;

const Template: StoryFn<typeof MainLayout> = (args) => <MainLayout {...args}></MainLayout>;

export const Default = {
  render: Template,
  args: {},
};
