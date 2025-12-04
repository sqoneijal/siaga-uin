import * as z from 'zod';
export const tb_programGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  judul: z.string(),
  content: z.string(),
  uploaded: z.date(),
  modified: z.date(),
  _count: z.object({
    id: z.number(),
    judul: z.number(),
    content: z.number(),
    uploaded: z.number(),
    modified: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    judul: z.string().nullable(),
    content: z.string().nullable(),
    uploaded: z.date().nullable(),
    modified: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    judul: z.string().nullable(),
    content: z.string().nullable(),
    uploaded: z.date().nullable(),
    modified: z.date().nullable()
  }).nullable().optional()
}));