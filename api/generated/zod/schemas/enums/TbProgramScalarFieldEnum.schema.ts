import * as z from 'zod';

export const TbProgramScalarFieldEnumSchema = z.enum(['id', 'judul', 'content', 'uploaded', 'modified'])

export type TbProgramScalarFieldEnum = z.infer<typeof TbProgramScalarFieldEnumSchema>;