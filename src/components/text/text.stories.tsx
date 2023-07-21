import { Meta } from '@storybook/react';

import { Text } from '@/components/text/text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta<typeof Text>;

export const Default = {
  args: {
    children: 'Text',
  },
};
