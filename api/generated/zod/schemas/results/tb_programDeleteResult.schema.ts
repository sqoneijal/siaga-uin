import * as z from 'zod';
export const tb_programDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  judul: z.string().optional(),
  content: z.string().optional(),
  uploaded: z.date().optional(),
  modified: z.date().optional()
}));