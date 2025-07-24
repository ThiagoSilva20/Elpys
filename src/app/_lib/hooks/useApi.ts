import { useState, useCallback } from "react";
import { ApiError } from "../api";

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  execute: (...args: unknown[]) => Promise<T | null>;
  reset: () => void;
}

export function useApi<T>(
  apiFunction: (...args: unknown[]) => Promise<T>,
): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (...args: unknown[]): Promise<T | null> => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const result = await apiFunction(...args);
        setState({ data: result, loading: false, error: null });
        return result;
      } catch (error) {
        const errorMessage =
          error instanceof ApiError ? error.message : "Erro inesperado ocorreu";

        setState({ data: null, loading: false, error: errorMessage });
        return null;
      }
    },
    [apiFunction],
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}

// Hook específico para listagem com paginação
interface UseApiListState<T> extends UseApiState<T[]> {
  hasMore: boolean;
  page: number;
}

interface UseApiListReturn<T> extends UseApiListState<T> {
  execute: (page?: number, reset?: boolean) => Promise<T[] | null>;
  loadMore: () => Promise<T[] | null>;
  reset: () => void;
}

export function useApiList<T>(
  apiFunction: (page?: number) => Promise<T[]>,
): UseApiListReturn<T> {
  const [state, setState] = useState<UseApiListState<T>>({
    data: [],
    loading: false,
    error: null,
    hasMore: true,
    page: 1,
  });

  const execute = useCallback(
    async (page: number = 1, reset: boolean = false): Promise<T[] | null> => {
      setState((prev) => ({
        ...prev,
        loading: true,
        error: null,
        page: reset ? 1 : page,
      }));

      try {
        const result = await apiFunction(page);
        const hasMore = result.length > 0; // Assumindo que se retornou dados, pode ter mais

        setState((prev) => ({
          data: reset ? result : [...(prev.data || []), ...result],
          loading: false,
          error: null,
          hasMore,
          page: reset ? 1 : page + 1,
        }));

        return result;
      } catch (error) {
        const errorMessage =
          error instanceof ApiError ? error.message : "Erro inesperado ocorreu";

        setState((prev) => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }));
        return null;
      }
    },
    [apiFunction],
  );

  const loadMore = useCallback(() => {
    return execute(state.page, false);
  }, [execute, state.page]);

  const reset = useCallback(() => {
    setState({
      data: [],
      loading: false,
      error: null,
      hasMore: true,
      page: 1,
    });
  }, []);

  return {
    ...state,
    execute,
    loadMore,
    reset,
  };
}
