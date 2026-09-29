// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { CoolReportSchema } from './cool.schema.js';
import { ScreenDetailsSchema } from './screen-details.schema.js';
import { URISchema } from './uri.schema.js';
import { JsonSchema, NullableJsonSchema } from './json.codec.js';
import { SqliteBoolSchema } from './sqlite-bool.codec.js';
import { SqliteDateSchema } from './sqlite-date.codec.js';
export const DeviceRegistrationSchema = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the device'),
    device_id: z.uuid()
        .describe('The UUID of the device'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the device creation'),
})
    .describe('The registration of the device');
export const DeviceBaseSchema = z.object({
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
export const DeviceMetadataSchema = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the device'),
    device_id: z.uuid()
        .describe('The UUID of the device'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the device creation'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of the device modification'),
    is_deleted: z.boolean().default(false)
        .describe('The flag of the device deletion'),
    is_in_desired_state: z.boolean().default(false)
        .describe('The flag indicating if the device is in the desired state'),
})
    .describe('The metadata of the device');
export const DeviceStateMetadataSchema = z.object({
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the device state creation'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of the device state modification'),
    is_deleted: z.boolean().default(false)
        .describe('The flag of the device state deletion'),
})
    .describe('The metadata of the device state');
export const DeviceStatusMetadataSchema = DeviceStateMetadataSchema;
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
})
    .describe('The state of the device');
export const DeviceStateSchema = DeviceStateBaseSchema.extend(DeviceStateMetadataSchema.shape);
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
})
    .describe('The runtime status of the device');
export const DeviceStatusSchema = DeviceStatusBaseSchema.extend(DeviceStatusMetadataSchema.shape);
const DeviceBaseWithMetadataSchema = DeviceBaseSchema.extend(DeviceMetadataSchema.shape);
const DeviceDesiredStateSchema = DeviceStateBaseSchema.extend(DeviceStateMetadataSchema.shape);
const DeviceRuntimeStateSchema = DeviceStateBaseSchema.extend(DeviceStateMetadataSchema.shape);
const DeviceRuntimeStatusSchema = DeviceStatusBaseSchema.extend(DeviceStatusMetadataSchema.shape);
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
});
export const DbDtoToDeviceStateSchema = z.object({
    uri: URISchema.nullable(),
    pull_interval: z.number().nullable(),
    push_interval: z.number().nullable(),
    min_backoff_interval: z.number().nullable(),
    max_backoff_interval: z.number().nullable(),
    agent_ids: NullableJsonSchema(z.array(z.string()).max(64)),
    is_maintenance: SqliteBoolSchema,
    create_timestamp: SqliteDateSchema,
    modify_timestamp: SqliteDateSchema,
    is_deleted: SqliteBoolSchema,
})
    .transform((dto) => (dto));
export const DbDtoToDeviceStatusSchema = z.object({
    uri: URISchema.nullable(),
    user_agent: z.string().nullable(),
    device_memory: z.number().nullable(),
    hardware_concurrency: z.number().nullable(),
    vendor_webgl: z.string().nullable(),
    renderer_webgl: z.string().nullable(),
    screen_details: NullableJsonSchema(ScreenDetailsSchema),
    cool: NullableJsonSchema(CoolReportSchema),
    has_error: SqliteBoolSchema,
    error_stack: z.string().nullable(),
    create_timestamp: SqliteDateSchema,
    modify_timestamp: SqliteDateSchema,
    is_deleted: SqliteBoolSchema,
})
    .transform((dto) => (dto));
export const DbDtoFromDeviceBaseSchema = DeviceBaseSchema.transform((device) => {
    return {
        ...device,
        tags: JsonSchema(z.array(z.string().max(64))),
    };
});
export const DbDtoFromDeviceSchema = DeviceSchema.transform((device) => {
    return {
        ...device,
        tags: JsonSchema(z.array(z.string().max(64))),
    };
});
export const DbDtoToDeviceBaseSchema = z.object({
    name: z.string(),
    tags: JsonSchema(z.array(z.string().max(64))),
    user_tags: JsonSchema(z.array(z.string().max(64))),
    system_tags: JsonSchema(z.array(z.string().max(64))),
})
    .transform((dto) => (dto));
