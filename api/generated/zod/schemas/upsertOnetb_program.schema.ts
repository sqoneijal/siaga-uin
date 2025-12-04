import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programSelectObjectSchema as tb_programSelectObjectSchema } from './objects/tb_programSelect.schema';
import { tb_programWhereUniqueInputObjectSchema as tb_programWhereUniqueInputObjectSchema } from './objects/tb_programWhereUniqueInput.schema';
import { tb_programCreateInputObjectSchema as tb_programCreateInputObjectSchema } from './objects/tb_programCreateInput.schema';
import { tb_programUncheckedCreateInputObjectSchema as tb_programUncheckedCreateInputObjectSchema } from './objects/tb_programUncheckedCreateInput.schema';
import { tb_programUpdateInputObjectSchema as tb_programUpdateInputObjectSchema } from './objects/tb_programUpdateInput.schema';
import { tb_programUncheckedUpdateInputObjectSchema as tb_programUncheckedUpdateInputObjectSchema } from './objects/tb_programUncheckedUpdateInput.schema';

export const tb_programUpsertOneSchema: z.ZodType<Prisma.tb_programUpsertArgs> = z.object({ select: tb_programSelectObjectSchema.optional(),  where: tb_programWhereUniqueInputObjectSchema, create: z.union([ tb_programCreateInputObjectSchema, tb_programUncheckedCreateInputObjectSchema ]), update: z.union([ tb_programUpdateInputObjectSchema, tb_programUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tb_programUpsertArgs>;

export const tb_programUpsertOneZodSchema = z.object({ select: tb_programSelectObjectSchema.optional(),  where: tb_programWhereUniqueInputObjectSchema, create: z.union([ tb_programCreateInputObjectSchema, tb_programUncheckedCreateInputObjectSchema ]), update: z.union([ tb_programUpdateInputObjectSchema, tb_programUncheckedUpdateInputObjectSchema ]) }).strict();