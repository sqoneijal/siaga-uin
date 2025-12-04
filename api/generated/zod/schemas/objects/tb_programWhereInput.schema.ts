import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tb_programwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tb_programWhereInputObjectSchema), z.lazy(() => tb_programWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tb_programWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tb_programWhereInputObjectSchema), z.lazy(() => tb_programWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  judul: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  uploaded: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  modified: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tb_programWhereInputObjectSchema: z.ZodType<Prisma.tb_programWhereInput> = tb_programwhereinputSchema as unknown as z.ZodType<Prisma.tb_programWhereInput>;
export const tb_programWhereInputObjectZodSchema = tb_programwhereinputSchema;
