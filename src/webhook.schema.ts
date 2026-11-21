// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const RmmWebhookClassSchema = z.enum(['agent', 'device']).register(dsbunnyRegistry, {
        id: 'RmmWebhookClassSchema',
        description: 'The class of the webhook event related to RMM operations',
});
export type RmmWebhookClass = z.infer<typeof RmmWebhookClassSchema>;

export const RmmWebhookRequestSchema = WebhookRequestSchema.extend({
	'@type': z.literal('RmmWebhookRequest')
		.describe('Type of the RMM webhook request object'),
        class: RmmWebhookClassSchema,
}).register(dsbunnyRegistry, {
        id: 'RmmWebhookRequestSchema',
        description: 'The schema for webhook requests sent by the RMM system',
});
export type RmmWebhookRequest = z.infer<typeof RmmWebhookRequestSchema>;

export const RmmWebhookProgressSchema = WebhookProgressSchema.extend({
	'@type': z.literal('RmmWebhookProgress')
		.describe('Type of the RMM webhook progress object'),
}).register(dsbunnyRegistry, {
        id: 'RmmWebhookProgressSchema',
        description: 'The schema for webhook progress events related to RMM operations',
});
export type RmmWebhookProgress = z.infer<typeof RmmWebhookProgressSchema>;

export const RmmWebhookResponseSchema = WebhookResponseSchema.extend({
	'@type': z.literal('RmmWebhookResponse')
		.describe('Type of the RMM webhook response object'),
}).register(dsbunnyRegistry, {
        id: 'RmmWebhookResponseSchema',
        description: 'The schema for webhook responses related to RMM operations',
});
export type RmmWebhookResponse = z.infer<typeof RmmWebhookResponseSchema>;
