import axios from 'axios';

import { API_ENDPOINT } from '@/config/constants';
import { toast } from '@/components/toast/useToast';

export const httpClient = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// intercept 404 errors and return the response
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 404) {
      toast({
        variant: 'destructive',
        title: `${error.response.statusText} (${error.response.status})`,
        description: "We're sorry! We couldn't find what you were looking for.",
      });
    }
  }
);

// intercept 422 errors and return the response
httpClient.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 422) {
      return Promise.reject(error.response);
    }
    toast({
      variant: 'destructive',
      title: `${error.response.statusText} (${error.response.status})`,
      description: "We're sorry! Something went wrong.",
    });

    return Promise.reject(error);
  }
);
