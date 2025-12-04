import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanUpdateManyMutationInputObjectSchema as tb_link_pendataanUpdateManyMutationInputObjectSchema } from './objects/tb_link_pendataanUpdateManyMutationInput.schema';
import { tb_link_pendataanWhereInputObjectSchema as tb_link_pendataanWhereInputObjectSchema } from './objects/tb_link_pendataanWhereInput.schema';

export const tb_link_pendataanUpdateManySchema: z.ZodType<Prisma.tb_link_pendataanUpdateManyArgs> = z.object({ data: tb_link_pendataanUpdateManyMutationInputObjectSchema, where: tb_link_pendataanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanUpdateManyArgs>;

export const tb_link_pendataanUpdateManyZodSchema = z.object({ data: tb_link_pendataanUpdateManyMutationInputObjectSchema, where: tb_link_pendataanWhereInputObjectSchema.optional() }).strict();