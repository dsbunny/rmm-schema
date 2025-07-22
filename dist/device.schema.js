// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
import { CoolReport } from './cool.schema.js';
import { ScreenDetails } from './screen-details.schema.js';
import { sqliteDateSchema } from './sqlite-date.schema.js';
import { URI } from './uri.schema.js';
export const DeviceRegistration = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the device'),
    device_id: z.uuid()
        .describe('The UUID of the device'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the device creation'),
})
    .describe('The registration of the device');
export const DeviceBase = z.object({
    name: z.string()
        .describe('The name of the device'),
    tags: z.array(z.string())
        .describe('The tags of the device'),
})
    .describe('Base information of the device, which is used to create a device');
export const DeviceMetadata = z.object({
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
})
    .describe('The metadata of the device');
export const DeviceStateMetadata = z.object({
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the device state creation'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of the device state modification'),
    is_deleted: z.boolean().default(false)
        .describe('The flag of the device state deletion'),
})
    .describe('The metadata of the device state');
export const DeviceStatusMetadata = DeviceStateMetadata;
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
    agent_ids: z.array(z.string()).nullable()
        .describe('The agent IDs of the device'),
    is_maintenance: z.boolean().default(false)
        .describe('The flag of the device maintenance'),
})
    .describe('The state of the device');
