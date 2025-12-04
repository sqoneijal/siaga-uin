import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const tb_link_pendataanwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tb_link_pendataanWhereInputObjectSchema), z.lazy(() => tb_link_pendataanWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tb_link_pendataanWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tb_link_pendataanWhereInputObjectSchema), z.lazy(() => tb_link_pendataanWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  link: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const tb_link_pendataanWhereInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanWhereInput> = tb_link_pendataanwhereinputSchema as unknown as z.ZodType<Prisma.tb_link_pendataanWhereInput>;
export const tb_link_pendataanWhereInputObjectZodSchema = tb_link_pendataanwhereinputSchema;
