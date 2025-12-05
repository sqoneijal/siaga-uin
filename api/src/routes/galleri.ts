import axios from "axios";
import * as cheerio from "cheerio";
import { Request, Response, Router } from "express";
import { prisma } from "../lib/prisma";

const router = Router();

const getImage = async (folder_id: string) => {
   const driveUrl = `https://drive.google.com/embeddedfolderview?id=${folder_id}#list`;

   const response = await axios.get(driveUrl);
   const html = response.data;

   const $ = cheerio.load(html);
   const results: Array<{ id: string; preview: string; download: string }> = [];

   $(".flip-entries").each((_, el) => {
      const id = $(el).attr("data-id");
      if (id) {
         results.push({
            id,
            preview: `https://drive.google.com/file/d/${id}/view`,
            download: `https://drive.google.com/uc?export=download&id=${id}`,
         });
      }
   });

   return results;
};

router.get("/new", async (req: Request, res: Response) => {
   try {
      const content = await prisma.tb_galleri.findMany({
         take: 5,
         orderBy: {
            id: "desc",
         },
      });

      const results: Array<{
         id: number;
         judul: string | null;
         link_folder_drive: string | null;
         image: Promise<Array<{ id: string; preview: string; download: string }>>;
      }> = [];

      content.map((row) => {
         results.push({ ...row, image: row.link_folder_drive ? getImage(row.link_folder_drive) : Promise.resolve([]) });
      });

      res.json({ results });
   } catch (error) {
      res.status(500).json({ message: (error as Error)?.message });
   }
});

router.post("/", async (req: Request, res: Response) => {
   try {
      const { judul, link_folder_drive } = req.body;

      await prisma.tb_galleri.create({
         data: {
            judul,
            link_folder_drive,
         },
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
