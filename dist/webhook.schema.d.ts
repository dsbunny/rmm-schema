import * as z from "zod";
export declare const RmmWebhookClass: z.ZodEnum<{
    device: "device";
    agent: "agent";
}>;
export type RmmWebhookClass = z.infer<typeof RmmWebhookClass>;
export declare const RmmWebhookType: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
    "desired-state": "desired-state";
    "runtime-state": "runtime-state";
    "runtime-status": "runtime-status";
}>;
export type RmmWebhookType = z.infer<typeof RmmWebhookType>;
export declare const RmmWebhookRequest: z.ZodObject<{
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
export type RmmWebhookRequest = z.infer<typeof RmmWebhookRequest>;
export declare const RmmWebhookProgress: z.ZodNull;
export type RmmWebhookProgress = z.infer<typeof RmmWebhookProgress>;
export declare const RmmWebhookResponse: z.ZodObject<{}, z.core.$strip>;
export type RmmWebhookResponse = z.infer<typeof RmmWebhookResponse>;
