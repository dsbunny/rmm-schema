// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { URISchema } from '@dsbunny/net-schema';
export const AgentRegistrationSchema = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the agent'),
    device_id: z.uuid()
        .describe('The UUID of the host device'),
    agent_id: z.uuid()
        .describe('The UUID of the agent'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the agent creation'),
}).register(dsbunnyRegistry, {
    id: 'AgentRegistrationSchema',
    description: 'The registration schema of the agent',
});
export const AgentBaseSchema = z.object({
    name: z.string()
        .describe('The name of the agent'),
    tags: z.array(z.string()).max(64)
        .describe('The tags of the agent'),
}).register(dsbunnyRegistry, {
    id: 'AgentBaseSchema',
    description: 'Base information of the agent',
});
export const AgentMetadataSchema = z.object({
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
}).register(dsbunnyRegistry, {
    id: 'AgentMetadataSchema',
    description: 'The metadata of the agent',
});
export const AgentStateMetadataSchema = z.object({
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the agent state creation'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of the agent state modification'),
    is_deleted: z.boolean().default(false)
        .describe('The flag of the agent state deletion'),
}).register(dsbunnyRegistry, {
    id: 'AgentStateMetadataSchema',
    description: 'The metadata of the agent state',
});
export const AgentStatusMetadataSchema = AgentStateMetadataSchema.register(dsbunnyRegistry, {
    id: 'AgentStatusMetadataSchema',
    description: 'The metadata of the agent status',
});
export const AgentStateBaseSchema = z.object({
    uri: URISchema.nullable()
        .describe('The URI of the agent'),
    pull_interval: z.number().nullable()
        .describe('The pull interval of the agent'),
    push_interval: z.number().nullable()
        .describe('The push interval of the agent'),
    min_backoff_interval: z.number().nullable()
        .describe('The minimum backoff interval of the agent'),
    max_backoff_interval: z.number().nullable()
        .describe('The maximum backoff interval of the agent'),
    detail: z.json()
        .describe('The detail of the agent state'),
}).register(dsbunnyRegistry, {
    id: 'AgentStateBaseSchema',
    description: 'The state of the agent',
});
export const AgentStateSchema = AgentStateBaseSchema.extend(AgentStateMetadataSchema.shape).register(dsbunnyRegistry, {
    id: 'AgentStateSchema',
    description: 'The state of the agent with metadata',
});
export const AgentStatusBaseSchema = z.object({
    uri: URISchema.nullable()
        .describe('The URI of the agent'),
    detail: z.json()
        .describe('The detail of the agent status'),
    has_error: z.boolean().default(false)
        .describe('The flag of the device error'),
    error_stack: z.string().nullable()
        .describe('The stack of the device error'),
}).register(dsbunnyRegistry, {
    id: 'AgentStatusBaseSchema',
    description: 'The status of the agent',
});
export const AgentStatusSchema = AgentStatusBaseSchema.extend(AgentStatusMetadataSchema.shape).register(dsbunnyRegistry, {
    id: 'AgentStatusSchema',
    description: 'The status of the agent with metadata',
});
const AgentBaseWithMetadataSchema = AgentBaseSchema.extend(AgentMetadataSchema.shape).register(dsbunnyRegistry, {
    id: 'AgentBaseWithMetadataSchema',
    description: 'The base information of the agent with metadata',
});
const AgentDesiredStateSchema = AgentStateBaseSchema.extend(AgentStateMetadataSchema.shape).register(dsbunnyRegistry, {
    id: 'AgentDesiredStateSchema',
    description: 'The desired state of the agent with metadata',
});
const AgentRuntimeStateSchema = AgentStateBaseSchema.extend(AgentStateMetadataSchema.shape).register(dsbunnyRegistry, {
    id: 'AgentRuntimeStateSchema',
    description: 'The runtime state of the agent with metadata',
});
const AgentRuntimeStatusSchema = AgentStatusBaseSchema.extend(AgentStatusMetadataSchema.shape).register(dsbunnyRegistry, {
    id: 'AgentRuntimeStatusSchema',
    description: 'The runtime status of the agent with metadata',
});
export const AgentSchema = AgentBaseWithMetadataSchema.extend({
    desired_state: AgentDesiredStateSchema.nullable()
        .describe('The desired state of the agent'),
    runtime_state: AgentRuntimeStateSchema.nullable()
        .describe('The runtime state of the agent'),
    runtime_status: AgentRuntimeStatusSchema.nullable()
        .describe('The runtime status of the agent'),
}).register(dsbunnyRegistry, {
    id: 'AgentSchema',
    description: 'The agent with desired state, runtime state, and runtime status',
});
//# sourceMappingURL=agent.schema.js.map