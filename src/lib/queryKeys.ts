import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { authQueryKeys } from '@/features/auth/lib/queryKeys';

export const queryKeys = mergeQueryKeys(authQueryKeys);
