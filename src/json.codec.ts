// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";

export const jsonCodec = <T extends z.core.$ZodType>(schema: T) =>
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

export const nullableJsonCodec = <T extends z.core.$ZodType>(schema: T) =>
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

export const jsonSchema = <T extends z.core.$ZodType>(schema: T) =>
        z.string().transform((jsonString: string) => {
                return jsonCodec(schema).decode(jsonString);
});

export const nullableJsonSchema = <T extends z.core.$ZodType>(schema: T) =>
        z.union([z.string(), z.null()]).transform((jsonString: string | null) => {
                return nullableJsonCodec(schema).decode(jsonString);
});