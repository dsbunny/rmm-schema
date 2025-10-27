import { z } from 'zod/v4';
export declare const jsonCodec: <T extends z.core.$ZodType>(schema: T) => z.ZodCodec<z.ZodString, T>;
export declare const nullableJsonCodec: <T extends z.core.$ZodType>(schema: T) => z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodUnion<readonly [T, z.ZodNull]>>;
export declare const jsonSchema: <T extends z.core.$ZodType>(schema: T) => z.ZodPipe<z.ZodString, z.ZodTransform<Awaited<z.core.output<T>>, string>>;
export declare const nullableJsonSchema: <T extends z.core.$ZodType>(schema: T) => z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<Awaited<z.core.$InferUnionOutput<T>> | null, string | null>>;
