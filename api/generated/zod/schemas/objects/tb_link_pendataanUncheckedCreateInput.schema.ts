import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  link: z.string().optional().nullable()
}).strict();
export const tb_link_pendataanUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanUncheckedCreateInput>;
export const tb_link_pendataanUncheckedCreateInputObjectZodSchema = makeSchema();
