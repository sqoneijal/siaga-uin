import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tb_programCountOrderByAggregateInputObjectSchema as tb_programCountOrderByAggregateInputObjectSchema } from './tb_programCountOrderByAggregateInput.schema';
import { tb_programAvgOrderByAggregateInputObjectSchema as tb_programAvgOrderByAggregateInputObjectSchema } from './tb_programAvgOrderByAggregateInput.schema';
import { tb_programMaxOrderByAggregateInputObjectSchema as tb_programMaxOrderByAggregateInputObjectSchema } from './tb_programMaxOrderByAggregateInput.schema';
import { tb_programMinOrderByAggregateInputObjectSchema as tb_programMinOrderByAggregateInputObjectSchema } from './tb_programMinOrderByAggregateInput.schema';
import { tb_programSumOrderByAggregateInputObjectSchema as tb_programSumOrderByAggregateInputObjectSchema } from './tb_programSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  judul: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  content: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  uploaded: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  modified: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tb_programCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tb_programAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tb_programMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tb_programMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tb_programSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tb_programOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tb_programOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_programOrderByWithAggregationInput>;
export const tb_programOrderByWithAggregationInputObjectZodSchema = makeSchema();
