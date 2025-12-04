import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programSelectObjectSchema as tb_programSelectObjectSchema } from './objects/tb_programSelect.schema';
import { tb_programWhereUniqueInputObjectSchema as tb_programWhereUniqueInputObjectSchema } from './objects/tb_programWhereUniqueInput.schema';

export const tb_programDeleteOneSchema: z.ZodType<Prisma.tb_programDeleteArgs> = z.object({ select: tb_programSelectObjectSchema.optional(),  where: tb_programWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tb_programDeleteArgs>;

export const tb_programDeleteOneZodSchema = z.object({ select: tb_programSelectObjectSchema.optional(),  where: tb_programWhereUniqueInputObjectSchema }).strict();