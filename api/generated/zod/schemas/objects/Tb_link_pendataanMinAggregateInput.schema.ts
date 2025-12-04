import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  link: z.literal(true).optional()
}).strict();
export const Tb_link_pendataanMinAggregateInputObjectSchema: z.ZodType<Prisma.Tb_link_pendataanMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Tb_link_pendataanMinAggregateInputType>;
export const Tb_link_pendataanMinAggregateInputObjectZodSchema = makeSchema();
