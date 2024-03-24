import React, { SVGAttributes } from 'react';
import { CloseIcon } from '@/assets/icons/close';
import { Meta, StoryFn } from '@storybook/react';

type Props = {
  icons: React.FC<SVGAttributes<SVGElement>>[];
};

export default {
  title: 'System/Icons',
  component: React.Fragment,
} as Meta<React.FC<Props>>;

const Template: StoryFn<React.FC<Props>> = (args) => {
  return (
    <div className="max-w-7xl">
      <div className="grid grid-cols-12 gap-4">
        {args.icons.map((Icon, i) => {
          return (
            <div key={i} className="col-span-1 flex flex-col items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Icon className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Default = {
  render: Template,
  args: {
    icons: [CloseIcon],
  },
};
