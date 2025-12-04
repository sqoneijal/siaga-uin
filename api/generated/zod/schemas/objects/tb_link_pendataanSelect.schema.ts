import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  link: z.boolean().optional()
}).strict();
export const tb_link_pendataanSelectObjectSchema: z.ZodType<Prisma.tb_link_pendataanSelect> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanSelect>;
export const tb_link_pendataanSelectObjectZodSchema = makeSchema();
