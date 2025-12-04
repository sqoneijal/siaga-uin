import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { tb_link_pendataanSelectObjectSchema as tb_link_pendataanSelectObjectSchema } from './tb_link_pendataanSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tb_link_pendataanSelectObjectSchema).optional()
}).strict();
export const tb_link_pendataanArgsObjectSchema = makeSchema();
export const tb_link_pendataanArgsObjectZodSchema = makeSchema();
