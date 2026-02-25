// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { WebhookProgress, WebhookRequest, WebhookResponse, } from "@dsbunny/webhook-schema";
export const RmmWebhookClass = z.enum(['agent', 'device'])
    .describe('The class of the webhook event related to RMM operations');
export const RmmWebhookType = z.enum(['new', 'change', 'delete', 'desired-state', 'runtime-state', 'runtime-status'])
    .describe('The type of the webhook event related to RMM operations');
export const RmmWebhookRequest = WebhookRequest.extend({
    class: RmmWebhookClass,
    type: RmmWebhookType,
})
    .describe('The schema for webhook requests sent by the RMM system');
export const RmmWebhookProgress = WebhookProgress;
export const RmmWebhookResponse = WebhookResponse;
//# sourceMappingURL=webhook.schema.js.map