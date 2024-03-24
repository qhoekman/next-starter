export type ApiResponse<T = unknown> = {
  data: T;
  message: string;
  status: number;
};

export type ApiErrorResponse = {
  message: string;
  errors: Record<string, string[]>;
};

export interface ApiResponsePagination<T> extends ApiResponse<T> {
  links: {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}
