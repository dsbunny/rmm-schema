// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';

export const AgentBase = z.object({
	name: z.string()
		.describe('The name of the agent'),
	tags: z.array(z.string())
		.describe('The tags of the agent'),
});
export type AgentBase = z.infer<typeof AgentBase>;

export const AgentMetadata = z.object({
	tenant_id: z.string()
		.describe('The tenant ID of the agent'),
	device_id: z.string()
		.describe('The device ID of the agent'),
	agent_id: z.string().uuid()
		.describe('The UUID of the agent'),
	create_timestamp: z.string().datetime()  // ISO 8601
		.describe('The timestamp of the agent creation'),
	modify_timestamp: z.string().datetime()
		.describe('The timestamp of the agent modification'),
	is_deleted: z.boolean().default(false)
		.describe('The flag of the agent deletion'),
});

export const AgentStateBase = z.object({
	url: z.string().url().nullable()
		.describe('The URL of the agent'),
	pull_interval: z.number().nullable()
		.describe('The pull interval of the agent'),
	push_interval: z.number().nullable()
		.describe('The push interval of the agent'),
	min_backoff_interval: z.number().nullable()
		.describe('The minimum backoff interval of the agent'),
	max_backoff_interval: z.number().nullable()
		.describe('The maximum backoff interval of the agent'),
	detail: z.record(z.any()).nullable()
})
	.describe('The state of the agent');
export type AgentStateBase = z.infer<typeof AgentStateBase>;

export const AgentState = AgentStateBase.merge(AgentMetadata);
export type AgentState = z.infer<typeof AgentState>;

export const AgentStatusBase = z.object({
	detail: z.record(z.any()).nullable()
		.describe('The detail of the agent status'),
})
	.describe('The status of the agent');
export type AgentStatusBase = z.infer<typeof AgentStatusBase>;

export const AgentStatus = AgentStatusBase.merge(AgentMetadata);
export type AgentStatus = z.infer<typeof AgentStatus>;

export const Agent = AgentBase.merge(AgentMetadata)
	.merge(z.object({
		desired_state: AgentState
			.omit({
				tenant_id: true,
				device_id: true,
				agent_id: true,
				is_deleted: true,
			})
			.nullable()
			.describe('The desired state of the agent'),
		runtime_state: AgentState
			.omit({
				tenant_id: true,
				device_id: true,
				agent_id: true,
				is_deleted: true,
			})
			.nullable()
			.describe('The runtime state of the agent'),
		runtime_status: AgentStatus
			.omit({
				tenant_id: true,
				device_id: true,
				agent_id: true,
				is_deleted: true,
			})
			.nullable()
			.describe('The runtime status of the agent'),

	}));
export type Agent = z.infer<typeof Agent>;

// SQL date string to ISO 8601,
// e.g. "2023-10-15 15:09:50" to "2023-10-15T15:09:50.000Z"
const sqliteDateSchema = z.string().transform((date) => {
	return `${date.replace(' ', 'T')}.000Z`;
});

export const DbDtoToAgentState = z.object({
	tenant_id: z.string().uuid(),
	device_id: z.string().uuid(),
	agent_id: z.string().uuid(),
	url: z.string().nullable(),
	pull_interval: z.number().nullable(),
	push_interval: z.number().nullable(),
	min_backoff_interval: z.number().nullable(),
	max_backoff_interval: z.number().nullable(),
	detail: z.string().nullable(),
	create_timestamp: sqliteDateSchema,
	modify_timestamp: sqliteDateSchema,
	is_deleted: z.number().default(0),
})
	.transform((dto): AgentState => {
		return {
			...dto,
			detail: dto.detail ? JSON.parse(dto.detail) : null,
			is_deleted: Boolean(dto.is_deleted),
		};
	});

export const DbDtoToAgentStatus = z.object({
	tenant_id: z.string().uuid(),
	device_id: z.string().uuid(),
	agent_id: z.string().uuid(),
	detail: z.string().nullable(),
	create_timestamp: sqliteDateSchema,
	modify_timestamp: sqliteDateSchema,
	is_deleted: z.number().default(0),
})
	.transform((dto): AgentStatus => {
		return {
			...dto,
			detail: dto.detail ? JSON.parse(dto.detail) : null,
			is_deleted: Boolean(dto.is_deleted),
		};
	});

export const DbDtoFromAgentBase = AgentBase.transform((agent: AgentBase) => {
	return {
		...agent,
		tags: JSON.stringify(agent.tags),
	};
});
export const DbDtoFromAgent = Agent.transform((agent: Agent) => {
	return {
		...agent,
		tags: JSON.stringify(agent.tags),
	};
});

