import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { tb_programSelectObjectSchema as tb_programSelectObjectSchema } from './tb_programSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tb_programSelectObjectSchema).optional()
}).strict();
export const tb_programArgsObjectSchema = makeSchema();
export const tb_programArgsObjectZodSchema = makeSchema();
