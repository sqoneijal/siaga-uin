import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanCreateManyInputObjectSchema as tb_link_pendataanCreateManyInputObjectSchema } from './objects/tb_link_pendataanCreateManyInput.schema';

export const tb_link_pendataanCreateManySchema: z.ZodType<Prisma.tb_link_pendataanCreateManyArgs> = z.object({ data: z.union([ tb_link_pendataanCreateManyInputObjectSchema, z.array(tb_link_pendataanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanCreateManyArgs>;

export const tb_link_pendataanCreateManyZodSchema = z.object({ data: z.union([ tb_link_pendataanCreateManyInputObjectSchema, z.array(tb_link_pendataanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();