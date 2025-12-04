import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanSelectObjectSchema as tb_link_pendataanSelectObjectSchema } from './objects/tb_link_pendataanSelect.schema';
import { tb_link_pendataanCreateManyInputObjectSchema as tb_link_pendataanCreateManyInputObjectSchema } from './objects/tb_link_pendataanCreateManyInput.schema';

export const tb_link_pendataanCreateManyAndReturnSchema: z.ZodType<Prisma.tb_link_pendataanCreateManyAndReturnArgs> = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(), data: z.union([ tb_link_pendataanCreateManyInputObjectSchema, z.array(tb_link_pendataanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanCreateManyAndReturnArgs>;

export const tb_link_pendataanCreateManyAndReturnZodSchema = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(), data: z.union([ tb_link_pendataanCreateManyInputObjectSchema, z.array(tb_link_pendataanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();