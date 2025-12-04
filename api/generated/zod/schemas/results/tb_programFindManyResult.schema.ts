import * as z from 'zod';
export const tb_programFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  judul: z.string().optional(),
  content: z.string().optional(),
  uploaded: z.date().optional(),
  modified: z.date().optional()
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