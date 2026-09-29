import * as z from "zod";
export declare const SqliteDateCodec: z.ZodCodec<z.ZodString, z.ZodString>;
export declare const SqliteDateSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
