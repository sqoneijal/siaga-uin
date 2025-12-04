import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Tb_programSumAggregateInputObjectSchema: z.ZodType<Prisma.Tb_programSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Tb_programSumAggregateInputType>;
export const Tb_programSumAggregateInputObjectZodSchema = makeSchema();
