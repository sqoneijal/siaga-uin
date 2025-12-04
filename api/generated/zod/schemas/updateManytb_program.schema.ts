import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programUpdateManyMutationInputObjectSchema as tb_programUpdateManyMutationInputObjectSchema } from './objects/tb_programUpdateManyMutationInput.schema';
import { tb_programWhereInputObjectSchema as tb_programWhereInputObjectSchema } from './objects/tb_programWhereInput.schema';

export const tb_programUpdateManySchema: z.ZodType<Prisma.tb_programUpdateManyArgs> = z.object({ data: tb_programUpdateManyMutationInputObjectSchema, where: tb_programWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tb_programUpdateManyArgs>;

export const tb_programUpdateManyZodSchema = z.object({ data: tb_programUpdateManyMutationInputObjectSchema, where: tb_programWhereInputObjectSchema.optional() }).strict();