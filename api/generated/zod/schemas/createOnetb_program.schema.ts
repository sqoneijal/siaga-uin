import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programSelectObjectSchema as tb_programSelectObjectSchema } from './objects/tb_programSelect.schema';
import { tb_programCreateInputObjectSchema as tb_programCreateInputObjectSchema } from './objects/tb_programCreateInput.schema';
import { tb_programUncheckedCreateInputObjectSchema as tb_programUncheckedCreateInputObjectSchema } from './objects/tb_programUncheckedCreateInput.schema';

export const tb_programCreateOneSchema: z.ZodType<Prisma.tb_programCreateArgs> = z.object({ select: tb_programSelectObjectSchema.optional(),  data: z.union([tb_programCreateInputObjectSchema, tb_programUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tb_programCreateArgs>;

export const tb_programCreateOneZodSchema = z.object({ select: tb_programSelectObjectSchema.optional(),  data: z.union([tb_programCreateInputObjectSchema, tb_programUncheckedCreateInputObjectSchema]) }).strict();