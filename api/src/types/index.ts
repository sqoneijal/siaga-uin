import { Request } from "express";
import type { ParsedQs } from "qs";

export interface ApiResponse<T = any> {
   success: boolean;
   message: string;
   data?: T;
   meta?: PaginationMeta;
   errors?: any;
   total?: number;
}

export interface PaginationMeta {
   page: number;
   limit: number;
   total: number;
   totalPages: number;
   hasNext: boolean;
   hasPrev: boolean;
}

export interface PaginationQuery {
   page?: number;
   limit?: number;
   sortBy?: string;
   sortOrder?: "asc" | "desc";
   search?: string;
}

export interface TypedRequest<T = any, Q extends ParsedQs = ParsedQs> extends Request<Record<string, any>, any, T, Q> {
   body: T;
   query: Q;
}
