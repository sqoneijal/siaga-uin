import * as z from 'zod';
export const tb_link_pendataanFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  link: z.string().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});