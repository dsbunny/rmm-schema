// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
export const SqliteBoolCodec = z.codec(z.number(), z.boolean(), {
    decode: (num) => (!!num),
    encode: (bool) => (bool ? 1 : 0),
});
export const SqliteBoolSchema = z.number().transform((num) => {
    return SqliteBoolCodec.decode(num);
});
//# sourceMappingURL=sqlite-bool.codec.js.map