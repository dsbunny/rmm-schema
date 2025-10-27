// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { JsonPatchOperation } from './patch-operation.schema.js';
import {
	Device,
	DeviceBase,
	DeviceRegistration,
	DeviceState,
	DeviceStateBase,
	DeviceStatus,
	DeviceStatusBase,
} from './device.schema.js';
import {
	Agent,
	AgentBase,
	AgentRegistration,
	AgentState,
	AgentStateBase,
	AgentStatus,
	AgentStatusBase,
} from './agent.schema.js';

// #region Errors
export const ErrorResponse = z.object({
	code: z.string()
		.describe('Error code representing the type of error.'),
	message: z.string()
		.describe('Error message describing the issue.'),
	detail: z.string()
		.describe('Additional details about the error, if available.'),
	timestamp: z.iso.datetime()
		.describe('Timestamp when the error occurred (ISO_8601 format).'),
})
	.describe('Error response schema');
export type ErrorResponse = z.infer<typeof ErrorResponse>;
// #endregion

// #region WebHook
export const WebHookRequest = z.object({
	ref_id: z.string(),
	class: z.string(),
})
	.describe('WebHook request schema');
export type WebHookRequest = z.infer<typeof WebHookRequest>;

export const WebHookResponse = z.object({})
	.describe('WebHook response schema');
export type WebHookResponse = z.infer<typeof WebHookResponse>;
// #endregion

// #region Devices
export const ListDevicesRequest = z.object({})
	.describe('Device enumeration request schema');
export type ListDevicesRequest = z.infer<typeof ListDevicesRequest>;

export const ListDevicesResponse = z.object({
	devices: z.array(Device),
	agents: z.array(Agent).optional(),
	next_token: z.string().nullable(),
})
	.describe('Device enumeration response schema');
export type ListDevicesResponse = z.infer<typeof ListDevicesResponse>;

export const GetDeviceSuggestionsRequest = z.object({})
	.describe('Get device suggestions request schema');
export type GetDeviceSuggestionsRequest = z.infer<typeof GetDeviceSuggestionsRequest>;
export const GetDeviceSuggestionsResponse = z.object({
	c: z.string()
		.describe('Device name auto-complete for given prefix'),
	s: z.array(z.string())
		.describe('Device name suggestions for given input'),
})
	.describe('Get device suggestions response schema');
export type GetDeviceSuggestionsResponse = z.infer<typeof GetDeviceSuggestionsResponse>;

export const GetDeviceRequest = z.object({})
	.describe('Device retrieval request schema');
export type GetDeviceRequest = z.infer<typeof GetDeviceRequest>;
export const GetDeviceResponse = z.object({
	device: Device,
	agents: z.array(Agent).optional(),
	next_token: z.string().nullable(),
})
	.describe('Device retrieval response schema');
export type GetDeviceResponse = z.infer<typeof GetDeviceResponse>;

export const UpdateDeviceRequest = z.array(JsonPatchOperation)
	.describe('Device update request schema');
export type UpdateDeviceRequest = z.infer<typeof UpdateDeviceRequest>;
export const UpdateDeviceResponse = Device
	.describe('Device update response schema');
export type UpdateDeviceResponse = z.infer<typeof UpdateDeviceResponse>;

export const GetDeviceStateRequest = z.object({})
	.describe('Device state retrieval request schema');
export type GetDeviceStateRequest = z.infer<typeof GetDeviceStateRequest>;
export const GetDeviceStateResponse = DeviceState
	.describe('Device state retrieval response schema');
export type GetDeviceStateResponse = z.infer<typeof GetDeviceStateResponse>;

export const UpdateDeviceStateRequest = DeviceStateBase
	.describe('Device state request schema');
export type UpdateDeviceStateRequest = z.infer<typeof UpdateDeviceStateRequest>;
export const UpdateDeviceStateResponse = DeviceState
	.describe('Device state response schema');
export type UpdateDeviceStateResponse = z.infer<typeof UpdateDeviceStateResponse>;

export const PatchDeviceStateRequest = z.array(JsonPatchOperation)
	.describe('Device state patch request schema');
export type PatchDeviceStateRequest = z.infer<typeof PatchDeviceStateRequest>;
export const PatchDeviceStateResponse = DeviceState
	.describe('Device state patch response schema');
export type PatchDeviceStateResponse = z.infer<typeof PatchDeviceStateResponse>;

export const GetDeviceStatusRequest = z.object({})
	.describe('Device status retrieval request schema');
export type GetDeviceStatusRequest = z.infer<typeof GetDeviceStatusRequest>;
export const GetDeviceStatusResponse = DeviceStatus
	.describe('Device status retrieval response schema');
export type GetDeviceStatusResponse = z.infer<typeof GetDeviceStatusResponse>;

export const UpdateDeviceStatusRequest = DeviceStatusBase
	.describe('Device status request schema');
export type UpdateDeviceStatusRequest = z.infer<typeof UpdateDeviceStatusRequest>;
export const UpdateDeviceStatusResponse = DeviceStatus
	.describe('Device status response schema');
export type UpdateDeviceStatusResponse = z.infer<typeof UpdateDeviceStatusResponse>;

export const PatchDeviceStatusRequest = z.array(JsonPatchOperation)
	.describe('Device status patch request schema');
