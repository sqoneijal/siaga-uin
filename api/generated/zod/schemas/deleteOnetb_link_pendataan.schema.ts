import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanSelectObjectSchema as tb_link_pendataanSelectObjectSchema } from './objects/tb_link_pendataanSelect.schema';
import { tb_link_pendataanWhereUniqueInputObjectSchema as tb_link_pendataanWhereUniqueInputObjectSchema } from './objects/tb_link_pendataanWhereUniqueInput.schema';

export const tb_link_pendataanDeleteOneSchema: z.ZodType<Prisma.tb_link_pendataanDeleteArgs> = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(),  where: tb_link_pendataanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanDeleteArgs>;

export const tb_link_pendataanDeleteOneZodSchema = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(),  where: tb_link_pendataanWhereUniqueInputObjectSchema }).strict();