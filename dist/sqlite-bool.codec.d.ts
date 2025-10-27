import * as z from "zod";
export declare const sqliteBoolCodec: z.ZodCodec<z.ZodNumber, z.ZodBoolean>;
export declare const sqliteBoolSchema: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
