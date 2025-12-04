import * as z from 'zod';
// prettier-ignore
export const tb_link_pendataanInputSchema = z.object({
    id: z.number().int(),
    link: z.string().optional().nullable()
}).strict();

export type tb_link_pendataanInputType = z.infer<typeof tb_link_pendataanInputSchema>;
