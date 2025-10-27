// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const JsonPatchOperation = z.discriminatedUnion("op", [
    z.object({ path: z.string(), op: z.literal('add'), value: z.any() }),
    z.object({ path: z.string(), op: z.literal('remove') }),
    z.object({ path: z.string(), op: z.literal('replace'), value: z.any() }),
    z.object({ path: z.string(), op: z.literal('move'), from: z.string() }),
    z.object({ path: z.string(), op: z.literal('copy'), from: z.string() }),
    z.object({ path: z.string(), op: z.literal('test'), value: z.any(), not: z.boolean().optional() }),
])
    .describe('JSON Patch operation schema');
//# sourceMappingURL=patch-operation.schema.js.map