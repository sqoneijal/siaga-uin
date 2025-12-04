import * as z from 'zod';
export const tb_link_pendataanUpsertResultSchema = z.object({
  id: z.number().int(),
  link: z.string().optional()
});