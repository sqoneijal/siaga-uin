import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tb_link_pendataanUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanUpdateManyMutationInput>;
export const tb_link_pendataanUpdateManyMutationInputObjectZodSchema = makeSchema();
