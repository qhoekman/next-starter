import { Meta, StoryFn } from '@storybook/react';

import { RootPage } from './root';

export default {
  title: 'Pages/Root',
  component: RootPage,
} as Meta<typeof RootPage>;

const Template: StoryFn<typeof RootPage> = (args) => <RootPage {...args}></RootPage>;

export const Default = {
  render: Template,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};
