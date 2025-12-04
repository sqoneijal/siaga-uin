import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const tb_programAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tb_programAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_programAvgOrderByAggregateInput>;
export const tb_programAvgOrderByAggregateInputObjectZodSchema = makeSchema();
