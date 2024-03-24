'use client';

import { Toast, ToastClose, ToastDescription, ToastTitle } from '@/components/toast/toast';
import { ToastArea, ToastProvider } from '@/components/toast/toast-area';
import { useToast } from '@/components/toast/useToast';

export const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastArea />
    </ToastProvider>
  );
};
