import * as z from "zod";
export declare const SqliteBoolCodec: z.ZodCodec<z.ZodNumber, z.ZodBoolean>;
export declare const SqliteBoolSchema: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
