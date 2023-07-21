import React from 'react';
import { SpaceItem } from '@/system/components/space-item';
import theme from '@/system/theme.json';
import { Meta, StoryFn } from '@storybook/react';

type Props = {
  items: Record<string, string>;
};

export default {
  title: 'System/Sizes',
  component: React.Fragment,
} as Meta<React.FC<Props>>;

const Template: StoryFn<React.FC<Props>> = (args) => (
  <div className="max-w-7xl">
    <div className="flex w-full flex-col gap-6">
      {Object.entries(args.items).map(([key, value]) => (
        <SpaceItem key={key} accessor={key} size={value as string} />
      ))}
    </div>
  </div>
);

export const Default = {
  render: Template,
  args: {
    items: theme.spacing,
  },
};

export const Breakpoints = {
  render: Template,
  args: {
    items: theme.screens,
  },
};
