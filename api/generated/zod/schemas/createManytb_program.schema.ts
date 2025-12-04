import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programCreateManyInputObjectSchema as tb_programCreateManyInputObjectSchema } from './objects/tb_programCreateManyInput.schema';

export const tb_programCreateManySchema: z.ZodType<Prisma.tb_programCreateManyArgs> = z.object({ data: z.union([ tb_programCreateManyInputObjectSchema, z.array(tb_programCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.tb_programCreateManyArgs>;

export const tb_programCreateManyZodSchema = z.object({ data: z.union([ tb_programCreateManyInputObjectSchema, z.array(tb_programCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();