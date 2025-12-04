import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/error.middleware";
import { linkPendataanService } from "../services/link-pendataan";

class LinkPendataanController {
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

export const linkPendataanController = new LinkPendataanController();
