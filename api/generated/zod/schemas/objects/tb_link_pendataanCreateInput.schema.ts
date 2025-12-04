import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  link: z.string().optional().nullable()
}).strict();
export const tb_link_pendataanCreateInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanCreateInput>;
export const tb_link_pendataanCreateInputObjectZodSchema = makeSchema();
