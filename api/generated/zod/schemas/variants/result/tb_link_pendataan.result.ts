import * as z from 'zod';
// prettier-ignore
export const tb_link_pendataanResultSchema = z.object({
    id: z.number().int(),
    link: z.string().nullable()
}).strict();

export type tb_link_pendataanResultType = z.infer<typeof tb_link_pendataanResultSchema>;
