import { Request, Response, Router } from "express";
import { prisma } from "../../lib/prisma";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
   try {
      const { id_program, jumlah_penerima, total_dana, tanggal } = req.body;

      await prisma.tb_penyaluran.create({
         data: {
            id_program: Number.parseInt(id_program),
            jumlah_penerima: Number.parseInt(jumlah_penerima),
            total_dana: Number.parseInt(total_dana),
            tanggal: new Date(tanggal),
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
      const { id_program, jumlah_penerima, total_dana, tanggal } = req.body;

      await prisma.tb_penyaluran.update({
         where: { id: Number.parseInt(id) },
         data: {
            id_program: Number.parseInt(id_program),
            jumlah_penerima: Number.parseInt(jumlah_penerima),
            total_dana: Number.parseInt(total_dana),
            tanggal: new Date(tanggal),
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

      await prisma.tb_penyaluran.delete({
         where: { id: Number.parseInt(id) },
      });

      res.json({ status: true, message: "Data berhasil dihapus." });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.get("/program", async (req: Request, res: Response) => {
   try {
      const results = await prisma.tb_program.findMany({
         orderBy: { judul: "asc" },
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
         prisma.tb_penyaluran.findMany({
            take: Number.parseInt(limit),
            skip: Number.parseInt(offset),
            orderBy: { id: "desc" },
            include: { program: true },
         }),
         prisma.tb_penyaluran.count(),
      ]);

      res.json({ results, total });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.get("/total", async (req: Request, res: Response) => {
   try {
      const [jumlah_penerima, total_dana, jumlah_program] = await Promise.all([
         prisma.tb_penyaluran.aggregate({
            _sum: {
               jumlah_penerima: true,
            },
         }),
         prisma.tb_penyaluran.aggregate({
            _sum: {
               total_dana: true,
            },
         }),
         prisma.tb_program.count(),
      ]);

      res.json({ jumlah_penerima: jumlah_penerima._sum.jumlah_penerima ?? 0, total_dana: total_dana._sum.total_dana ?? 0, jumlah_program });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.get("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      const results = await prisma.tb_penyaluran.findUnique({
         where: {
            id: Number.parseInt(id),
         },
      });

      res.json(results);
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

export default router;
