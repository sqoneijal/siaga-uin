import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const tb_link_pendataanscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tb_link_pendataanScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tb_link_pendataanScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tb_link_pendataanScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tb_link_pendataanScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tb_link_pendataanScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  link: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const tb_link_pendataanScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanScalarWhereWithAggregatesInput> = tb_link_pendataanscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tb_link_pendataanScalarWhereWithAggregatesInput>;
export const tb_link_pendataanScalarWhereWithAggregatesInputObjectZodSchema = tb_link_pendataanscalarwherewithaggregatesinputSchema;
