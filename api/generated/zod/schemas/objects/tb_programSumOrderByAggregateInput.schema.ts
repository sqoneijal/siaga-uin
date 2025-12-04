import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const tb_programSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tb_programSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_programSumOrderByAggregateInput>;
export const tb_programSumOrderByAggregateInputObjectZodSchema = makeSchema();
