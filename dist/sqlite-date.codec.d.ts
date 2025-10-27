import * as z from "zod";
export declare const sqliteDateCodec: z.ZodCodec<z.ZodString, z.ZodString>;
export declare const sqliteDateSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
