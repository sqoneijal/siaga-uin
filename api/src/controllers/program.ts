import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/error.middleware";
import { linkPendataanService } from "../services/link-pendataan";
import { programService } from "../services/program";

class ProgramController {
   findAll = asyncHandler(async (req: Request, res: Response) => {
      const { results, total } = await programService.findAll(req.query as any);

      res.json({ results, total });
   });

   findById = asyncHandler(async (req: Request, res: Response) => {
      const { id } = req.params;

      const results = await linkPendataanService.findById(Number.parseInt(id));

      res.json(results);
   });

   update = asyncHandler(async (req: Request, res: Response) => {
      const data = await linkPendataanService.update(Number.parseInt(req.params.id), req.body);

      res.json({ status: true, message: "Data berhasil diperbaharui", data });
   });
}

export const programController = new ProgramController();
