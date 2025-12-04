import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  link: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const tb_link_pendataanOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanOrderByWithRelationInput>;
export const tb_link_pendataanOrderByWithRelationInputObjectZodSchema = makeSchema();
