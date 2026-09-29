// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { URISchema } from './uri.schema.js';
import { JsonSchema, NullableJsonSchema } from './json.codec.js';
import { SqliteBoolSchema } from './sqlite-bool.codec.js';
import { SqliteDateSchema } from './sqlite-date.codec.js';

export const AgentRegistrationSchema = z.object({
	tenant_id: z.string()
		.describe('The tenant ID of the agent'),
	device_id: z.uuid()
		.describe('The UUID of the host device'),
	agent_id: z.uuid()
		.describe('The UUID of the agent'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the agent creation'),
})
	.describe('The registration of the agent');
export type AgentRegistration = z.infer<typeof AgentRegistrationSchema>;

export const AgentBaseSchema = z.object({
	name: z.string()
		.describe('The name of the agent'),
	tags: z.array(z.string()).max(64)
		.describe('The tags of the agent'),
})
	.describe('Base information of the agent');
export type AgentBase = z.infer<typeof AgentBaseSchema>;

export const AgentMetadataSchema = z.object({
	tenant_id: z.string()
		.describe('The tenant ID of the agent'),
	device_id: z.uuid()
		.describe('The UUID of the host device'),
	agent_id: z.uuid()
		.describe('The UUID of the agent'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the agent creation'),
	modify_timestamp: z.iso.datetime()
		.describe('The ISO datetime of the agent modification'),
	is_deleted: z.boolean().default(false)
		.describe('The flag of the agent deletion'),
	is_in_desired_state: z.boolean().default(false)
		.describe('The flag indicating if the agent is in the desired state'),
})
	.describe('The metadata of the agent');
export type AgentMetadata = z.infer<typeof AgentMetadataSchema>;

export const AgentStateMetadataSchema = z.object({
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of the agent state creation'),
	modify_timestamp: z.iso.datetime()
		.describe('The ISO datetime of the agent state modification'),
	is_deleted: z.boolean().default(false)
		.describe('The flag of the agent state deletion'),
})
	.describe('The metadata of the agent state');
export type AgentStateMetadata = z.infer<typeof AgentStateMetadataSchema>;

export const AgentStatusMetadataSchema = AgentStateMetadataSchema;
export type AgentStatusMetadata = z.infer<typeof AgentStatusMetadataSchema>;

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
})
	.describe('The state of the agent');
export type AgentStateBase = z.infer<typeof AgentStateBaseSchema>;
export const AgentStateSchema = AgentStateBaseSchema.extend(AgentStateMetadataSchema.shape);
export type AgentState = z.infer<typeof AgentStateSchema>;

export const AgentStatusBaseSchema = z.object({
	uri: URISchema.nullable()
		.describe('The URI of the agent'),
	detail: z.json()
		.describe('The detail of the agent status'),
	has_error: z.boolean().default(false)
		.describe('The flag of the device error'),
	error_stack: z.string().nullable()
		.describe('The stack of the device error'),
})
	.describe('The status of the agent');
export type AgentStatusBase = z.infer<typeof AgentStatusBaseSchema>;
export const AgentStatusSchema = AgentStatusBaseSchema.extend(AgentStatusMetadataSchema.shape);
export type AgentStatus = z.infer<typeof AgentStatusSchema>;

const AgentBaseWithMetadataSchema = AgentBaseSchema.extend(AgentMetadataSchema.shape);
const AgentDesiredStateSchema = AgentStateBaseSchema.extend(AgentStateMetadataSchema.shape);
const AgentRuntimeStateSchema = AgentStateBaseSchema.extend(AgentStateMetadataSchema.shape);
const AgentRuntimeStatusSchema = AgentStatusBaseSchema.extend(AgentStatusMetadataSchema.shape);

export const AgentSchema = AgentBaseWithMetadataSchema.extend({
	desired_state: AgentDesiredStateSchema.nullable()
		.describe('The desired state of the agent'),
	runtime_state: AgentRuntimeStateSchema.nullable()
		.describe('The runtime state of the agent'),
	runtime_status: AgentRuntimeStatusSchema.nullable()
		.describe('The runtime status of the agent'),
});
export type Agent = z.infer<typeof AgentSchema>;

