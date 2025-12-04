import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  judul: z.boolean().optional(),
  content: z.boolean().optional(),
  uploaded: z.boolean().optional(),
  modified: z.boolean().optional()
}).strict();
export const tb_programSelectObjectSchema: z.ZodType<Prisma.tb_programSelect> = makeSchema() as unknown as z.ZodType<Prisma.tb_programSelect>;
export const tb_programSelectObjectZodSchema = makeSchema();
