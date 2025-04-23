// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
import { CoolReport } from './cool.schema.js';
import { ScreenDetails } from './screen-details.schema.js';
export const DeviceRegistration = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the device'),
    device_id: z.string().uuid()
        .describe('The UUID of the device'),
    create_timestamp: z.string().datetime() // ISO 8601
        .describe('The timestamp of the device creation'),
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
    device_id: z.string().uuid()
        .describe('The UUID of the device'),
    create_timestamp: z.string().datetime() // ISO 8601
        .describe('The timestamp of the device creation'),
    modify_timestamp: z.string().datetime()
        .describe('The timestamp of the device modification'),
    is_deleted: z.boolean().default(false)
        .describe('The flag of the device deletion'),
})
    .describe('The metadata of the device');
export const DeviceStateMetadata = z.object({
    create_timestamp: z.string().datetime() // ISO 8601
        .describe('The timestamp of the device state creation'),
    modify_timestamp: z.string().datetime()
        .describe('The timestamp of the device state modification'),
    is_deleted: z.boolean().default(false)
        .describe('The flag of the device state deletion'),
})
    .describe('The metadata of the device state');
export const DeviceStatusMetadata = DeviceStateMetadata;
export const DeviceStateBase = z.object({
    url: z.string().url().nullable()
        .describe('The URL of the device'),
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
})
    .describe('The state of the device');
export const DeviceState = DeviceStateBase.merge(DeviceStateMetadata);
export const DeviceStatusBase = z.object({
    url: z.string().url().nullable()
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
export const DeviceStatus = DeviceStatusBase.merge(DeviceStatusMetadata);
export const Device = DeviceBase.merge(DeviceMetadata)
    .merge(z.object({
    desired_state: DeviceStateBase.merge(DeviceStateMetadata)
        .nullable()
        .describe('The desired state of the device'),
    runtime_state: DeviceStateBase.merge(DeviceStateMetadata)
        .nullable()
        .describe('The runtime state of the device'),
    runtime_status: DeviceStatusBase.merge(DeviceStatusMetadata)
        .nullable()
        .describe('The runtime status of the device'),
}));
// SQL date string to ISO 8601,
// e.g. "2023-10-15 15:09:50" to "2023-10-15T15:09:50.000Z"
const sqliteDateSchema = z.string().transform((date) => {
    return `${date.replace(' ', 'T')}.000Z`;
});
export const DbDtoToDeviceState = z.object({
    url: z.string().nullable(),
    pull_interval: z.number().nullable(),
    push_interval: z.number().nullable(),
    min_backoff_interval: z.number().nullable(),
    max_backoff_interval: z.number().nullable(),
    agent_ids: z.string().nullable(),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto) => {
    return {
        ...dto,
        agent_ids: dto.agent_ids ? JSON.parse(dto.agent_ids) : null,
        is_deleted: Boolean(dto.is_deleted),
    };
});
export const DbDtoToDeviceStatus = z.object({
    url: z.string().nullable(),
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
    tenant_id: z.string().uuid(),
    device_id: z.string().uuid(),
    name: z.string(),
    tags: z.string(),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
    desired_state_url: z.string().nullable().optional(),
    desired_state_pull_interval: z.number().nullable().optional(),
    desired_state_push_interval: z.number().nullable().optional(),
    desired_state_min_backoff_interval: z.number().nullable().optional(),
    desired_state_max_backoff_interval: z.number().nullable().optional(),
    desired_state_agent_ids: z.string().nullable().optional(),
    desired_state_create_timestamp: sqliteDateSchema.optional(),
    desired_state_modify_timestamp: sqliteDateSchema.optional(),
    desired_state_is_deleted: z.number().default(0),
    runtime_state_url: z.string().nullable().optional(),
    runtime_state_pull_interval: z.number().nullable().optional(),
    runtime_state_push_interval: z.number().nullable().optional(),
    runtime_state_min_backoff_interval: z.number().nullable().optional(),
    runtime_state_max_backoff_interval: z.number().nullable().optional(),
    runtime_state_agent_ids: z.string().nullable().optional(),
    runtime_state_create_timestamp: sqliteDateSchema.optional(),
    runtime_state_modify_timestamp: sqliteDateSchema.optional(),
    runtime_state_is_deleted: z.number().default(0),
    runtime_status_url: z.string().nullable().optional(),
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
    const desired_state = (typeof dto.desired_state_url === "undefined"
        && typeof dto.desired_state_pull_interval === "undefined"
        && typeof dto.desired_state_push_interval === "undefined"
        && typeof dto.desired_state_min_backoff_interval === "undefined"
        && typeof dto.desired_state_max_backoff_interval === "undefined"
        && typeof dto.desired_state_agent_ids === "undefined"
        && typeof dto.desired_state_create_timestamp === "undefined"
        && typeof dto.desired_state_modify_timestamp === "undefined") ? null : {
        url: dto.desired_state_url ?? null,
        pull_interval: dto.desired_state_pull_interval ?? null,
        push_interval: dto.desired_state_push_interval ?? null,
        min_backoff_interval: dto.desired_state_min_backoff_interval ?? null,
        max_backoff_interval: dto.desired_state_max_backoff_interval ?? null,
        agent_ids: dto.desired_state_agent_ids
            ? JSON.parse(dto.desired_state_agent_ids)
            : null,
        create_timestamp: z.string().parse(dto.desired_state_create_timestamp),
        modify_timestamp: z.string().parse(dto.desired_state_modify_timestamp),
        is_deleted: Boolean(dto.desired_state_is_deleted),
    };
    const runtime_state = (typeof dto.runtime_state_url === "undefined"
        && typeof dto.runtime_state_pull_interval === "undefined"
        && typeof dto.runtime_state_push_interval === "undefined"
        && typeof dto.runtime_state_min_backoff_interval === "undefined"
        && typeof dto.runtime_state_max_backoff_interval === "undefined"
        && typeof dto.runtime_state_agent_ids === "undefined"
        && typeof dto.runtime_state_create_timestamp === "undefined"
        && typeof dto.runtime_state_modify_timestamp === "undefined") ? null : {
        url: dto.runtime_state_url ?? null,
        pull_interval: dto.runtime_state_pull_interval ?? null,
        push_interval: dto.runtime_state_push_interval ?? null,
        min_backoff_interval: dto.runtime_state_min_backoff_interval ?? null,
        max_backoff_interval: dto.runtime_state_max_backoff_interval ?? null,
        agent_ids: dto.runtime_state_agent_ids
            ? JSON.parse(dto.runtime_state_agent_ids)
            : null,
        create_timestamp: z.string().parse(dto.runtime_state_create_timestamp),
        modify_timestamp: z.string().parse(dto.runtime_state_modify_timestamp),
        is_deleted: Boolean(dto.runtime_status_is_deleted),
    };
    const runtime_status = (typeof dto.runtime_state_url === "undefined"
        && typeof dto.runtime_status_user_agent === "undefined"
        && typeof dto.runtime_status_device_memory === "undefined"
        && typeof dto.runtime_status_hardware_concurrency === "undefined"
        && typeof dto.runtime_status_vendor_webgl === "undefined"
        && typeof dto.runtime_status_renderer_webgl === "undefined"
        && typeof dto.runtime_status_screen_details === "undefined"
        && typeof dto.runtime_status_cool === "undefined"
        && typeof dto.runtime_status_has_error === "undefined"
        && typeof dto.runtime_status_error_stack === "undefined"
        && typeof dto.runtime_status_create_timestamp === "undefined"
        && typeof dto.runtime_status_modify_timestamp === "undefined") ? null : {
        url: dto.runtime_state_url ?? null,
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