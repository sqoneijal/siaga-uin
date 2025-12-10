import { Request, Response, Router } from "express";
import { prisma } from "../../lib/prisma";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
   try {
      const { nama, keterangan, link } = req.body;

      await prisma.tb_link_penting.create({
         data: {
            nama,
            keterangan,
            link,
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
      const { nama, keterangan, link } = req.body;

      await prisma.tb_link_penting.update({
         where: { id: Number.parseInt(id) },
         data: {
            nama,
            keterangan,
            link,
         },
      });

      res.json({ status: true, message: "Data berhasil diperbaharui." });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.get("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      const results = await prisma.tb_link_penting.findUnique({
         where: { id: Number.parseInt(id) },
      });

      res.json(results);
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.delete("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      await prisma.tb_link_penting.delete({
         where: { id: Number.parseInt(id) },
      });

      res.json({ status: true, message: "Data berhasil dihapus." });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.get("/", async (req: Request, res: Response) => {
   try {
      const { limit, offset } = req.query as any;

      const [results, total] = await Promise.all([
         prisma.tb_link_penting.findMany({
            take: Number.parseInt(limit),
            skip: Number.parseInt(offset),
            orderBy: { id: "desc" },
         }),
         prisma.tb_link_penting.count(),
      ]);

      res.json({ results, total });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

export default router;
