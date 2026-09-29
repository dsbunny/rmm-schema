// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const RmmWebhookClassSchema = z.enum(['agent', 'device'])
        .describe('The class of the webhook event related to RMM operations');
export type RmmWebhookClass = z.infer<typeof RmmWebhookClassSchema>;

export const RmmWebhookTypeSchema = z.enum(['new', 'change', 'delete', 'desired-state', 'runtime-state', 'runtime-status'])
        .describe('The type of the webhook event related to RMM operations');
export type RmmWebhookType = z.infer<typeof RmmWebhookTypeSchema>;

export const RmmWebhookRequestSchema = WebhookRequestSchema.extend({
        class: RmmWebhookClassSchema,
        type: RmmWebhookTypeSchema,
})
        .describe('The schema for webhook requests sent by the RMM system');
export type RmmWebhookRequest = z.infer<typeof RmmWebhookRequestSchema>;

export const RmmWebhookProgressSchema = WebhookProgressSchema;
export type RmmWebhookProgress = z.infer<typeof RmmWebhookProgressSchema>;

export const RmmWebhookResponseSchema = WebhookResponseSchema;
export type RmmWebhookResponse = z.infer<typeof RmmWebhookResponseSchema>;
