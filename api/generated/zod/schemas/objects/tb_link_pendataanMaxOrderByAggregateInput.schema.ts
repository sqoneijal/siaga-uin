import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  link: SortOrderSchema.optional()
}).strict();
export const tb_link_pendataanMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanMaxOrderByAggregateInput>;
export const tb_link_pendataanMaxOrderByAggregateInputObjectZodSchema = makeSchema();
