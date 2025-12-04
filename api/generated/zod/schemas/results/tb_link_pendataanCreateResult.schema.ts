import * as z from 'zod';
export const tb_link_pendataanCreateResultSchema = z.object({
  id: z.number().int(),
  link: z.string().optional()
});