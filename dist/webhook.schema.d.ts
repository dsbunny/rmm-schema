import * as z from "zod";
export declare const RmmWebhookClassSchema: z.ZodEnum<{
    device: "device";
    agent: "agent";
}>;
export type RmmWebhookClass = z.infer<typeof RmmWebhookClassSchema>;
export declare const RmmWebhookTypeSchema: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
    "desired-state": "desired-state";
    "runtime-state": "runtime-state";
    "runtime-status": "runtime-status";
}>;
export type RmmWebhookType = z.infer<typeof RmmWebhookTypeSchema>;
export declare const RmmWebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    class: z.ZodEnum<{
        device: "device";
        agent: "agent";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
        delete: "delete";
        "desired-state": "desired-state";
        "runtime-state": "runtime-state";
        "runtime-status": "runtime-status";
    }>;
}, z.core.$strip>;
export type RmmWebhookRequest = z.infer<typeof RmmWebhookRequestSchema>;
export declare const RmmWebhookProgressSchema: z.ZodNull;
export type RmmWebhookProgress = z.infer<typeof RmmWebhookProgressSchema>;
export declare const RmmWebhookResponseSchema: z.ZodObject<{}, z.core.$strip>;
export type RmmWebhookResponse = z.infer<typeof RmmWebhookResponseSchema>;
