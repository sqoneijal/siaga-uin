import { Request, Response, Router } from "express";
import { encode } from "html-entities";
import { prisma } from "../lib/prisma";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
   const { limit, offset } = req.query as any;

   const [results, total] = await Promise.all([
      prisma.tb_program.findMany({
         take: Number.parseInt(limit),
         skip: Number.parseInt(offset),
      }),
      prisma.tb_program.count(),
   ]);

   res.json({ results, total });
});

router.get("/:id", async (req: Request, res: Response) => {
   const { id } = req.params;

   const results = await prisma.tb_program.findUnique({
      where: { id: Number.parseInt(id) },
   });

   res.json(results);
});

router.post("/", async (req: Request, res: Response) => {
   const { judul, content } = req.body;

   await prisma.tb_program.create({
      data: {
         judul,
         content: encode(content),
         uploaded: new Date(),
      },
   });

   res.json({ status: true, message: "Data berhasil ditambahkan" });
});

router.put("/:id", async (req: Request, res: Response) => {
   const { id } = req.params;
   const { judul, content } = req.body;

   await prisma.tb_program.update({
      where: { id: Number.parseInt(id) },
      data: {
         judul,
         content: encode(content),
         modified: new Date(),
      },
   });

   res.json({ status: true, message: "Data berhasil diperbaharui" });
});

router.delete("/:id", async (req: Request, res: Response) => {
   const { id } = req.params;

   await prisma.tb_program.delete({
      where: { id: Number.parseInt(id) },
   });

   res.json({ message: "Data berhasil dihapus." });
});

export default router;
