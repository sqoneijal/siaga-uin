import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanSelectObjectSchema as tb_link_pendataanSelectObjectSchema } from './objects/tb_link_pendataanSelect.schema';
import { tb_link_pendataanUpdateManyMutationInputObjectSchema as tb_link_pendataanUpdateManyMutationInputObjectSchema } from './objects/tb_link_pendataanUpdateManyMutationInput.schema';
import { tb_link_pendataanWhereInputObjectSchema as tb_link_pendataanWhereInputObjectSchema } from './objects/tb_link_pendataanWhereInput.schema';

export const tb_link_pendataanUpdateManyAndReturnSchema: z.ZodType<Prisma.tb_link_pendataanUpdateManyAndReturnArgs> = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(), data: tb_link_pendataanUpdateManyMutationInputObjectSchema, where: tb_link_pendataanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanUpdateManyAndReturnArgs>;

export const tb_link_pendataanUpdateManyAndReturnZodSchema = z.object({ select: tb_link_pendataanSelectObjectSchema.optional(), data: tb_link_pendataanUpdateManyMutationInputObjectSchema, where: tb_link_pendataanWhereInputObjectSchema.optional() }).strict();