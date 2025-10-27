// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
import { URI } from './uri.schema.js';
import { jsonCodec, jsonSchema, nullableJsonSchema } from './json.codec.js';
import { sqliteBoolSchema } from './sqlite-bool.codec.js';
import { sqliteDateSchema } from './sqlite-date.codec.js';
export const AgentRegistration = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the agent'),
    device_id: z.uuid()
        .describe('The UUID of the host device'),
    agent_id: z.uuid()
        .describe('The UUID of the agent'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the agent creation'),
})
    .describe('The registration of the agent');
export const AgentBase = z.object({
    name: z.string()
        .describe('The name of the agent'),
    tags: z.array(z.string()).max(64)
        .describe('The tags of the agent'),
})
    .describe('Base information of the agent');
export const AgentMetadata = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the agent'),
    device_id: z.uuid()
        .describe('The UUID of the host device'),
    agent_id: z.uuid()
        .describe('The UUID of the agent'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the agent creation'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of the agent modification'),
    is_deleted: z.boolean().default(false)
        .describe('The flag of the agent deletion'),
    is_in_desired_state: z.boolean().default(false)
        .describe('The flag indicating if the agent is in the desired state'),
})
    .describe('The metadata of the agent');
export const AgentStateMetadata = z.object({
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the agent state creation'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of the agent state modification'),
    is_deleted: z.boolean().default(false)
        .describe('The flag of the agent state deletion'),
})
    .describe('The metadata of the agent state');
export const AgentStatusMetadata = AgentStateMetadata;
export const AgentStateBase = z.object({
    uri: URI.nullable()
        .describe('The URI of the agent'),
    pull_interval: z.number().nullable()
        .describe('The pull interval of the agent'),
    push_interval: z.number().nullable()
        .describe('The push interval of the agent'),
    min_backoff_interval: z.number().nullable()
        .describe('The minimum backoff interval of the agent'),
    max_backoff_interval: z.number().nullable()
        .describe('The maximum backoff interval of the agent'),
    detail: jsonCodec(z.json())
        .describe('The detail of the agent state'),
})
    .describe('The state of the agent');
export const AgentState = AgentStateBase.extend(AgentStateMetadata.shape);
export const AgentStatusBase = z.object({
    uri: URI.nullable()
        .describe('The URI of the agent'),
    detail: jsonCodec(z.json())
        .describe('The detail of the agent status'),
    has_error: z.boolean().default(false)
        .describe('The flag of the device error'),
    error_stack: z.string().nullable()
        .describe('The stack of the device error'),
})
    .describe('The status of the agent');
export const AgentStatus = AgentStatusBase.extend(AgentStatusMetadata.shape);
const AgentBaseWithMetadata = AgentBase.extend(AgentMetadata.shape);
const AgentDesiredState = AgentStateBase.extend(AgentStateMetadata.shape);
const AgentRuntimeState = AgentStateBase.extend(AgentStateMetadata.shape);
const AgentRuntimeStatus = AgentStatusBase.extend(AgentStatusMetadata.shape);
export const Agent = AgentBaseWithMetadata.extend({
    desired_state: AgentDesiredState.nullable()
        .describe('The desired state of the agent'),
    runtime_state: AgentRuntimeState.nullable()
        .describe('The runtime state of the agent'),
    runtime_status: AgentRuntimeStatus.nullable()
        .describe('The runtime status of the agent'),
});
export const DbDtoToAgentState = z.object({
    uri: URI.nullable(),
    pull_interval: z.number().nullable(),
    push_interval: z.number().nullable(),
    min_backoff_interval: z.number().nullable(),
    max_backoff_interval: z.number().nullable(),
    detail: nullableJsonSchema(z.json()),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: sqliteBoolSchema,
})
    .transform((dto) => (dto));
export const DbDtoToAgentStatus = z.object({
    uri: URI.nullable(),
    detail: z.string().nullable(),
    has_error: sqliteBoolSchema,
    error_stack: z.string().nullable(),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: sqliteBoolSchema,
})
    .transform((dto) => (dto));
