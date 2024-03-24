import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Box } from '@/components/box/box';
import { Heading } from '@/components/heading/heading';
import { Text } from '@/components/text/text';

export default {
  title: 'System/Typography',
  component: React.Fragment,
} as Meta<React.FC>;

const Template: StoryFn<React.FC> = () => {
  return (
    <div className="max-w-7xl">
      <Box layout="vstack" className="items-start gap-6">
        <Heading as="h1" size="xl">
          Heading 1
        </Heading>
        <Heading as="h2" size="xl">
          Heading 2
        </Heading>
        <Heading as="h3" size="lg">
          Heading 3
        </Heading>
        <Heading as="h4" size="md">
          Heading 4
        </Heading>
        <Heading as="h5" size="sm">
          Heading 5
        </Heading>
        <Heading as="h6" size="xs">
          Heading 6
        </Heading>
        <Text className="text-lg">Paragraph (text-lg)</Text>
        <Text className="text-base">Paragraph (text-base)</Text>
        <Text className="text-sm">Paragraph (text-sm)</Text>
        <Text className="text-xs">Paragraph (text-xs)</Text>
      </Box>
    </div>
  );
};

export const Default = {
  render: Template,
};
