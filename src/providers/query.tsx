'use client';

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

type QueryProviderProps = PropsWithChildren<{
  devtools?: boolean;
}>;

export const QueryProvider: React.FC<QueryProviderProps> = ({ devtools, children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      {devtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
