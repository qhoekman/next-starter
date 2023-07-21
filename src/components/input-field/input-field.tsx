import React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/classnames';
import { InputFactory } from '@/components/input-field/input-factory';
import { Input } from '@/components/input/input';
import { Label } from '@/components/label/label';

const helperTextVariant = cva('mt-2 text-sm text-primary', {
  variants: {
    error: {
      true: 'text-destructive',
      false: '',
    },
  },
});

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'className'> {
  label?: string;
  error?: string;
  helperText?: string;
  action?: React.ReactNode;
  type?: keyof typeof InputFactory;
  classes?: {
    group?: string;
    label?: string;
    input?: string;
    helperText?: string;
  };
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { classes, label, disabled = false, error, helperText, action = null, type = 'text', ...props },
    ref
  ) => {
    const Comp = InputFactory[type] as typeof Input;

    if (!Comp) {
      throw new Error(`Input type "${type}" is not supported`);
    }

    return (
      <div className={classes?.group}>
        {label && (
          <div className="flex items-center justify-between">
            <Label className={classes?.label} htmlFor={props.name}>
              {label}
            </Label>
            {action}
          </div>
        )}
        <Comp ref={ref} type={type} disabled={disabled} className={classes?.input} {...props} />
        <p
          role="alert"
          className={cn(
            helperTextVariant({ error: Boolean(error), className: classes?.helperText })
          )}
        >
          {error || helperText}
        </p>
      </div>
    );
  }
);

InputField.displayName = 'InputField';
