import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programOrderByWithRelationInputObjectSchema as tb_programOrderByWithRelationInputObjectSchema } from './objects/tb_programOrderByWithRelationInput.schema';
import { tb_programWhereInputObjectSchema as tb_programWhereInputObjectSchema } from './objects/tb_programWhereInput.schema';
import { tb_programWhereUniqueInputObjectSchema as tb_programWhereUniqueInputObjectSchema } from './objects/tb_programWhereUniqueInput.schema';
import { TbProgramScalarFieldEnumSchema } from './enums/TbProgramScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tb_programFindFirstSelectSchema: z.ZodType<Prisma.tb_programSelect> = z.object({
    id: z.boolean().optional(),
    judul: z.boolean().optional(),
    content: z.boolean().optional(),
    uploaded: z.boolean().optional(),
    modified: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tb_programSelect>;

export const tb_programFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    judul: z.boolean().optional(),
    content: z.boolean().optional(),
    uploaded: z.boolean().optional(),
    modified: z.boolean().optional()
  }).strict();

export const tb_programFindFirstSchema: z.ZodType<Prisma.tb_programFindFirstArgs> = z.object({ select: tb_programFindFirstSelectSchema.optional(),  orderBy: z.union([tb_programOrderByWithRelationInputObjectSchema, tb_programOrderByWithRelationInputObjectSchema.array()]).optional(), where: tb_programWhereInputObjectSchema.optional(), cursor: tb_programWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TbProgramScalarFieldEnumSchema, TbProgramScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tb_programFindFirstArgs>;

export const tb_programFindFirstZodSchema = z.object({ select: tb_programFindFirstSelectSchema.optional(),  orderBy: z.union([tb_programOrderByWithRelationInputObjectSchema, tb_programOrderByWithRelationInputObjectSchema.array()]).optional(), where: tb_programWhereInputObjectSchema.optional(), cursor: tb_programWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TbProgramScalarFieldEnumSchema, TbProgramScalarFieldEnumSchema.array()]).optional() }).strict();