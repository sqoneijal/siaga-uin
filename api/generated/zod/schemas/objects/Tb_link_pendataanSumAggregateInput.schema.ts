import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Tb_link_pendataanSumAggregateInputObjectSchema: z.ZodType<Prisma.Tb_link_pendataanSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Tb_link_pendataanSumAggregateInputType>;
export const Tb_link_pendataanSumAggregateInputObjectZodSchema = makeSchema();
