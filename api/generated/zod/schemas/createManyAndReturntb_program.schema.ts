import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programSelectObjectSchema as tb_programSelectObjectSchema } from './objects/tb_programSelect.schema';
import { tb_programCreateManyInputObjectSchema as tb_programCreateManyInputObjectSchema } from './objects/tb_programCreateManyInput.schema';

export const tb_programCreateManyAndReturnSchema: z.ZodType<Prisma.tb_programCreateManyAndReturnArgs> = z.object({ select: tb_programSelectObjectSchema.optional(), data: z.union([ tb_programCreateManyInputObjectSchema, z.array(tb_programCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.tb_programCreateManyAndReturnArgs>;

export const tb_programCreateManyAndReturnZodSchema = z.object({ select: tb_programSelectObjectSchema.optional(), data: z.union([ tb_programCreateManyInputObjectSchema, z.array(tb_programCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();