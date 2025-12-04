import * as z from 'zod';
export const tb_link_pendataanGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  link: z.string(),
  _count: z.object({
    id: z.number(),
    link: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    link: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    link: z.string().nullable()
  }).nullable().optional()
}));