export type PatchDeviceStatusRequest = z.infer<typeof PatchDeviceStatusRequest>;
export const PatchDeviceStatusResponse = DeviceStatus
	.describe('Device status patch response schema');
export type PatchDeviceStatusResponse = z.infer<typeof PatchDeviceStatusResponse>;

export const CreateDeviceRequest = DeviceBase.omit({ user_tags: true, system_tags: true })
	.describe('Create device request schema');
export type CreateDeviceRequest = z.infer<typeof CreateDeviceRequest>;
export const CreateDeviceResponse = DeviceRegistration
	.describe('Create device response schema');
export type CreateDeviceResponse = z.infer<typeof CreateDeviceResponse>;

export const CreateDeviceAgentRequest = AgentBase
	.describe('Create device agent request schema');
export type CreateDeviceAgentRequest = z.infer<typeof CreateDeviceAgentRequest>;
export const CreateDeviceAgentResponse = AgentRegistration
	.describe('Create device agent response schema');
export type CreateDeviceAgentResponse = z.infer<typeof CreateDeviceAgentResponse>;
// #endregion

// #region Agents
export const ListAgentsRequest = z.object({})
	.describe('Agent enumeration request schema');
export type ListAgentsRequest = z.infer<typeof ListAgentsRequest>;
export const ListAgentsResponse = z.object({
	agents: z.array(Agent),
	next_token: z.string().nullable(),
})
	.describe('Agent enumeration response schema');
export type ListAgentsResponse = z.infer<typeof ListAgentsResponse>;

export const GetAgentSuggestionsRequest = z.object({})
	.describe('Get agent suggestions request schema');
export type GetAgentSuggestionsRequest = z.infer<typeof GetAgentSuggestionsRequest>;
export const GetAgentSuggestionsResponse = z.object({
	c: z.string()
		.describe('Agent name auto-complete for given prefix'),
	s: z.array(z.string())
		.describe('Agent name suggestions for given input'),
})
	.describe('Get agent suggestions response schema');
export type GetAgentSuggestionsResponse = z.infer<typeof GetAgentSuggestionsResponse>;

export const UpdateAgentRequest = AgentBase
	.describe('Agent update request schema');
export type UpdateAgentRequest = z.infer<typeof UpdateAgentRequest>;
export const UpdateAgentResponse = Agent
	.describe('Agent update response schema');
export type UpdateAgentResponse = z.infer<typeof UpdateAgentResponse>;

export const PatchAgentRequest = z.array(JsonPatchOperation)
	.describe('Agent patch request schema');
export type PatchAgentRequest = z.infer<typeof PatchAgentRequest>;
export const PatchAgentResponse = Agent
	.describe('Agent patch response schema');
export type PatchAgentResponse = z.infer<typeof PatchAgentResponse>;

export const GetAgentRequest = z.object({})
	.describe('Agent retrieval request schema');
export type GetAgentRequest = z.infer<typeof GetAgentRequest>;
export const GetAgentResponse = Agent
	.describe('Agent retrieval response schema');
export type GetAgentResponse = z.infer<typeof GetAgentResponse>;

export const UpdateAgentStateRequest = AgentStateBase
	.describe('Agent state request schema');
export type UpdateAgentStateRequest = z.infer<typeof UpdateAgentStateRequest>;
export const UpdateAgentStateResponse = AgentState
	.describe('Agent state response schema');
export type UpdateAgentStateResponse = z.infer<typeof UpdateAgentStateResponse>;

export const PatchAgentStateRequest = z.array(JsonPatchOperation)
	.describe('Agent state patch request schema');
export type PatchAgentStateRequest = z.infer<typeof PatchAgentStateRequest>;
export const PatchAgentStateResponse = AgentState
	.describe('Agent state patch response schema');
export type PatchAgentStateResponse = z.infer<typeof PatchAgentStateResponse>;

export const GetAgentStateRequest = z.object({})
	.describe('Agent state retrieval request schema');
export type GetAgentStateRequest = z.infer<typeof GetAgentStateRequest>;
export const GetAgentStateResponse = AgentState
	.describe('Agent state retrieval response schema');
export type GetAgentStateResponse = z.infer<typeof GetAgentStateResponse>;

export const GetAgentStatusRequest = z.object({})
	.describe('Agent status retrieval request schema');
export type GetAgentStatusRequest = z.infer<typeof GetAgentStatusRequest>;
export const GetAgentStatusResponse = AgentStatus
	.describe('Agent status retrieval response schema');
export type GetAgentStatusResponse = z.infer<typeof GetAgentStatusResponse>;

export const UpdateAgentStatusRequest = AgentStatusBase
	.describe('Agent status request schema');
export type UpdateAgentStatusRequest = z.infer<typeof UpdateAgentStatusRequest>;
export const UpdateAgentStatusResponse = AgentStatus
	.describe('Agent status response schema');
export type UpdateAgentStatusResponse = z.infer<typeof UpdateAgentStatusResponse>;

export const PatchAgentStatusRequest = z.array(JsonPatchOperation)
	.describe('Agent status patch request schema');
export type PatchAgentStatusRequest = z.infer<typeof PatchAgentStatusRequest>;
export const PatchAgentStatusResponse = AgentStatus
	.describe('Agent status patch response schema');
export type PatchAgentStatusResponse = z.infer<typeof PatchAgentStatusResponse>;
// #endregion
