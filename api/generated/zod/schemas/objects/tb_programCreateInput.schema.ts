import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  judul: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  uploaded: z.coerce.date().optional().nullable(),
  modified: z.coerce.date().optional().nullable()
}).strict();
export const tb_programCreateInputObjectSchema: z.ZodType<Prisma.tb_programCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_programCreateInput>;
export const tb_programCreateInputObjectZodSchema = makeSchema();
