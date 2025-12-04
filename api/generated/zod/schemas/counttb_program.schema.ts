import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { tb_programOrderByWithRelationInputObjectSchema as tb_programOrderByWithRelationInputObjectSchema } from './objects/tb_programOrderByWithRelationInput.schema';
import { tb_programWhereInputObjectSchema as tb_programWhereInputObjectSchema } from './objects/tb_programWhereInput.schema';
import { tb_programWhereUniqueInputObjectSchema as tb_programWhereUniqueInputObjectSchema } from './objects/tb_programWhereUniqueInput.schema';
import { Tb_programCountAggregateInputObjectSchema as Tb_programCountAggregateInputObjectSchema } from './objects/Tb_programCountAggregateInput.schema';

export const tb_programCountSchema: z.ZodType<Prisma.tb_programCountArgs> = z.object({ orderBy: z.union([tb_programOrderByWithRelationInputObjectSchema, tb_programOrderByWithRelationInputObjectSchema.array()]).optional(), where: tb_programWhereInputObjectSchema.optional(), cursor: tb_programWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Tb_programCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tb_programCountArgs>;

export const tb_programCountZodSchema = z.object({ orderBy: z.union([tb_programOrderByWithRelationInputObjectSchema, tb_programOrderByWithRelationInputObjectSchema.array()]).optional(), where: tb_programWhereInputObjectSchema.optional(), cursor: tb_programWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Tb_programCountAggregateInputObjectSchema ]).optional() }).strict();