import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanOrderByWithRelationInputObjectSchema as tb_link_pendataanOrderByWithRelationInputObjectSchema } from './objects/tb_link_pendataanOrderByWithRelationInput.schema';
import { tb_link_pendataanWhereInputObjectSchema as tb_link_pendataanWhereInputObjectSchema } from './objects/tb_link_pendataanWhereInput.schema';
import { tb_link_pendataanWhereUniqueInputObjectSchema as tb_link_pendataanWhereUniqueInputObjectSchema } from './objects/tb_link_pendataanWhereUniqueInput.schema';
import { TbLinkPendataanScalarFieldEnumSchema } from './enums/TbLinkPendataanScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tb_link_pendataanFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tb_link_pendataanSelect> = z.object({
    id: z.boolean().optional(),
    link: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanSelect>;

export const tb_link_pendataanFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    link: z.boolean().optional()
  }).strict();

export const tb_link_pendataanFindFirstOrThrowSchema: z.ZodType<Prisma.tb_link_pendataanFindFirstOrThrowArgs> = z.object({ select: tb_link_pendataanFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([tb_link_pendataanOrderByWithRelationInputObjectSchema, tb_link_pendataanOrderByWithRelationInputObjectSchema.array()]).optional(), where: tb_link_pendataanWhereInputObjectSchema.optional(), cursor: tb_link_pendataanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TbLinkPendataanScalarFieldEnumSchema, TbLinkPendataanScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanFindFirstOrThrowArgs>;

export const tb_link_pendataanFindFirstOrThrowZodSchema = z.object({ select: tb_link_pendataanFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([tb_link_pendataanOrderByWithRelationInputObjectSchema, tb_link_pendataanOrderByWithRelationInputObjectSchema.array()]).optional(), where: tb_link_pendataanWhereInputObjectSchema.optional(), cursor: tb_link_pendataanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TbLinkPendataanScalarFieldEnumSchema, TbLinkPendataanScalarFieldEnumSchema.array()]).optional() }).strict();