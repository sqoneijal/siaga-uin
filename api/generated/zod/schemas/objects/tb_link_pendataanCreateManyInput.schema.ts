import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  link: z.string().optional().nullable()
}).strict();
export const tb_link_pendataanCreateManyInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanCreateManyInput>;
export const tb_link_pendataanCreateManyInputObjectZodSchema = makeSchema();
