import { ToastTitle } from '@radix-ui/react-toast';
import { Meta, StoryFn } from '@storybook/react';

import { ToastArea, ToastProvider } from '@/components/toast/toast-area';
import { ToasterToast } from '@/components/toast/useToast';

import { Toast, ToastAction, ToastClose, ToastDescription } from './toast';

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta<ToasterToast>;

const Template: StoryFn<ToasterToast> = (args) => (
  <ToastProvider>
    <Toast {...args}>
      <div className="grid gap-1">
        <ToastTitle>{args.title}</ToastTitle>
        <ToastDescription>{args.description}</ToastDescription>
      </div>
      {args.action}
      <ToastClose />
    </Toast>
    <ToastArea />
  </ToastProvider>
);

export const Default = {
  render: Template,
  args: {
    title: 'Toast',
    description: 'Toast Description',
    action: <ToastAction altText="Action">Action</ToastAction>,
  },
};
