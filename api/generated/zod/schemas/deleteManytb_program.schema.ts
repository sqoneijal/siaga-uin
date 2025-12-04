import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programWhereInputObjectSchema as tb_programWhereInputObjectSchema } from './objects/tb_programWhereInput.schema';

export const tb_programDeleteManySchema: z.ZodType<Prisma.tb_programDeleteManyArgs> = z.object({ where: tb_programWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tb_programDeleteManyArgs>;

export const tb_programDeleteManyZodSchema = z.object({ where: tb_programWhereInputObjectSchema.optional() }).strict();