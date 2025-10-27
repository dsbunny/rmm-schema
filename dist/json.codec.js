// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const jsonCodec = (schema) => z.codec(z.string(), schema, {
    decode: (jsonString, ctx) => {
        try {
            return JSON.parse(jsonString);
        }
        catch (err) {
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
export const nullableJsonCodec = (schema) => z.codec(z.union([z.string(), z.null()]), z.union([schema, z.null()]), {
    decode: (jsonString, ctx) => {
        try {
            return jsonString === null ? null : JSON.parse(jsonString);
        }
        catch (err) {
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
export const jsonSchema = (schema) => z.string().transform((jsonString) => {
    return jsonCodec(schema).decode(jsonString);
});
export const nullableJsonSchema = (schema) => z.union([z.string(), z.null()]).transform((jsonString) => {
    return nullableJsonCodec(schema).decode(jsonString);
});
//# sourceMappingURL=json.codec.js.map