// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { WebhookProgressSchema, WebhookRequestSchema, WebhookResponseSchema, } from "@dsbunny/webhook-schema";
export const RmmWebhookClassSchema = z.enum(['agent', 'device'])
    .describe('The class of the webhook event related to RMM operations');
export const RmmWebhookTypeSchema = z.enum(['new', 'change', 'delete', 'desired-state', 'runtime-state', 'runtime-status'])
    .describe('The type of the webhook event related to RMM operations');
export const RmmWebhookRequestSchema = WebhookRequestSchema.extend({
    class: RmmWebhookClassSchema,
    type: RmmWebhookTypeSchema,
})
    .describe('The schema for webhook requests sent by the RMM system');
export const RmmWebhookProgressSchema = WebhookProgressSchema;
export const RmmWebhookResponseSchema = WebhookResponseSchema;
//# sourceMappingURL=webhook.schema.js.map