import * as z from 'zod';
// prettier-ignore
export const tb_programResultSchema = z.object({
    id: z.number().int(),
    judul: z.string().nullable(),
    content: z.string().nullable(),
    uploaded: z.date().nullable(),
    modified: z.date().nullable()
}).strict();

export type tb_programResultType = z.infer<typeof tb_programResultSchema>;
