import { useErrorStore } from "@/hooks/store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { http } from "./http";

export function crudService<Model extends object, CreateDTO, UpdateDTO>(endpoint: string) {
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

      useCreate: () => {
         const qc = useQueryClient();
         return useMutation({
            mutationFn: async (payload: CreateDTO) => (await http.post(endpoint, payload)).data,
            onSuccess: () => qc.invalidateQueries({ queryKey: [endpoint] }),
         });
      },

      useUpdate: () => {
         const qc = useQueryClient();
         const { setErrors } = useErrorStore();
         return useMutation({
            mutationFn: async (payload: UpdateDTO & { id: number | string }) => {
               const { id, ...body } = payload;
               return (await http.put(`${endpoint}/${id}`, body)).data;
            },
            onSuccess: () => qc.invalidateQueries({ queryKey: [endpoint] }),
            onError: (error: unknown) => {
               if (error instanceof AxiosError && error?.status === 400 && error.response) {
                  toast.error(error.response.data.response.message);
                  setErrors(error.response.data.response.errors);
               }
            },
         });
      },

      useDelete: () => {
         const qc = useQueryClient();
         return useMutation({
            mutationFn: async (id: number | string) => (await http.delete(`${endpoint}/${id}`)).data,
            onSuccess: () => qc.invalidateQueries({ queryKey: [endpoint] }),
         });
      },
   };
}
