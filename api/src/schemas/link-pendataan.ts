import { z } from "zod";

const id_fakultas = z.preprocess((val) => (val === null ? "" : String(val)), z.string().min(1, "Fakultas wajib diisi"));
const link = z.preprocess((val) => (val === null ? "" : String(val)), z.string().min(1, "Link wajib diisi"));

export const createSchemas = z.object({
   id_fakultas,
});

export const updateSchemas = z.object({
   link,
});
