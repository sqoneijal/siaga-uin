import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const tb_link_pendataanSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanSumOrderByAggregateInput>;
export const tb_link_pendataanSumOrderByAggregateInputObjectZodSchema = makeSchema();
