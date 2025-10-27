import { z } from 'zod/v4';
export declare const sqliteBoolCodec: z.ZodCodec<z.ZodNumber, z.ZodBoolean>;
export declare const sqliteBoolSchema: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
