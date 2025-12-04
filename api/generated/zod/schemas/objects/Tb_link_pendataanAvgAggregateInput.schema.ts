import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Tb_link_pendataanAvgAggregateInputObjectSchema: z.ZodType<Prisma.Tb_link_pendataanAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Tb_link_pendataanAvgAggregateInputType>;
export const Tb_link_pendataanAvgAggregateInputObjectZodSchema = makeSchema();
