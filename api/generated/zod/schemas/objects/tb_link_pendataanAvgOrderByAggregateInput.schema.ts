import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const tb_link_pendataanAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanAvgOrderByAggregateInput>;
export const tb_link_pendataanAvgOrderByAggregateInputObjectZodSchema = makeSchema();
