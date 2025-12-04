import { useQuery } from "@tanstack/react-query";
import { http } from "./http";

export function crudService<Model extends object>(endpoint: string) {
   return {
      useList: <R = Array<Model>>(options?: { pagination: { pageSize: number; pageIndex: number } }) => {
         const { pagination } = options || {};
         const enablePagination = pagination && Object.keys(pagination).length > 0;

         return useQuery<R>({
            queryKey: [endpoint, "list", ...(pagination ? [pagination.pageIndex, pagination.pageSize] : [])],
            queryFn: async () =>
               (await http.get(enablePagination ? `${endpoint}?limit=${pagination?.pageSize}&offset=${pagination.pageIndex}` : endpoint)).data,
         });
      },

      useDetail: (id: number | string | undefined) =>
         useQuery<Model>({
            queryKey: [endpoint, "detail", id],
            queryFn: async () => (await http.get(`${endpoint}/${id}`)).data,
            enabled: !!id,
         }),
   };
}
