import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programSelectObjectSchema as tb_programSelectObjectSchema } from './objects/tb_programSelect.schema';
import { tb_programUpdateManyMutationInputObjectSchema as tb_programUpdateManyMutationInputObjectSchema } from './objects/tb_programUpdateManyMutationInput.schema';
import { tb_programWhereInputObjectSchema as tb_programWhereInputObjectSchema } from './objects/tb_programWhereInput.schema';

export const tb_programUpdateManyAndReturnSchema: z.ZodType<Prisma.tb_programUpdateManyAndReturnArgs> = z.object({ select: tb_programSelectObjectSchema.optional(), data: tb_programUpdateManyMutationInputObjectSchema, where: tb_programWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tb_programUpdateManyAndReturnArgs>;

export const tb_programUpdateManyAndReturnZodSchema = z.object({ select: tb_programSelectObjectSchema.optional(), data: tb_programUpdateManyMutationInputObjectSchema, where: tb_programWhereInputObjectSchema.optional() }).strict();