export const DbDtoToAgentBase = z.object({
	name: z.string(),
	tags: z.string(),
})
	.transform((dto): AgentBase => {
		return {
			...dto,
			tags: JSON.parse(dto.tags),
		};
	});
export const DbDtoToAgent = z.object({
	tenant_id: z.string().uuid(),
	device_id: z.string().uuid(),
	agent_id: z.string().uuid(),
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
	desired_state_detail: z.string().nullable().optional(),
	desired_state_create_timestamp: sqliteDateSchema.optional(),
	desired_state_modify_timestamp: sqliteDateSchema.optional(),
	runtime_state_url: z.string().nullable().optional(),
	runtime_state_pull_interval: z.number().nullable().optional(),
	runtime_state_push_interval: z.number().nullable().optional(),
	runtime_state_min_backoff_interval: z.number().nullable().optional(),
	runtime_state_max_backoff_interval: z.number().nullable().optional(),
	runtime_state_detail: z.string().nullable().optional(),
	runtime_state_create_timestamp: sqliteDateSchema.optional(),
	runtime_state_modify_timestamp: sqliteDateSchema.optional(),
	runtime_status_detail: z.string().nullable().optional(),
	runtime_status_create_timestamp: sqliteDateSchema.optional(),
	runtime_status_modify_timestamp: sqliteDateSchema.optional(),
})
	.transform((dto): Agent => {
		const desired_state = (
			   typeof dto.desired_state_url === "undefined"
			&& typeof dto.desired_state_pull_interval === "undefined"
			&& typeof dto.desired_state_push_interval === "undefined"
			&& typeof dto.desired_state_min_backoff_interval === "undefined"
			&& typeof dto.desired_state_max_backoff_interval === "undefined"
			&& typeof dto.desired_state_detail === "undefined"
			&& typeof dto.desired_state_create_timestamp === "undefined"
			&& typeof dto.desired_state_modify_timestamp === "undefined"
		) ? null : {
			url: dto.desired_state_url ?? null,
			pull_interval: dto.desired_state_pull_interval ?? null,
			push_interval: dto.desired_state_push_interval ?? null,
			min_backoff_interval: dto.desired_state_min_backoff_interval ?? null,
			max_backoff_interval: dto.desired_state_max_backoff_interval ?? null,
			detail: dto.desired_state_detail
				? JSON.parse(dto.desired_state_detail)
				: null,
			create_timestamp: z.string().parse(dto.desired_state_create_timestamp),
			modify_timestamp: z.string().parse(dto.desired_state_modify_timestamp),
		};
		const runtime_state = (
			   typeof dto.runtime_state_url === "undefined"
			&& typeof dto.runtime_state_pull_interval === "undefined"
			&& typeof dto.runtime_state_push_interval === "undefined"
			&& typeof dto.runtime_state_min_backoff_interval === "undefined"
			&& typeof dto.runtime_state_max_backoff_interval === "undefined"
			&& typeof dto.runtime_state_detail === "undefined"
			&& typeof dto.runtime_state_create_timestamp === "undefined"
			&& typeof dto.runtime_state_modify_timestamp === "undefined"
		) ? null : {
			url: dto.runtime_state_url ?? null,
			pull_interval: dto.runtime_state_pull_interval ?? null,
			push_interval: dto.runtime_state_push_interval ?? null,
			min_backoff_interval: dto.runtime_state_min_backoff_interval ?? null,
			max_backoff_interval: dto.runtime_state_max_backoff_interval ?? null,
			detail: dto.runtime_state_detail
				? JSON.parse(dto.runtime_state_detail)
				: null,
			create_timestamp: z.string().parse(dto.runtime_state_create_timestamp),
			modify_timestamp: z.string().parse(dto.runtime_state_modify_timestamp),
		};
		const runtime_status = (
			   typeof dto.runtime_status_detail === "undefined"
			&& typeof dto.runtime_status_create_timestamp === "undefined"
			&& typeof dto.runtime_status_modify_timestamp === "undefined"
		) ? null : {
			detail: dto.runtime_status_detail
				? JSON.parse(dto.runtime_status_detail)
				: null,
			create_timestamp: z.string().parse(dto.runtime_status_create_timestamp),
			modify_timestamp: z.string().parse(dto.runtime_status_modify_timestamp),
		};
		return {
			// AgentBase
			name: dto.name,
			tags: JSON.parse(dto.tags),
			// AgentMetadata
			tenant_id: dto.tenant_id,
			device_id: dto.device_id,
			agent_id: dto.agent_id,
			create_timestamp: dto.create_timestamp,
			modify_timestamp: dto.modify_timestamp,
			is_deleted: Boolean(dto.is_deleted),
			// Agent
			desired_state,
			runtime_state,
			runtime_status,
		};
	});
