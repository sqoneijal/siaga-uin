import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  judul: z.literal(true).optional(),
  content: z.literal(true).optional(),
  uploaded: z.literal(true).optional(),
  modified: z.literal(true).optional()
}).strict();
export const Tb_programMinAggregateInputObjectSchema: z.ZodType<Prisma.Tb_programMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Tb_programMinAggregateInputType>;
export const Tb_programMinAggregateInputObjectZodSchema = makeSchema();
