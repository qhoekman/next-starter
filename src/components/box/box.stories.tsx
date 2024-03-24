import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Box } from '@/components/box/box';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    layout: {
      control: {
        type: 'select',
        options: ['container', 'vstack', 'hstack', 'centered', 'grid', 'reel'],
      },
    },
  },
} as Meta<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => (
  <Box layout="container">
    <Box {...args}>
      {[...Array(10)].map((_, i) => (
        <Box key={i} layout="centered" className="h-32 w-64 bg-red-600 text-white" />
      ))}
    </Box>
  </Box>
);

const TemplateReel: StoryFn<typeof Box> = (args) => (
  <Box layout={'container'} className="relative max-w-xs">
    <Box {...args}>
      <Box layout="hstack">
        {[...Array(10)].map((_, i) => (
          <Box key={i} layout="centered" className=" h-32 w-64 bg-red-600 text-white" />
        ))}
      </Box>
    </Box>
  </Box>
);

export const Default = {
  render: Template,
  args: {
    layout: 'hstack',
    className: '',
  },
};

export const WithReel = {
  render: TemplateReel,
  args: {
    layout: 'reel',
    className: '',
  },
};