export const DbDtoToAgentStateSchema = z.object({
	uri: URISchema.nullable(),
	pull_interval: z.number().nullable(),
	push_interval: z.number().nullable(),
	min_backoff_interval: z.number().nullable(),
	max_backoff_interval: z.number().nullable(),
	detail: NullableJsonSchema(z.json()),
	create_timestamp: SqliteDateSchema,
	modify_timestamp: SqliteDateSchema,
	is_deleted: SqliteBoolSchema,
})
.transform((dto): AgentState => (dto));

export const DbDtoToAgentStatusSchema = z.object({
	uri: URISchema.nullable(),
	detail: NullableJsonSchema(z.json()),
	has_error: SqliteBoolSchema,
	error_stack: z.string().nullable(),
	create_timestamp: SqliteDateSchema,
	modify_timestamp: SqliteDateSchema,
	is_deleted: SqliteBoolSchema,
})
.transform((dto): AgentStatus => (dto));

export const DbDtoFromAgentBaseSchema = AgentBaseSchema.transform((agent: AgentBase) => {
	return {
		...agent,
		tags: JsonSchema(z.array(z.string().max(64))),
	};
});
export const DbDtoFromAgentSchema = AgentSchema.transform((agent: Agent) => {
	return {
		...agent,
		tags: JsonSchema(z.array(z.string().max(64))),
	};
});

export const DbDtoToAgentBaseSchema = z.object({
	name: z.string(),
	tags: JsonSchema(z.array(z.string().max(64))),
})
.transform((dto): AgentBase => (dto));

export const DbDtoToAgentSchema = z.object({
	tenant_id: z.uuid(),
	device_id: z.uuid(),
	agent_id: z.uuid(),
	name: z.string(),
	tags: JsonSchema(z.array(z.string().max(64))),
	create_timestamp: SqliteDateSchema,
	modify_timestamp: SqliteDateSchema,
	is_deleted: SqliteBoolSchema,
	is_in_desired_state: SqliteBoolSchema,
	desired_state_uri: URISchema.nullable().optional(),
	desired_state_pull_interval: z.number().nullable().optional(),
	desired_state_push_interval: z.number().nullable().optional(),
	desired_state_min_backoff_interval: z.number().nullable().optional(),
	desired_state_max_backoff_interval: z.number().nullable().optional(),
	desired_state_detail: NullableJsonSchema(z.json()).optional(),
	desired_state_create_timestamp: SqliteDateSchema.optional(),
	desired_state_modify_timestamp: SqliteDateSchema.optional(),
	desired_state_is_deleted: SqliteBoolSchema.optional(),
	runtime_state_uri: URISchema.nullable().optional(),
	runtime_state_pull_interval: z.number().nullable().optional(),
	runtime_state_push_interval: z.number().nullable().optional(),
	runtime_state_min_backoff_interval: z.number().nullable().optional(),
	runtime_state_max_backoff_interval: z.number().nullable().optional(),
	runtime_state_detail: NullableJsonSchema(z.json()).optional(),
	runtime_state_create_timestamp: SqliteDateSchema.optional(),
	runtime_state_modify_timestamp: SqliteDateSchema.optional(),
	runtime_state_is_deleted: SqliteBoolSchema.optional(),
	runtime_status_uri: URISchema.nullable().optional(),
	runtime_status_detail: NullableJsonSchema(z.json()).optional(),
	runtime_status_has_error: SqliteBoolSchema.optional(),
	runtime_status_error_stack: z.string().nullable().optional(),
	runtime_status_create_timestamp: SqliteDateSchema.optional(),
	runtime_status_modify_timestamp: SqliteDateSchema.optional(),
	runtime_status_is_deleted: SqliteBoolSchema.optional(),
})
.transform((dto): Agent => ({
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
		detail: dto.desired_state_detail ?? null,
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
		detail: dto.runtime_state_detail ?? null,
		create_timestamp: dto.runtime_state_create_timestamp!,
		modify_timestamp: dto.runtime_state_modify_timestamp!,
		is_deleted: dto.runtime_state_is_deleted!,
	},
	runtime_status: (typeof dto.runtime_status_create_timestamp === 'undefined') ? null : {
		uri: dto.runtime_status_uri ?? null,
		detail: dto.runtime_status_detail ?? null,
		has_error: dto.runtime_status_has_error!,
		error_stack: dto.runtime_status_error_stack ?? null,
		create_timestamp: dto.runtime_status_create_timestamp!,
		modify_timestamp: dto.runtime_status_modify_timestamp!,
		is_deleted: dto.runtime_status_is_deleted!,
	},
}));
