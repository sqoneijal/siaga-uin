import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  judul: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  uploaded: z.coerce.date().optional().nullable(),
  modified: z.coerce.date().optional().nullable()
}).strict();
export const tb_programCreateManyInputObjectSchema: z.ZodType<Prisma.tb_programCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_programCreateManyInput>;
export const tb_programCreateManyInputObjectZodSchema = makeSchema();