export const DeviceState = DeviceStateBase.extend(DeviceStateMetadata.shape);
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
export const DeviceStatus = DeviceStatusBase.extend(DeviceStatusMetadata.shape);
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
export const DbDtoToDeviceState = z.object({
    uri: URI.nullable(),
    pull_interval: z.number().nullable(),
    push_interval: z.number().nullable(),
    min_backoff_interval: z.number().nullable(),
    max_backoff_interval: z.number().nullable(),
    agent_ids: z.string().nullable(),
    is_maintenance: z.number().default(0),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto) => {
    return {
        ...dto,
        agent_ids: dto.agent_ids ? JSON.parse(dto.agent_ids) : null,
        is_maintenance: Boolean(dto.is_maintenance),
        is_deleted: Boolean(dto.is_deleted),
    };
});
export const DbDtoToDeviceStatus = z.object({
    uri: URI.nullable(),
    user_agent: z.string().nullable(),
    device_memory: z.number().nullable(),
    hardware_concurrency: z.number().nullable(),
    vendor_webgl: z.string().nullable(),
    renderer_webgl: z.string().nullable(),
    screen_details: z.string().nullable(),
    cool: z.string().nullable(),
    has_error: z.number().default(0),
    error_stack: z.string().nullable(),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto) => {
    return {
        ...dto,
        screen_details: dto.screen_details ? JSON.parse(dto.screen_details) : null,
        cool: dto.cool ? JSON.parse(dto.cool) : null,
        has_error: Boolean(dto.has_error),
        is_deleted: Boolean(dto.is_deleted),
    };
});
export const DbDtoFromDeviceBase = DeviceBase.transform((device) => {
    return {
        ...device,
        tags: JSON.stringify(device.tags),
    };
});
export const DbDtoFromDevice = Device.transform((device) => {
    return {
        ...device,
        tags: JSON.stringify(device.tags),
    };
});
export const DbDtoToDeviceBase = z.object({
    name: z.string(),
    tags: z.string(),
})
    .transform((dto) => {
    return {
        ...dto,
        tags: JSON.parse(dto.tags),
    };
});
export const DbDtoToDevice = z.object({
    tenant_id: z.uuid(),
    device_id: z.uuid(),
    name: z.string(),
    tags: z.string(),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
    desired_state_uri: URI.nullable().optional(),
    desired_state_pull_interval: z.number().nullable().optional(),
    desired_state_push_interval: z.number().nullable().optional(),
    desired_state_min_backoff_interval: z.number().nullable().optional(),
    desired_state_max_backoff_interval: z.number().nullable().optional(),
    desired_state_agent_ids: z.string().nullable().optional(),
    desired_state_is_maintenance: z.number().default(0),
    desired_state_create_timestamp: sqliteDateSchema.optional(),
    desired_state_modify_timestamp: sqliteDateSchema.optional(),
    desired_state_is_deleted: z.number().default(0),
    runtime_state_uri: URI.nullable().optional(),
    runtime_state_pull_interval: z.number().nullable().optional(),
    runtime_state_push_interval: z.number().nullable().optional(),
    runtime_state_min_backoff_interval: z.number().nullable().optional(),
    runtime_state_max_backoff_interval: z.number().nullable().optional(),
    runtime_state_agent_ids: z.string().nullable().optional(),
    runtime_state_is_maintenance: z.number().default(0),
    runtime_state_create_timestamp: sqliteDateSchema.optional(),
    runtime_state_modify_timestamp: sqliteDateSchema.optional(),
    runtime_state_is_deleted: z.number().default(0),
    runtime_status_uri: URI.nullable().optional(),
    runtime_status_user_agent: z.string().nullable().optional(),
    runtime_status_device_memory: z.number().nullable().optional(),
    runtime_status_hardware_concurrency: z.number().nullable().optional(),
    runtime_status_vendor_webgl: z.string().nullable().optional(),
    runtime_status_renderer_webgl: z.string().nullable().optional(),
    runtime_status_screen_details: z.string().nullable().optional(),
    runtime_status_cool: z.string().nullable().optional(),
    runtime_status_has_error: z.number().default(0).optional(),
    runtime_status_error_stack: z.string().nullable().optional(),
    runtime_status_create_timestamp: sqliteDateSchema.optional(),
    runtime_status_modify_timestamp: sqliteDateSchema.optional(),
    runtime_status_is_deleted: z.number().default(0),
})
    .transform((dto) => {
    const desired_state = (typeof dto.desired_state_uri === "undefined"
        && typeof dto.desired_state_pull_interval === "undefined"
        && typeof dto.desired_state_push_interval === "undefined"
        && typeof dto.desired_state_min_backoff_interval === "undefined"
        && typeof dto.desired_state_max_backoff_interval === "undefined"
        && typeof dto.desired_state_agent_ids === "undefined"
        && typeof dto.desired_state_create_timestamp === "undefined"
        && typeof dto.desired_state_modify_timestamp === "undefined") ? null : {
        uri: dto.desired_state_uri ?? null,
        pull_interval: dto.desired_state_pull_interval ?? null,
        push_interval: dto.desired_state_push_interval ?? null,
        min_backoff_interval: dto.desired_state_min_backoff_interval ?? null,
        max_backoff_interval: dto.desired_state_max_backoff_interval ?? null,
        agent_ids: (typeof dto.desired_state_agent_ids === "string")
            ? JSON.parse(dto.desired_state_agent_ids)
            : null,
        is_maintenance: Boolean(dto.desired_state_is_maintenance),
        create_timestamp: z.string().parse(dto.desired_state_create_timestamp),
        modify_timestamp: z.string().parse(dto.desired_state_modify_timestamp),
        is_deleted: Boolean(dto.desired_state_is_deleted),
    };
    const runtime_state = (typeof dto.runtime_state_uri === "undefined"
        && typeof dto.runtime_state_pull_interval === "undefined"
        && typeof dto.runtime_state_push_interval === "undefined"
        && typeof dto.runtime_state_min_backoff_interval === "undefined"
        && typeof dto.runtime_state_max_backoff_interval === "undefined"
        && typeof dto.runtime_state_agent_ids === "undefined"
        && typeof dto.runtime_state_create_timestamp === "undefined"
        && typeof dto.runtime_state_modify_timestamp === "undefined") ? null : {
        uri: dto.runtime_state_uri ?? null,
        pull_interval: dto.runtime_state_pull_interval ?? null,
        push_interval: dto.runtime_state_push_interval ?? null,
        min_backoff_interval: dto.runtime_state_min_backoff_interval ?? null,
        max_backoff_interval: dto.runtime_state_max_backoff_interval ?? null,
        agent_ids: dto.runtime_state_agent_ids
            ? JSON.parse(dto.runtime_state_agent_ids)
            : null,
        is_maintenance: Boolean(dto.runtime_state_is_maintenance),
        create_timestamp: z.string().parse(dto.runtime_state_create_timestamp),
        modify_timestamp: z.string().parse(dto.runtime_state_modify_timestamp),
        is_deleted: Boolean(dto.runtime_status_is_deleted),
    };
    const runtime_status = (typeof dto.runtime_status_uri === "undefined"
        && typeof dto.runtime_status_user_agent === "undefined"
        && typeof dto.runtime_status_device_memory === "undefined"
        && typeof dto.runtime_status_hardware_concurrency === "undefined"
        && typeof dto.runtime_status_vendor_webgl === "undefined"
        && typeof dto.runtime_status_renderer_webgl === "undefined"
        && typeof dto.runtime_status_screen_details === "undefined"
        && typeof dto.runtime_status_cool === "undefined"
        && typeof dto.runtime_status_error_stack === "undefined"
        && typeof dto.runtime_status_create_timestamp === "undefined"
        && typeof dto.runtime_status_modify_timestamp === "undefined") ? null : {
        uri: dto.runtime_status_uri ?? null,
        user_agent: dto.runtime_status_user_agent ?? null,
        device_memory: dto.runtime_status_device_memory ?? null,
        hardware_concurrency: dto.runtime_status_hardware_concurrency ?? null,
        vendor_webgl: dto.runtime_status_vendor_webgl ?? null,
        renderer_webgl: dto.runtime_status_renderer_webgl ?? null,
        screen_details: dto.runtime_status_screen_details
            ? JSON.parse(dto.runtime_status_screen_details)
            : null,
        cool: dto.runtime_status_cool
            ? JSON.parse(dto.runtime_status_cool)
            : null,
        has_error: Boolean(dto.runtime_status_has_error),
        error_stack: dto.runtime_status_error_stack ?? null,
        create_timestamp: z.string().parse(dto.runtime_status_create_timestamp),
        modify_timestamp: z.string().parse(dto.runtime_status_modify_timestamp),
        is_deleted: Boolean(dto.runtime_status_is_deleted),
    };
    return {
        // DeviceBase
        name: dto.name,
        tags: JSON.parse(dto.tags),
        // DeviceMetadata
        tenant_id: dto.tenant_id,
        device_id: dto.device_id,
        create_timestamp: dto.create_timestamp,
        modify_timestamp: dto.modify_timestamp,
        is_deleted: Boolean(dto.is_deleted),
        // Device
        desired_state,
        runtime_state,
        runtime_status,
    };
});
//# sourceMappingURL=device.schema.js.map