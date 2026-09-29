import * as z from "zod";
export declare const JsonCodec: <T extends z.core.$ZodType>(schema: T) => z.ZodCodec<z.ZodString, T>;
export declare const NullableJsonCodec: <T extends z.core.$ZodType>(schema: T) => z.ZodCodec<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodUnion<readonly [T, z.ZodNull]>>;
export declare const JsonSchema: <T extends z.core.$ZodType>(schema: T) => z.ZodPipe<z.ZodString, z.ZodTransform<Awaited<z.core.output<T>>, string>>;
export declare const NullableJsonSchema: <T extends z.core.$ZodType>(schema: T) => z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<Awaited<z.core.$InferUnionOutput<T>> | null, string | null>>;
