import { create } from "zustand";

type PaginationStore = {
   pagination: {
      pageIndex: number;
      pageSize: number;
   };
   setPagination: (pagination: { pageIndex: number; pageSize: number }) => void;
};

export const useTablePagination = create<PaginationStore>((set) => ({
   pagination: {
      pageIndex: 0,
      pageSize: 25,
   },
   setPagination: (pagination) => set({ pagination }),
}));

export const useErrorStore = create<{
   errors: Record<string, string>;
   setErrors: (payload: Record<string, string>) => void;
}>((set) => ({
   errors: {},
   setErrors: (payload) => set({ errors: payload }),
}));