export const DbDtoToDeviceSchema = z.object({
    tenant_id: z.uuid(),
    device_id: z.uuid(),
    name: z.string(),
    tags: JsonSchema(z.array(z.string().max(64))),
    user_tags: JsonSchema(z.array(z.string().max(64))),
    system_tags: JsonSchema(z.array(z.string().max(64))),
    create_timestamp: SqliteDateSchema,
    modify_timestamp: SqliteDateSchema,
    is_deleted: SqliteBoolSchema,
    is_in_desired_state: SqliteBoolSchema,
    desired_state_uri: URISchema.nullable().optional(),
    desired_state_pull_interval: z.number().nullable().optional(),
    desired_state_push_interval: z.number().nullable().optional(),
    desired_state_min_backoff_interval: z.number().nullable().optional(),
    desired_state_max_backoff_interval: z.number().nullable().optional(),
    desired_state_agent_ids: NullableJsonSchema(z.array(z.string()).max(64)).optional(),
    desired_state_is_maintenance: SqliteBoolSchema.optional(),
    desired_state_create_timestamp: SqliteDateSchema.optional(),
    desired_state_modify_timestamp: SqliteDateSchema.optional(),
    desired_state_is_deleted: SqliteBoolSchema.optional(),
    runtime_state_uri: URISchema.nullable().optional(),
    runtime_state_pull_interval: z.number().nullable().optional(),
    runtime_state_push_interval: z.number().nullable().optional(),
    runtime_state_min_backoff_interval: z.number().nullable().optional(),
    runtime_state_max_backoff_interval: z.number().nullable().optional(),
    runtime_state_agent_ids: NullableJsonSchema(z.array(z.string()).max(64)).optional(),
    runtime_state_is_maintenance: SqliteBoolSchema.optional(),
    runtime_state_create_timestamp: SqliteDateSchema.optional(),
    runtime_state_modify_timestamp: SqliteDateSchema.optional(),
    runtime_state_is_deleted: SqliteBoolSchema.optional(),
    runtime_status_uri: URISchema.nullable().optional(),
    runtime_status_user_agent: z.string().nullable().optional(),
    runtime_status_device_memory: z.number().nullable().optional(),
    runtime_status_hardware_concurrency: z.number().nullable().optional(),
    runtime_status_vendor_webgl: z.string().nullable().optional(),
    runtime_status_renderer_webgl: z.string().nullable().optional(),
    runtime_status_screen_details: NullableJsonSchema(ScreenDetailsSchema).optional(),
    runtime_status_cool: NullableJsonSchema(CoolReportSchema).optional(),
    runtime_status_has_error: SqliteBoolSchema.optional(),
    runtime_status_error_stack: z.string().nullable().optional(),
    runtime_status_create_timestamp: SqliteDateSchema.optional(),
    runtime_status_modify_timestamp: SqliteDateSchema.optional(),
    runtime_status_is_deleted: SqliteBoolSchema.optional(),
})
    .transform((dto) => ({
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
        agent_ids: dto.desired_state_agent_ids ?? null,
        is_maintenance: dto.desired_state_is_maintenance,
        create_timestamp: dto.desired_state_create_timestamp,
        modify_timestamp: dto.desired_state_modify_timestamp,
        is_deleted: dto.desired_state_is_deleted,
    },
    runtime_state: (typeof dto.runtime_state_create_timestamp === 'undefined') ? null : {
        uri: dto.runtime_state_uri ?? null,
        pull_interval: dto.runtime_state_pull_interval ?? null,
        push_interval: dto.runtime_state_push_interval ?? null,
        min_backoff_interval: dto.runtime_state_min_backoff_interval ?? null,
        max_backoff_interval: dto.runtime_state_max_backoff_interval ?? null,
        agent_ids: dto.runtime_state_agent_ids ?? null,
        is_maintenance: dto.runtime_state_is_maintenance,
        create_timestamp: dto.runtime_state_create_timestamp,
        modify_timestamp: dto.runtime_state_modify_timestamp,
        is_deleted: dto.runtime_state_is_deleted,
    },
    runtime_status: (typeof dto.runtime_status_create_timestamp === 'undefined') ? null : {
        uri: dto.runtime_status_uri ?? null,
        user_agent: dto.runtime_status_user_agent ?? null,
        device_memory: dto.runtime_status_device_memory ?? null,
        hardware_concurrency: dto.runtime_status_hardware_concurrency ?? null,
        vendor_webgl: dto.runtime_status_vendor_webgl ?? null,
        renderer_webgl: dto.runtime_status_renderer_webgl ?? null,
        screen_details: dto.runtime_status_screen_details ?? null,
        cool: dto.runtime_status_cool ?? null,
        has_error: dto.runtime_status_has_error,
        error_stack: dto.runtime_status_error_stack ?? null,
        create_timestamp: dto.runtime_status_create_timestamp,
        modify_timestamp: dto.runtime_status_modify_timestamp,
        is_deleted: dto.runtime_status_is_deleted,
    },
}));
//# sourceMappingURL=device.schema.js.map