import { HTMLInputTypeAttribute } from 'react';

import { Input, InputProps } from '@/components/input/input';
import { Textarea, TextareaProps } from '@/components/textarea/textarea';

export type InputFactoryType = {
  [key in HTMLInputTypeAttribute]: React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  >;
} & {
  textarea: React.ForwardRefExoticComponent<
    TextareaProps & React.RefAttributes<HTMLTextAreaElement>
  >;
};

export const InputFactory = {
  text: Input,
  number: Input,
  textarea: Textarea,
} as const;
