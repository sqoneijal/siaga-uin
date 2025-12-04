import { ApiResponse } from "@/types";
import { NextFunction, Request, Response } from "express";
import { ZodError, ZodObject } from "zod";

export const validate = (schema: ZodObject<any>) => {
   return async (req: Request, res: Response, next: NextFunction) => {
      try {
         const parsed = await schema.parseAsync(req.body);
         req.body = parsed;
         next();
      } catch (error) {
         if (error instanceof ZodError) {
            const toObject: Record<string, string> = {};
            for (const err of error.issues) {
               toObject[err.path.join(".")] = err.message;
            }

            const response: ApiResponse = {
               success: false,
               message: "Validasi gagal",
               errors: toObject,
            };

            return res.status(400).json(response);
         }
         next(error);
      }
   };
};
