import { Meta, StoryFn } from '@storybook/react';

import { NotFoundPage } from './not-found';

export default {
  title: 'Pages/Not Found',
  component: NotFoundPage,
} as Meta<typeof NotFoundPage>;

const Template: StoryFn<typeof NotFoundPage> = (args) => <NotFoundPage {...args}></NotFoundPage>;

export const Default = {
  render: Template,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};
