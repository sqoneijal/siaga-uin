import { Request, Response, Router } from "express";
import { prisma } from "../lib/prisma";

interface CreateGalleriBody {
   judul: string;
   link_folder_drive: string;
   daftarLink: Array<string>;
}

const router = Router();

router.get("/new", async (req: Request, res: Response) => {
   try {
      const results = await prisma.tb_galleri.findMany({
         take: 5,
         orderBy: {
            id: "desc",
         },
         include: {
            galleri_detail: {
               select: {
                  id: true,
                  path: true,
               },
            },
         },
      });

      res.json({ results });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.post("/", async (req: Request<{}, {}, CreateGalleriBody>, res: Response) => {
   try {
      const { judul, daftarLink } = req.body;

      const galleri = await prisma.tb_galleri.create({
         data: {
            judul,
         },
      });

      const galleriDetail: Array<{ path: string; id_galleri: number }> = [];
      for (const item of daftarLink) {
         galleriDetail.push({
            path: item,
            id_galleri: galleri?.id,
         });
      }

      await prisma.tb_galleri_detail.createMany({
         data: galleriDetail,
      });

      res.json({ status: true, message: "Data berhasil disimpan." });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.delete("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      await prisma.tb_galleri.delete({
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
         prisma.tb_galleri.findMany({
            take: Number.parseInt(limit),
            skip: Number.parseInt(offset),
         }),
         prisma.tb_galleri.count(),
      ]);

      res.json({ results, total });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

export default router;
