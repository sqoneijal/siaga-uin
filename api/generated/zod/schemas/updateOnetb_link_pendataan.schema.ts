import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanSelectObjectSchema as tb_link_pendataanSelectObjectSchema } from './objects/tb_link_pendataanSelect.schema';
import { tb_link_pendataanUpdateInputObjectSchema as tb_link_pendataanUpdateInputObjectSchema } from './objects/tb_link_pendataanUpdateInput.schema';
import { tb_link_pendataanUncheckedUpdateInputObjectSchema as tb_link_pendataanUncheckedUpdateInputObjectSchema } from './objects/tb_link_pendataanUncheckedUpdateInput.schema';
import { tb_link_pendataanWhereUniqueInputObjectSchema as tb_link_pendataanWhereUniqueInputObjectSchema } from './objects/tb_link_pendataanWhereUniqueInput.schema';

export const tb_link_pendataanUpdateOneSchema: z.ZodType<Prisma.tb_link_pendataanUpdateArgs> = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(),  data: z.union([tb_link_pendataanUpdateInputObjectSchema, tb_link_pendataanUncheckedUpdateInputObjectSchema]), where: tb_link_pendataanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanUpdateArgs>;

export const tb_link_pendataanUpdateOneZodSchema = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(),  data: z.union([tb_link_pendataanUpdateInputObjectSchema, tb_link_pendataanUncheckedUpdateInputObjectSchema]), where: tb_link_pendataanWhereUniqueInputObjectSchema }).strict();