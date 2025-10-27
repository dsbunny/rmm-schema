// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const sqliteBoolCodec = z.codec(z.number(), z.boolean(), {
        decode: (num) => (!!num),
        encode: (bool) => (bool ? 1 : 0),
});

export const sqliteBoolSchema = z.number().transform((num: number) => {
        return sqliteBoolCodec.decode(num);
});