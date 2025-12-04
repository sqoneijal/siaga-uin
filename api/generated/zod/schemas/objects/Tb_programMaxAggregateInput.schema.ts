import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  judul: z.literal(true).optional(),
  content: z.literal(true).optional(),
  uploaded: z.literal(true).optional(),
  modified: z.literal(true).optional()
}).strict();
export const Tb_programMaxAggregateInputObjectSchema: z.ZodType<Prisma.Tb_programMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Tb_programMaxAggregateInputType>;
export const Tb_programMaxAggregateInputObjectZodSchema = makeSchema();