export const DbDtoFromAgentBase = AgentBase.transform((agent) => {
    return {
        ...agent,
        tags: JSON.stringify(agent.tags),
    };
});
export const DbDtoFromAgent = Agent.transform((agent) => {
    return {
        ...agent,
        tags: JSON.stringify(agent.tags),
    };
});
export const DbDtoToAgentBase = z.object({
    name: z.string(),
    tags: jsonSchema(z.array(z.string().max(64))),
})
    .transform((dto) => (dto));
export const DbDtoToAgent = z.object({
    tenant_id: z.uuid(),
    device_id: z.uuid(),
    agent_id: z.uuid(),
    name: z.string(),
    tags: jsonSchema(z.array(z.string().max(64))),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: sqliteBoolSchema,
    is_in_desired_state: sqliteBoolSchema,
    desired_state_uri: URI.nullable().optional(),
    desired_state_pull_interval: z.number().nullable().optional(),
    desired_state_push_interval: z.number().nullable().optional(),
    desired_state_min_backoff_interval: z.number().nullable().optional(),
    desired_state_max_backoff_interval: z.number().nullable().optional(),
    desired_state_detail: nullableJsonSchema(z.json()).optional(),
    desired_state_create_timestamp: sqliteDateSchema.optional(),
    desired_state_modify_timestamp: sqliteDateSchema.optional(),
    desired_state_is_deleted: sqliteBoolSchema.optional(),
    runtime_state_uri: URI.nullable().optional(),
    runtime_state_pull_interval: z.number().nullable().optional(),
    runtime_state_push_interval: z.number().nullable().optional(),
    runtime_state_min_backoff_interval: z.number().nullable().optional(),
    runtime_state_max_backoff_interval: z.number().nullable().optional(),
    runtime_state_detail: nullableJsonSchema(z.json()).optional(),
    runtime_state_create_timestamp: sqliteDateSchema.optional(),
    runtime_state_modify_timestamp: sqliteDateSchema.optional(),
    runtime_state_is_deleted: sqliteBoolSchema.optional(),
    runtime_status_uri: URI.nullable().optional(),
    runtime_status_detail: nullableJsonSchema(z.json()).optional(),
    runtime_status_has_error: sqliteBoolSchema.optional(),
    runtime_status_error_stack: z.string().nullable().optional(),
    runtime_status_create_timestamp: sqliteDateSchema.optional(),
    runtime_status_modify_timestamp: sqliteDateSchema.optional(),
    runtime_status_is_deleted: sqliteBoolSchema.optional(),
})
    .transform((dto) => ({
    // AgentBase
    name: dto.name,
    tags: dto.tags,
    // AgentMetadata
    tenant_id: dto.tenant_id,
    device_id: dto.device_id,
    agent_id: dto.agent_id,
    create_timestamp: dto.create_timestamp,
    modify_timestamp: dto.modify_timestamp,
    is_deleted: dto.is_deleted,
    is_in_desired_state: dto.is_in_desired_state,
    // Agent
    desired_state: (typeof dto.desired_state_create_timestamp === 'undefined') ? null : {
        uri: dto.desired_state_uri ?? null,
        pull_interval: dto.desired_state_pull_interval ?? null,
        push_interval: dto.desired_state_push_interval ?? null,
        min_backoff_interval: dto.desired_state_min_backoff_interval ?? null,
        max_backoff_interval: dto.desired_state_max_backoff_interval ?? null,
        detail: dto.desired_state_detail,
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
        detail: dto.runtime_state_detail,
        create_timestamp: dto.runtime_state_create_timestamp,
        modify_timestamp: dto.runtime_state_modify_timestamp,
        is_deleted: dto.runtime_state_is_deleted,
    },
    runtime_status: (typeof dto.runtime_status_create_timestamp === 'undefined') ? null : {
        uri: dto.runtime_status_uri ?? null,
        detail: dto.runtime_status_detail,
        has_error: dto.runtime_status_has_error,
        error_stack: dto.runtime_status_error_stack ?? null,
        create_timestamp: dto.runtime_status_create_timestamp,
        modify_timestamp: dto.runtime_status_modify_timestamp,
        is_deleted: dto.runtime_status_is_deleted,
    },
}));
//# sourceMappingURL=agent.schema.js.map