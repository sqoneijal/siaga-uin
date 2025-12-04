import * as z from 'zod';
// prettier-ignore
export const tb_programInputSchema = z.object({
    id: z.number().int(),
    judul: z.string().optional().nullable(),
    content: z.string().optional().nullable(),
    uploaded: z.date().optional().nullable(),
    modified: z.date().optional().nullable()
}).strict();

export type tb_programInputType = z.infer<typeof tb_programInputSchema>;
