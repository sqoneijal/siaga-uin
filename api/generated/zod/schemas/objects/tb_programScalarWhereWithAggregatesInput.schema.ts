import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const tb_programscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tb_programScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tb_programScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tb_programScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tb_programScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tb_programScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  judul: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  uploaded: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  modified: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tb_programScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tb_programScalarWhereWithAggregatesInput> = tb_programscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tb_programScalarWhereWithAggregatesInput>;
export const tb_programScalarWhereWithAggregatesInputObjectZodSchema = tb_programscalarwherewithaggregatesinputSchema;
