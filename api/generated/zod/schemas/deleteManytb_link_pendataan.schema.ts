import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanWhereInputObjectSchema as tb_link_pendataanWhereInputObjectSchema } from './objects/tb_link_pendataanWhereInput.schema';

export const tb_link_pendataanDeleteManySchema: z.ZodType<Prisma.tb_link_pendataanDeleteManyArgs> = z.object({ where: tb_link_pendataanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanDeleteManyArgs>;

export const tb_link_pendataanDeleteManyZodSchema = z.object({ where: tb_link_pendataanWhereInputObjectSchema.optional() }).strict();