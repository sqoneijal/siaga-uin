import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Tb_programAvgAggregateInputObjectSchema: z.ZodType<Prisma.Tb_programAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Tb_programAvgAggregateInputType>;
export const Tb_programAvgAggregateInputObjectZodSchema = makeSchema();
