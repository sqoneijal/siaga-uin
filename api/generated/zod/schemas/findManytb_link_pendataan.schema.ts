import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_link_pendataanOrderByWithRelationInputObjectSchema as tb_link_pendataanOrderByWithRelationInputObjectSchema } from './objects/tb_link_pendataanOrderByWithRelationInput.schema';
import { tb_link_pendataanWhereInputObjectSchema as tb_link_pendataanWhereInputObjectSchema } from './objects/tb_link_pendataanWhereInput.schema';
import { tb_link_pendataanWhereUniqueInputObjectSchema as tb_link_pendataanWhereUniqueInputObjectSchema } from './objects/tb_link_pendataanWhereUniqueInput.schema';
import { TbLinkPendataanScalarFieldEnumSchema } from './enums/TbLinkPendataanScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tb_link_pendataanFindManySelectSchema: z.ZodType<Prisma.tb_link_pendataanSelect> = z.object({
    id: z.boolean().optional(),
    link: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanSelect>;

export const tb_link_pendataanFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    link: z.boolean().optional()
  }).strict();

export const tb_link_pendataanFindManySchema: z.ZodType<Prisma.tb_link_pendataanFindManyArgs> = z.object({ select: tb_link_pendataanFindManySelectSchema.optional(),  orderBy: z.union([tb_link_pendataanOrderByWithRelationInputObjectSchema, tb_link_pendataanOrderByWithRelationInputObjectSchema.array()]).optional(), where: tb_link_pendataanWhereInputObjectSchema.optional(), cursor: tb_link_pendataanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TbLinkPendataanScalarFieldEnumSchema, TbLinkPendataanScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tb_link_pendataanFindManyArgs>;

export const tb_link_pendataanFindManyZodSchema = z.object({ select: tb_link_pendataanFindManySelectSchema.optional(),  orderBy: z.union([tb_link_pendataanOrderByWithRelationInputObjectSchema, tb_link_pendataanOrderByWithRelationInputObjectSchema.array()]).optional(), where: tb_link_pendataanWhereInputObjectSchema.optional(), cursor: tb_link_pendataanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TbLinkPendataanScalarFieldEnumSchema, TbLinkPendataanScalarFieldEnumSchema.array()]).optional() }).strict();