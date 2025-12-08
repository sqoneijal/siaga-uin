import { Request, Response, Router } from "express";
import { encode } from "html-entities";
import { prisma } from "../lib/prisma";

interface CreateGalleriBody {
   judul: string;
   link_folder_drive: string;
   daftarLink: Array<string>;
}

const router = Router();

router.post("/", async (req: Request, res: Response) => {
   try {
      const { judul, content, thumbnail } = req.body;

      await prisma.tb_berita.create({
         data: {
            judul,
            thumbnail,
            content: encode(content),
            uploaded: new Date(),
         },
      });

      res.json({ status: true, message: "Data berhasil disimpan." });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.put("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const { judul, content, thumbnail } = req.body;

      await prisma.tb_berita.update({
         where: { id: Number.parseInt(id) },
         data: {
            judul,
            thumbnail,
            content: encode(content),
            modified: new Date(),
         },
      });

      res.json({ status: true, message: "Data berhasil diperbaharui." });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.delete("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      await prisma.tb_berita.delete({
         where: { id: Number.parseInt(id) },
      });

      res.json({ status: true, message: "Data berhasil dihapus." });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.get("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      const results = await prisma.tb_berita.findUnique({
         where: { id: Number.parseInt(id) },
      });

      res.json(results);
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.get("/", async (req: Request, res: Response) => {
   try {
      const { limit, offset } = req.query as any;

      const [results, total] = await Promise.all([
         prisma.tb_berita.findMany({
            take: Number.parseInt(limit),
            skip: Number.parseInt(offset),
            orderBy: { id: "desc" },
         }),
         prisma.tb_berita.count(),
      ]);

      res.json({ results, total });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

export default router;
