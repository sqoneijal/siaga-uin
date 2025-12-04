import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanSelectObjectSchema as tb_link_pendataanSelectObjectSchema } from './objects/tb_link_pendataanSelect.schema';
import { tb_link_pendataanWhereUniqueInputObjectSchema as tb_link_pendataanWhereUniqueInputObjectSchema } from './objects/tb_link_pendataanWhereUniqueInput.schema';
import { tb_link_pendataanCreateInputObjectSchema as tb_link_pendataanCreateInputObjectSchema } from './objects/tb_link_pendataanCreateInput.schema';
import { tb_link_pendataanUncheckedCreateInputObjectSchema as tb_link_pendataanUncheckedCreateInputObjectSchema } from './objects/tb_link_pendataanUncheckedCreateInput.schema';
import { tb_link_pendataanUpdateInputObjectSchema as tb_link_pendataanUpdateInputObjectSchema } from './objects/tb_link_pendataanUpdateInput.schema';
import { tb_link_pendataanUncheckedUpdateInputObjectSchema as tb_link_pendataanUncheckedUpdateInputObjectSchema } from './objects/tb_link_pendataanUncheckedUpdateInput.schema';

export const tb_link_pendataanUpsertOneSchema: z.ZodType<Prisma.tb_link_pendataanUpsertArgs> = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(),  where: tb_link_pendataanWhereUniqueInputObjectSchema, create: z.union([ tb_link_pendataanCreateInputObjectSchema, tb_link_pendataanUncheckedCreateInputObjectSchema ]), update: z.union([ tb_link_pendataanUpdateInputObjectSchema, tb_link_pendataanUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanUpsertArgs>;

export const tb_link_pendataanUpsertOneZodSchema = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(),  where: tb_link_pendataanWhereUniqueInputObjectSchema, create: z.union([ tb_link_pendataanCreateInputObjectSchema, tb_link_pendataanUncheckedCreateInputObjectSchema ]), update: z.union([ tb_link_pendataanUpdateInputObjectSchema, tb_link_pendataanUncheckedUpdateInputObjectSchema ]) }).strict();