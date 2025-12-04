import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const tb_programWhereUniqueInputObjectSchema: z.ZodType<Prisma.tb_programWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_programWhereUniqueInput>;
export const tb_programWhereUniqueInputObjectZodSchema = makeSchema();
