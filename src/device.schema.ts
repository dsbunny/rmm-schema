// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';
import { CoolReport } from './cool.schema.js';
import { ScreenDetails } from './screen-details.schema.js';
import { URI } from './uri.schema.js';
import { jsonSchema, nullableJsonSchema } from './json.codec.js';
import { sqliteBoolSchema } from './sqlite-bool.codec.js';
import { sqliteDateSchema } from './sqlite-date.codec.js';

export const DeviceRegistration = z.object({
	tenant_id: z.string()
		.describe('The tenant ID of the device'),
	device_id: z.uuid()
		.describe('The UUID of the device'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the device creation'),
})
	.describe('The registration of the device');
export type DeviceRegistration = z.infer<typeof DeviceRegistration>;

export const DeviceBase = z.object({
	name: z.string()
		.describe('The name of the device'),
	tags: z.array(z.string()).max(64)
		.describe('The tags of the device'),
	user_tags: z.array(z.string()).max(64)
		.describe('The user tags of the device'),
	system_tags: z.array(z.string()).max(64)
		.describe('The system tags of the device'),
})
	.describe('Base information of the device, which is used to create a device');
export type DeviceBase = z.infer<typeof DeviceBase>;

export const DeviceMetadata = z.object({
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
})
	.describe('The metadata of the device');
export type DeviceMetadata = z.infer<typeof DeviceMetadata>;

export const DeviceStateMetadata = z.object({
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the device state creation'),
	modify_timestamp: z.iso.datetime()
		.describe('The ISO datetime of the device state modification'),
	is_deleted: z.boolean().default(false)
		.describe('The flag of the device state deletion'),
})
	.describe('The metadata of the device state');
export type DeviceStateMetadata = z.infer<typeof DeviceStateMetadata>;

export const DeviceStatusMetadata = DeviceStateMetadata;
export type DeviceStatusMetadata = z.infer<typeof DeviceStatusMetadata>;

export const DeviceStateBase = z.object({
	uri: URI.nullable()
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
})
	.describe('The state of the device');
export type DeviceStateBase = z.infer<typeof DeviceStateBase>;
export const DeviceState = DeviceStateBase.extend(DeviceStateMetadata.shape);
export type DeviceState = z.infer<typeof DeviceState>;

export const DeviceStatusBase = z.object({
	uri: URI.nullable()
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
	screen_details: ScreenDetails.nullable(),
	cool: CoolReport.nullable(),
	has_error: z.boolean().default(false)
		.describe('The flag of the device error'),
	error_stack: z.string().nullable()
		.describe('The stack of the device error'),
})
	.describe('The runtime status of the device');
export type DeviceStatusBase = z.infer<typeof DeviceStatusBase>;
export const DeviceStatus = DeviceStatusBase.extend(DeviceStatusMetadata.shape);
export type DeviceStatus = z.infer<typeof DeviceStatus>;

const DeviceBaseWithMetadata = DeviceBase.extend(DeviceMetadata.shape);
const DeviceDesiredState = DeviceStateBase.extend(DeviceStateMetadata.shape);
const DeviceRuntimeState = DeviceStateBase.extend(DeviceStateMetadata.shape);
const DeviceRuntimeStatus = DeviceStatusBase.extend(DeviceStatusMetadata.shape);

export const Device = DeviceBaseWithMetadata.extend({
	desired_state: DeviceDesiredState
		.nullable()
		.describe('The desired state of the device'),
	runtime_state: DeviceRuntimeState
		.nullable()
		.describe('The runtime state of the device'),
	runtime_status: DeviceRuntimeStatus
		.nullable()
		.describe('The runtime status of the device'),
});
export type Device = z.infer<typeof Device>;

export const DbDtoToDeviceState = z.object({
	uri: URI.nullable(),
	pull_interval: z.number().nullable(),
	push_interval: z.number().nullable(),
	min_backoff_interval: z.number().nullable(),
	max_backoff_interval: z.number().nullable(),
	agent_ids: nullableJsonSchema(z.array(z.string()).max(64)),
	is_maintenance: sqliteBoolSchema,
	create_timestamp: sqliteDateSchema,
	modify_timestamp: sqliteDateSchema,
	is_deleted: sqliteBoolSchema,
})
.transform((dto): DeviceState => (dto));

export const DbDtoToDeviceStatus = z.object({
	uri: URI.nullable(),
	user_agent: z.string().nullable(),
	device_memory: z.number().nullable(),
	hardware_concurrency: z.number().nullable(),
	vendor_webgl: z.string().nullable(),
	renderer_webgl: z.string().nullable(),
	screen_details: nullableJsonSchema(ScreenDetails),
	cool: nullableJsonSchema(CoolReport),
	has_error: sqliteBoolSchema,
	error_stack: z.string().nullable(),
	create_timestamp: sqliteDateSchema,
	modify_timestamp: sqliteDateSchema,
	is_deleted: sqliteBoolSchema,
})
.transform((dto): DeviceStatus => (dto));

export const DbDtoFromDeviceBase = DeviceBase.transform((device: DeviceBase) => {
	return {
		...device,
		tags: jsonSchema(z.array(z.string().max(64))),
	};
});
export const DbDtoFromDevice = Device.transform((device: Device) => {
	return {
		...device,
		tags: jsonSchema(z.array(z.string().max(64))),
	};
});

export const DbDtoToDeviceBase = z.object({
	name: z.string(),
	tags: jsonSchema(z.array(z.string().max(64))),
	user_tags: jsonSchema(z.array(z.string().max(64))),
	system_tags: jsonSchema(z.array(z.string().max(64))),
})
.transform((dto): DeviceBase => (dto));

export const DbDtoToDevice = z.object({
	tenant_id: z.uuid(),
	device_id: z.uuid(),
	name: z.string(),
	tags: jsonSchema(z.array(z.string().max(64))),
	user_tags: jsonSchema(z.array(z.string().max(64))),
	system_tags: jsonSchema(z.array(z.string().max(64))),
	create_timestamp: sqliteDateSchema,
	modify_timestamp: sqliteDateSchema,
	is_deleted: sqliteBoolSchema,
	is_in_desired_state: sqliteBoolSchema,
	desired_state_uri: URI.nullable().optional(),
	desired_state_pull_interval: z.number().nullable().optional(),
	desired_state_push_interval: z.number().nullable().optional(),
	desired_state_min_backoff_interval: z.number().nullable().optional(),
	desired_state_max_backoff_interval: z.number().nullable().optional(),
	desired_state_agent_ids: nullableJsonSchema(z.array(z.string()).max(64)),
	desired_state_is_maintenance: sqliteBoolSchema.optional(),
	desired_state_create_timestamp: sqliteDateSchema.optional(),
	desired_state_modify_timestamp: sqliteDateSchema.optional(),
	desired_state_is_deleted: sqliteBoolSchema.optional(),
	runtime_state_uri: URI.nullable().optional(),
	runtime_state_pull_interval: z.number().nullable().optional(),
	runtime_state_push_interval: z.number().nullable().optional(),
	runtime_state_min_backoff_interval: z.number().nullable().optional(),
	runtime_state_max_backoff_interval: z.number().nullable().optional(),
	runtime_state_agent_ids: nullableJsonSchema(z.array(z.string()).max(64)),
	runtime_state_is_maintenance: sqliteBoolSchema.optional(),
	runtime_state_create_timestamp: sqliteDateSchema.optional(),
	runtime_state_modify_timestamp: sqliteDateSchema.optional(),
	runtime_state_is_deleted: sqliteBoolSchema.optional(),
	runtime_status_uri: URI.nullable().optional(),
	runtime_status_user_agent: z.string().nullable().optional(),
	runtime_status_device_memory: z.number().nullable().optional(),
	runtime_status_hardware_concurrency: z.number().nullable().optional(),
	runtime_status_vendor_webgl: z.string().nullable().optional(),
	runtime_status_renderer_webgl: z.string().nullable().optional(),
	runtime_status_screen_details: nullableJsonSchema(ScreenDetails).optional(),
	runtime_status_cool: nullableJsonSchema(CoolReport).optional(),
	runtime_status_has_error: sqliteBoolSchema.optional(),
	runtime_status_error_stack: z.string().nullable().optional(),
	runtime_status_create_timestamp: sqliteDateSchema.optional(),
	runtime_status_modify_timestamp: sqliteDateSchema.optional(),
	runtime_status_is_deleted: sqliteBoolSchema.optional(),
})
.transform((dto): Device => ({
	// DeviceBase
	name: dto.name,
	tags: dto.tags,
	user_tags: dto.user_tags,
	system_tags: dto.system_tags,
	// DeviceMetadata
	tenant_id: dto.tenant_id,
	device_id: dto.device_id,
	create_timestamp: dto.create_timestamp,
	modify_timestamp: dto.modify_timestamp,
	is_deleted: dto.is_deleted,
	is_in_desired_state: dto.is_in_desired_state,
	// Device
	desired_state: (typeof dto.desired_state_create_timestamp === 'undefined') ? null : {
		uri: dto.desired_state_uri ?? null,
		pull_interval: dto.desired_state_pull_interval ?? null,
		push_interval: dto.desired_state_push_interval ?? null,
		min_backoff_interval: dto.desired_state_min_backoff_interval ?? null,
		max_backoff_interval: dto.desired_state_max_backoff_interval ?? null,
		agent_ids: dto.desired_state_agent_ids,
		is_maintenance: dto.desired_state_is_maintenance!,
		create_timestamp: dto.desired_state_create_timestamp!,
		modify_timestamp: dto.desired_state_modify_timestamp!,
		is_deleted: dto.desired_state_is_deleted!,
	},
	runtime_state: (typeof dto.runtime_state_create_timestamp === 'undefined') ? null : {
		uri: dto.runtime_state_uri ?? null,
		pull_interval: dto.runtime_state_pull_interval ?? null,
		push_interval: dto.runtime_state_push_interval ?? null,
		min_backoff_interval: dto.runtime_state_min_backoff_interval ?? null,
		max_backoff_interval: dto.runtime_state_max_backoff_interval ?? null,
		agent_ids: dto.runtime_state_agent_ids,
		is_maintenance: dto.runtime_state_is_maintenance!,
		create_timestamp: dto.runtime_state_create_timestamp!,
		modify_timestamp: dto.runtime_state_modify_timestamp!,
		is_deleted: dto.runtime_state_is_deleted!,
	},
	runtime_status: (typeof dto.runtime_status_create_timestamp === 'undefined') ? null : {
		uri: dto.runtime_status_uri ?? null,
		user_agent: dto.runtime_status_user_agent ?? null,
		device_memory: dto.runtime_status_device_memory ?? null,
		hardware_concurrency: dto.runtime_status_hardware_concurrency ?? null,
		vendor_webgl: dto.runtime_status_vendor_webgl ?? null,
		renderer_webgl: dto.runtime_status_renderer_webgl ?? null,
		screen_details: dto.runtime_status_screen_details!,
		cool: dto.runtime_status_cool!,
		has_error: dto.runtime_status_has_error!,
		error_stack: dto.runtime_status_error_stack ?? null,
		create_timestamp: dto.runtime_status_create_timestamp!,
		modify_timestamp: dto.runtime_status_modify_timestamp!,
		is_deleted: dto.runtime_status_is_deleted!,
	},
}));
