// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";

export const JsonCodec = <T extends z.core.$ZodType>(schema: T) =>
        z.codec(z.string(), schema, {
                decode: (jsonString, ctx) => {
                        try {
                                return JSON.parse(jsonString);
                        } catch(err: any) {
                                ctx.issues.push({
                                        code: "invalid_format",
                                        format: "json",
                                        input: jsonString,
                                        message: err.message,
                                });
                                return z.NEVER;
                        }
                },
                encode: (value) => JSON.stringify(value),
});

export const NullableJsonCodec = <T extends z.core.$ZodType>(schema: T) =>
        z.codec(z.union([z.string(), z.null()]), z.union([schema, z.null()]), {
                decode: (jsonString, ctx) => {
                        try {
                                return jsonString === null ? null : JSON.parse(jsonString);
                        } catch(err: any) {
                                ctx.issues.push({
                                        code: "invalid_format",
                                        format: "json",
                                        input: jsonString === null ? 'null' : jsonString,
                                        message: err.message,
                                });
                                return z.NEVER;
                        }
                },
                encode: (value) => value === null ? null : JSON.stringify(value),
});

export const JsonSchema = <T extends z.core.$ZodType>(schema: T) =>
        z.string().transform((jsonString: string) => {
                return JsonCodec(schema).decode(jsonString);
});

export const NullableJsonSchema = <T extends z.core.$ZodType>(schema: T) =>
        z.union([z.string(), z.null()]).transform((jsonString: string | null) => {
                return NullableJsonCodec(schema).decode(jsonString);
});