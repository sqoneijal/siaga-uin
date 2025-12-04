import { z } from "zod";

const judul = z.preprocess((val) => (val === null ? "" : String(val)), z.string().min(1, "Judul wajib diisi"));

export const createSchemas = z.object({
   judul,
});

export const updateSchemas = z.object({
   judul,
});
