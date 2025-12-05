import { Request, Response, Router } from "express";
import { encode } from "html-entities";
import { prisma } from "../lib/prisma";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      const results = await prisma.tb_misi.findUnique({
         where: { id: Number.parseInt(id) },
      });

      res.json(results);
   } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : "An error occurred" });
   }
});

router.put("/:id", async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const { content } = req.body;

      await prisma.tb_misi.update({
         where: { id: Number.parseInt(id) },
         data: {
            content: encode(content),
         },
      });

      res.json({ status: true, message: "Data berhasil diperbaharui" });
   } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : "An error occurred" });
   }
});

export default router;
