import { z } from 'zod/v4';
export declare const JsonPatchOperation: z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">;
export type JsonPatchOperation = z.infer<typeof JsonPatchOperation>;
