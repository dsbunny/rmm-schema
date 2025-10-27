// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
// SQL date string to/from ISO 8601,
// e.g. "2023-10-15 15:09:50" to "2023-10-15T15:09:50.000Z"
export const sqliteDateCodec = z.codec(z.string(), z.string(), {
    decode: (date) => {
        return `${date.replace(' ', 'T')}.000Z`;
    },
    encode: (isoDate) => {
        return isoDate.replace('T', ' ').replace('.000Z', '');
    },
});
export const sqliteDateSchema = z.string().transform((date) => {
    return sqliteDateCodec.decode(date);
});
//# sourceMappingURL=sqlite-date.codec.js.map