import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programSelectObjectSchema as tb_programSelectObjectSchema } from './objects/tb_programSelect.schema';
import { tb_programUpdateInputObjectSchema as tb_programUpdateInputObjectSchema } from './objects/tb_programUpdateInput.schema';
import { tb_programUncheckedUpdateInputObjectSchema as tb_programUncheckedUpdateInputObjectSchema } from './objects/tb_programUncheckedUpdateInput.schema';
import { tb_programWhereUniqueInputObjectSchema as tb_programWhereUniqueInputObjectSchema } from './objects/tb_programWhereUniqueInput.schema';

export const tb_programUpdateOneSchema: z.ZodType<Prisma.tb_programUpdateArgs> = z.object({ select: tb_programSelectObjectSchema.optional(),  data: z.union([tb_programUpdateInputObjectSchema, tb_programUncheckedUpdateInputObjectSchema]), where: tb_programWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tb_programUpdateArgs>;

export const tb_programUpdateOneZodSchema = z.object({ select: tb_programSelectObjectSchema.optional(),  data: z.union([tb_programUpdateInputObjectSchema, tb_programUncheckedUpdateInputObjectSchema]), where: tb_programWhereUniqueInputObjectSchema }).strict();