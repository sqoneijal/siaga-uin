import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  judul: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  uploaded: SortOrderSchema.optional(),
  modified: SortOrderSchema.optional()
}).strict();
export const tb_programMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tb_programMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_programMaxOrderByAggregateInput>;
export const tb_programMaxOrderByAggregateInputObjectZodSchema = makeSchema();
