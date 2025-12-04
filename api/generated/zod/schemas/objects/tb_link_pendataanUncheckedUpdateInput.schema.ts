import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tb_link_pendataanUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.tb_link_pendataanUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tb_link_pendataanUncheckedUpdateInput>;
export const tb_link_pendataanUncheckedUpdateInputObjectZodSchema = makeSchema();
