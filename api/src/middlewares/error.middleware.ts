import { ApiResponse } from "@/types";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";

export class AppError extends Error {
   statusCode: number;
   isOperational: boolean;

   constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true;

      Error.captureStackTrace(this, this.constructor);
   }
}

// Not Found Error
export class NotFoundError extends AppError {
   constructor(resource: string = "Resource") {
      super(`${resource} tidak ditemukan`, 404);
   }
}

// Conflict Error
export class ConflictError extends AppError {
   constructor(message: string = "Data sudah ada") {
      super(message, 409);
   }
}

// Bad Request Error
export class BadRequestError extends AppError {
   constructor(message: string = "Request tidak valid") {
      super(message, 400);
   }
}

// Unauthorized Error
export class UnauthorizedError extends AppError {
   constructor(message: string = "Tidak memiliki akses") {
      super(message, 401);
   }
}

// Error Handler Middleware
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
   console.error(`[ERROR] ${new Date().toISOString()}:`, err);

   let statusCode = 500;
   let message = "Terjadi kesalahan internal server";

   // Custom App Error
   if (err instanceof AppError) {
      statusCode = err.statusCode;
      message = err.message;
   }

   // Prisma Known Request Error
   if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
         case "P2002": {
            statusCode = 409;
            const target = err.meta?.target as string[] | undefined;
            message = target ? `Data dengan ${target.join(", ")} sudah ada` : "Data duplikat ditemukan";
            break;
         }
         case "P2003": {
            statusCode = 400;
            message = "Referensi data tidak valid";
            break;
         }
         case "P2025": {
            statusCode = 404;
            message = "Data tidak ditemukan";
            break;
         }
         case "P2014": {
            statusCode = 400;
            message = "Relasi data tidak valid";
            break;
         }
         default:
            message = "Terjadi kesalahan database";
      }
   }

   // Prisma Validation Error
   if (err instanceof Prisma.PrismaClientValidationError) {
      statusCode = 400;
      message = "Data yang dikirim tidak valid";
   }

   const response: ApiResponse = {
      success: false,
      message,
      ...(process.env.NODE_ENV === "development" && {
         errors: [{ field: "stack", message: err.stack || "" }],
      }),
   };

   res.status(statusCode).json(response);
};

// Not Found Handler
export const notFoundHandler = (req: Request, res: Response) => {
   const response: ApiResponse = {
      success: false,
      message: `Route ${req.method} ${req.originalUrl} tidak ditemukan`,
   };
   res.status(404).json(response);
};

// Async Handler Wrapper
export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
   return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
   };
};
