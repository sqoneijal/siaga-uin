import { Request, Response, Router } from "express";
import { encode } from "html-entities";
import { prisma } from "../../lib/prisma";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
   try {
      const { content } = req.body;

      await prisma.tb_penerimaan.createMany({
         data: Object.values(content).map((item: any) => ({ ...item, tanggal: new Date() })),
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

      await prisma.tb_penerimaan.delete({
         where: { id: Number.parseInt(id) },
      });

      res.json({ status: true, message: "Data berhasil dihapus." });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.get("/", async (req: Request, res: Response) => {
   try {
      const { limit, offset, search } = req.query as any;

      const whereClause = search
         ? {
              OR: [{ nama: { contains: search, mode: "insensitive" as const } }, { nim: { contains: search, mode: "insensitive" as const } }],
           }
         : {};

      const [results, total, totalPenerimaan] = await Promise.all([
         prisma.tb_penerimaan.findMany({
            where: whereClause,
            take: Number.parseInt(limit),
            skip: Number.parseInt(offset),
            orderBy: { id: "desc" },
         }),
         prisma.tb_penerimaan.count({ where: whereClause }),
         prisma.tb_penerimaan.aggregate({
            _sum: {
               nominal: true,
            },
         }),
      ]);

      res.json({ results, total, totalPenerimaan: totalPenerimaan._sum.nominal ?? 0 });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

export default router;
