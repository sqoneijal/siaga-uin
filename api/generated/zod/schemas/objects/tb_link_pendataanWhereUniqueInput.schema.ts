import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const tb_link_pendataanWhereUniqueInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanWhereUniqueInput>;
export const tb_link_pendataanWhereUniqueInputObjectZodSchema = makeSchema();
