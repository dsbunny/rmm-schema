// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { WebhookProgressSchema, WebhookRequestSchema, WebhookResponseSchema, } from "@dsbunny/webhook-schema";
export const RmmWebhookClassSchema = z.enum(['agent', 'device']).register(dsbunnyRegistry, {
    id: 'RmmWebhookClassSchema',
    description: 'The class of the webhook event related to RMM operations',
});
export const RmmWebhookTypeSchema = z.enum(['new', 'change', 'delete', 'desired-state', 'runtime-state', 'runtime-status']).register(dsbunnyRegistry, {
    id: 'RmmWebhookTypeSchema',
    description: 'The type of the webhook event related to RMM operations',
});
export const RmmWebhookRequestSchema = WebhookRequestSchema.extend({
    '@type': z.literal('RmmWebhookRequest')
        .describe('Type of the RMM webhook request object'),
    class: RmmWebhookClassSchema,
    type: RmmWebhookTypeSchema,
}).register(dsbunnyRegistry, {
    id: 'RmmWebhookRequestSchema',
    description: 'The schema for webhook requests sent by the RMM system',
});
export const RmmWebhookProgressSchema = WebhookProgressSchema.extend({
    '@type': z.literal('RmmWebhookProgress')
        .describe('Type of the RMM webhook progress object'),
}).register(dsbunnyRegistry, {
    id: 'RmmWebhookProgressSchema',
    description: 'The schema for webhook progress events related to RMM operations',
});
export const RmmWebhookResponseSchema = WebhookResponseSchema.extend({
    '@type': z.literal('RmmWebhookResponse')
        .describe('Type of the RMM webhook response object'),
}).register(dsbunnyRegistry, {
    id: 'RmmWebhookResponseSchema',
    description: 'The schema for webhook responses related to RMM operations',
});
//# sourceMappingURL=webhook.schema.js.map