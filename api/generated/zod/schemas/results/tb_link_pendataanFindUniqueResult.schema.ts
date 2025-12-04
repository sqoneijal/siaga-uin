import * as z from 'zod';
export const tb_link_pendataanFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  link: z.string().optional()
}));