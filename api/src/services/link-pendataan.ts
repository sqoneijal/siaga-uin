import { tb_link_pendataan } from "../../generated/prisma/client";
import { prisma } from "../lib/prisma";
import { NotFoundError } from "../middlewares/error.middleware";

export class LinkPendataanService {
   async findById(id: number) {
      const data = await prisma.tb_link_pendataan.findUnique({
         where: { id },
      });

      if (!data) {
         throw new NotFoundError("Link pendataan");
      }

      return data;
   }

   async update(id: number, data: tb_link_pendataan) {
      const update = await prisma.tb_link_pendataan.update({
         where: { id },
         data: {
            link: data.link,
         },
      });

      return update;
   }
}

export const linkPendataanService = new LinkPendataanService();
