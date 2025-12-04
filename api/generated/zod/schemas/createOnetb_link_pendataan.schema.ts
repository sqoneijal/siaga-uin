import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanSelectObjectSchema as tb_link_pendataanSelectObjectSchema } from './objects/tb_link_pendataanSelect.schema';
import { tb_link_pendataanCreateInputObjectSchema as tb_link_pendataanCreateInputObjectSchema } from './objects/tb_link_pendataanCreateInput.schema';
import { tb_link_pendataanUncheckedCreateInputObjectSchema as tb_link_pendataanUncheckedCreateInputObjectSchema } from './objects/tb_link_pendataanUncheckedCreateInput.schema';

export const tb_link_pendataanCreateOneSchema: z.ZodType<Prisma.tb_link_pendataanCreateArgs> = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(),  data: z.union([tb_link_pendataanCreateInputObjectSchema, tb_link_pendataanUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanCreateArgs>;

export const tb_link_pendataanCreateOneZodSchema = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(),  data: z.union([tb_link_pendataanCreateInputObjectSchema, tb_link_pendataanUncheckedCreateInputObjectSchema]) }).strict();