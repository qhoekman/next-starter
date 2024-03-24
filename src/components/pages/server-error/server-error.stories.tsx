import { Meta, StoryFn } from '@storybook/react';

import { ServerErrorPage } from './server-error';

export default {
  title: 'Pages/Server Error',
  component: ServerErrorPage,
} as Meta<typeof ServerErrorPage>;

const Template: StoryFn<typeof ServerErrorPage> = (args) => (
  <ServerErrorPage {...args}></ServerErrorPage>
);

export const Default = {
  render: Template,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};
