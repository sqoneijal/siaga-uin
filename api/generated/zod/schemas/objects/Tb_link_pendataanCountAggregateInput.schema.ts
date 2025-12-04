import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  link: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Tb_link_pendataanCountAggregateInputObjectSchema: z.ZodType<Prisma.Tb_link_pendataanCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Tb_link_pendataanCountAggregateInputType>;
export const Tb_link_pendataanCountAggregateInputObjectZodSchema = makeSchema();
