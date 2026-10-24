// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { CoolReportSchema } from './cool.schema.js';
import { ScreenDetailsSchema } from './screen-details.schema.js';
import { URISchema } from '@dsbunny/net-schema';

export const DeviceRegistrationSchema = z.object({
	tenant_id: z.string()
		.describe('The tenant ID of the device'),
	device_id: z.uuid()
		.describe('The UUID of the device'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the device creation'),
}).register(dsbunnyRegistry, {
	id: 'DeviceRegistrationSchema',
	description: 'The registration of the device',
})
export type DeviceRegistration = z.infer<typeof DeviceRegistrationSchema>;

export const DeviceBaseSchema = z.object({
	name: z.string()
		.describe('The name of the device'),
	tags: z.array(z.string()).max(64)
		.describe('The tags of the device'),
	user_tags: z.array(z.string()).max(64)
		.describe('The user tags of the device'),
	system_tags: z.array(z.string()).max(64)
		.describe('The system tags of the device'),
}).register(dsbunnyRegistry, {
	id: 'DeviceBaseSchema',
	description: 'The base information of the device',
});
export type DeviceBase = z.infer<typeof DeviceBaseSchema>;

export const DeviceMetadataSchema = z.object({
	tenant_id: z.string()
		.describe('The tenant ID of the device'),
	device_id: z.uuid()
		.describe('The UUID of the device'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the device creation'),
	modify_timestamp: z.iso.datetime()
		.describe('The ISO datetime of the device modification'),
	is_deleted: z.boolean().default(false)
		.describe('The flag of the device deletion'),
	is_in_desired_state: z.boolean().default(false)
		.describe('The flag indicating if the device is in the desired state'),
}).register(dsbunnyRegistry, {
	id: 'DeviceMetadataSchema',
	description: 'The metadata of the device',
});
export type DeviceMetadata = z.infer<typeof DeviceMetadataSchema>;

export const DeviceStateMetadataSchema = z.object({
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the device state creation'),
	modify_timestamp: z.iso.datetime()
		.describe('The ISO datetime of the device state modification'),
	is_deleted: z.boolean().default(false)
		.describe('The flag of the device state deletion'),
}).register(dsbunnyRegistry, {
	id: 'DeviceStateMetadataSchema',
	description: 'The metadata of the device state',
});
export type DeviceStateMetadata = z.infer<typeof DeviceStateMetadataSchema>;

export const DeviceStatusMetadataSchema = DeviceStateMetadataSchema.register(dsbunnyRegistry, {
	id: 'DeviceStatusMetadataSchema',
	description: 'The metadata of the device status',
});
export type DeviceStatusMetadata = z.infer<typeof DeviceStatusMetadataSchema>;

export const DeviceStateBaseSchema = z.object({
	uri: URISchema.nullable()
		.describe('The URI of the device'),
	pull_interval: z.number().nullable()
		.describe('The pull interval of the device'),
	push_interval: z.number().nullable()
		.describe('The push interval of the device'),
	min_backoff_interval: z.number().nullable()
		.describe('The minimum backoff interval of the device'),
	max_backoff_interval: z.number().nullable()
		.describe('The maximum backoff interval of the device'),
	agent_ids: z.array(z.string()).max(64).nullable()
		.describe('The agent IDs of the device'),
	is_maintenance: z.boolean().default(false)
		.describe('The flag of the device maintenance'),
}).register(dsbunnyRegistry, {
	id: 'DeviceStateBaseSchema',
	description: 'The state of the device',
});
export type DeviceStateBase = z.infer<typeof DeviceStateBaseSchema>;
export const DeviceStateSchema = DeviceStateBaseSchema.extend(DeviceStateMetadataSchema.shape).register(dsbunnyRegistry, {
	id: 'DeviceStateSchema',
	description: 'The state of the device with metadata',
});
export type DeviceState = z.infer<typeof DeviceStateSchema>;

export const DeviceStatusBaseSchema = z.object({
	uri: URISchema.nullable()
		.describe('The URL of the device'),
	user_agent: z.string().nullable()
		.describe('The user agent of the device'),
	device_memory: z.number().nullable()
		.describe('The device memory of the device'),
	hardware_concurrency: z.number().nullable()
		.describe('The hardware concurrency of the device'),
	vendor_webgl: z.string().nullable()
		.describe('The vendor of the WebGL of the device'),
	renderer_webgl: z.string().nullable()
		.describe('The renderer of the WebGL of the device'),
	screen_details: ScreenDetailsSchema.nullable(),
	cool: CoolReportSchema.nullable(),
	has_error: z.boolean().default(false)
		.describe('The flag of the device error'),
	error_stack: z.string().nullable()
		.describe('The stack of the device error'),
}).register(dsbunnyRegistry, {
	id: 'DeviceStatusBaseSchema',
	description: 'The runtime status of the device',
});
export type DeviceStatusBase = z.infer<typeof DeviceStatusBaseSchema>;
export const DeviceStatusSchema = DeviceStatusBaseSchema.extend(DeviceStatusMetadataSchema.shape).register(dsbunnyRegistry, {
	id: 'DeviceStatusSchema',
	description: 'The runtime status of the device with metadata',
});
export type DeviceStatus = z.infer<typeof DeviceStatusSchema>;

const DeviceBaseWithMetadataSchema = DeviceBaseSchema.extend(DeviceMetadataSchema.shape).register(dsbunnyRegistry, {
	id: 'DeviceBaseWithMetadataSchema',
	description: 'The base information of the device with metadata',
});
const DeviceDesiredStateSchema = DeviceStateBaseSchema.extend(DeviceStateMetadataSchema.shape).register(dsbunnyRegistry, {
	id: 'DeviceDesiredStateSchema',
	description: 'The desired state of the device with metadata',
});
const DeviceRuntimeStateSchema = DeviceStateBaseSchema.extend(DeviceStateMetadataSchema.shape).register(dsbunnyRegistry, {
	id: 'DeviceRuntimeStateSchema',
	description: 'The runtime state of the device with metadata',
});
const DeviceRuntimeStatusSchema = DeviceStatusBaseSchema.extend(DeviceStatusMetadataSchema.shape).register(dsbunnyRegistry, {
	id: 'DeviceRuntimeStatusSchema',
	description: 'The runtime status of the device with metadata',
});

export const DeviceSchema = DeviceBaseWithMetadataSchema.extend({
	desired_state: DeviceDesiredStateSchema
		.nullable()
		.describe('The desired state of the device'),
	runtime_state: DeviceRuntimeStateSchema
		.nullable()
		.describe('The runtime state of the device'),
	runtime_status: DeviceRuntimeStatusSchema
		.nullable()
		.describe('The runtime status of the device'),
}).register(dsbunnyRegistry, {
	id: 'DeviceSchema',
	description: 'The device with its desired state, runtime state, and runtime status',
});
export type Device = z.infer<typeof DeviceSchema>;
