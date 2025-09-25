export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T = unknown> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ErrorInfo {
  message: string;
  code?: string;
  details?: unknown;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
