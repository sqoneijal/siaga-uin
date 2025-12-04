import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tb_link_pendataanCountOrderByAggregateInputObjectSchema as tb_link_pendataanCountOrderByAggregateInputObjectSchema } from './tb_link_pendataanCountOrderByAggregateInput.schema';
import { tb_link_pendataanAvgOrderByAggregateInputObjectSchema as tb_link_pendataanAvgOrderByAggregateInputObjectSchema } from './tb_link_pendataanAvgOrderByAggregateInput.schema';
import { tb_link_pendataanMaxOrderByAggregateInputObjectSchema as tb_link_pendataanMaxOrderByAggregateInputObjectSchema } from './tb_link_pendataanMaxOrderByAggregateInput.schema';
import { tb_link_pendataanMinOrderByAggregateInputObjectSchema as tb_link_pendataanMinOrderByAggregateInputObjectSchema } from './tb_link_pendataanMinOrderByAggregateInput.schema';
import { tb_link_pendataanSumOrderByAggregateInputObjectSchema as tb_link_pendataanSumOrderByAggregateInputObjectSchema } from './tb_link_pendataanSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tb_link_pendataanCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tb_link_pendataanAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tb_link_pendataanMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tb_link_pendataanMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tb_link_pendataanSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tb_link_pendataanOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanOrderByWithAggregationInput>;
export const tb_link_pendataanOrderByWithAggregationInputObjectZodSchema = makeSchema();
