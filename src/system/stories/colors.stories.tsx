import React from 'react';
import { ColorGrid } from '@/system/components/color-grid';
import theme from '@/system/theme.json';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'System/Colors',
  component: React.Fragment,
} as Meta<React.FC>;

const Template: StoryFn<React.FC> = () => {
  const { colors } = theme;
  const rootColors = Object.entries(colors).reduce((acc, [key, color]) => {
    if (typeof color === 'string') {
      acc[key] = color;
    }

    return acc;
  }, {} as Record<string, string>);

  return (
    <div>
      {Object.entries(colors).map(([key, color]) => {
        if (typeof color === 'object' && color !== null) {
          return <ColorGrid key={key} colors={color} title={key} />;
        }

        return null;
      })}
      <ColorGrid colors={rootColors} title="root" />
    </div>
  );
};

export const Default = {
  render: Template,
};
