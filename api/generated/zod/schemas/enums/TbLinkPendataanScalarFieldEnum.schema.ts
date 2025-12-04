import * as z from 'zod';

export const TbLinkPendataanScalarFieldEnumSchema = z.enum(['id', 'link'])

export type TbLinkPendataanScalarFieldEnum = z.infer<typeof TbLinkPendataanScalarFieldEnumSchema>;