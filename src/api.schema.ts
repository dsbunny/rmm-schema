// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from './patch-operation.schema.js';
import {
	DeviceSchema,
	DeviceBaseSchema,
	DeviceRegistrationSchema,
	DeviceStateSchema,
	DeviceStateBaseSchema,
	DeviceStatusSchema,
	DeviceStatusBaseSchema,
} from './device.schema.js';
import {
	AgentSchema,
	AgentBaseSchema,
	AgentRegistrationSchema,
	AgentStateSchema,
	AgentStateBaseSchema,
	AgentStatusSchema,
	AgentStatusBaseSchema,
} from './agent.schema.js';

// #region Devices
export const ListDevicesRequestSchema = z.object({})
	.describe('Device enumeration request schema');
export type ListDevicesRequest = z.infer<typeof ListDevicesRequestSchema>;

export const ListDevicesResponseSchema = z.object({
	devices: z.array(DeviceSchema),
	agents: z.array(AgentSchema).optional(),
	next_token: z.string().nullable(),
})
	.describe('Device enumeration response schema');
export type ListDevicesResponse = z.infer<typeof ListDevicesResponseSchema>;

export const GetDeviceSuggestionsRequestSchema = z.object({})
	.describe('Get device suggestions request schema');
export type GetDeviceSuggestionsRequest = z.infer<typeof GetDeviceSuggestionsRequestSchema>;
export const GetDeviceSuggestionsResponseSchema = z.object({
	c: z.string()
		.describe('Device name auto-complete for given prefix'),
	s: z.array(z.string())
		.describe('Device name suggestions for given input'),
})
	.describe('Get device suggestions response schema');
export type GetDeviceSuggestionsResponse = z.infer<typeof GetDeviceSuggestionsResponseSchema>;

export const GetDeviceAvailabilityRequestSchema = z.object({})
	.describe('Get device availability request schema');
export type GetDeviceAvailabilityRequest = z.infer<typeof GetDeviceAvailabilityRequestSchema>;
export const GetDeviceAvailabilityResponseSchema = z.object({
	is_available: z.boolean()
		.describe('Indicates if the device name is available'),
})
	.describe('Get device availability response schema');
export type GetDeviceAvailabilityResponse = z.infer<typeof GetDeviceAvailabilityResponseSchema>;

export const GetDeviceRequestSchema = z.object({})
	.describe('Device retrieval request schema');
export type GetDeviceRequest = z.infer<typeof GetDeviceRequestSchema>;
export const GetDeviceResponseSchema = z.object({
	device: DeviceSchema,
	agents: z.array(AgentSchema).optional(),
	next_token: z.string().nullable(),
})
	.describe('Device retrieval response schema');
export type GetDeviceResponse = z.infer<typeof GetDeviceResponseSchema>;

export const PatchDeviceRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Device patch request schema');
export type PatchDeviceRequest = z.infer<typeof PatchDeviceRequestSchema>;
export const PatchDeviceResponseSchema = DeviceSchema
	.describe('Device patch response schema');
export type PatchDeviceResponse = z.infer<typeof PatchDeviceResponseSchema>;

export const GetDeviceStateRequestSchema = z.object({})
	.describe('Device state retrieval request schema');
export type GetDeviceStateRequest = z.infer<typeof GetDeviceStateRequestSchema>;
export const GetDeviceStateResponseSchema = DeviceStateSchema
	.describe('Device state retrieval response schema');
export type GetDeviceStateResponse = z.infer<typeof GetDeviceStateResponseSchema>;

export const UpdateDeviceStateRequestSchema = DeviceStateBaseSchema
	.describe('Device state request schema');
export type UpdateDeviceStateRequest = z.infer<typeof UpdateDeviceStateRequestSchema>;
export const UpdateDeviceStateResponseSchema = DeviceStateSchema
	.describe('Device state response schema');
export type UpdateDeviceStateResponse = z.infer<typeof UpdateDeviceStateResponseSchema>;

export const PatchDeviceStateRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Device state patch request schema');
export type PatchDeviceStateRequest = z.infer<typeof PatchDeviceStateRequestSchema>;
export const PatchDeviceStateResponseSchema = DeviceStateSchema
	.describe('Device state patch response schema');
export type PatchDeviceStateResponse = z.infer<typeof PatchDeviceStateResponseSchema>;

export const GetDeviceStatusRequestSchema = z.object({})
	.describe('Device status retrieval request schema');
export type GetDeviceStatusRequest = z.infer<typeof GetDeviceStatusRequestSchema>;
export const GetDeviceStatusResponseSchema = DeviceStatusSchema
	.describe('Device status retrieval response schema');
export type GetDeviceStatusResponse = z.infer<typeof GetDeviceStatusResponseSchema>;

export const UpdateDeviceStatusRequestSchema = DeviceStatusBaseSchema
	.describe('Device status request schema');
export type UpdateDeviceStatusRequest = z.infer<typeof UpdateDeviceStatusRequestSchema>;
export const UpdateDeviceStatusResponseSchema = DeviceStatusSchema
	.describe('Device status response schema');
export type UpdateDeviceStatusResponse = z.infer<typeof UpdateDeviceStatusResponseSchema>;

export const PatchDeviceStatusRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Device status patch request schema');
export type PatchDeviceStatusRequest = z.infer<typeof PatchDeviceStatusRequestSchema>;
export const PatchDeviceStatusResponseSchema = DeviceStatusSchema
	.describe('Device status patch response schema');
export type PatchDeviceStatusResponse = z.infer<typeof PatchDeviceStatusResponseSchema>;

export const CreateDeviceRequestSchema = DeviceBaseSchema.omit({ user_tags: true, system_tags: true })
	.describe('Create device request schema');
export type CreateDeviceRequest = z.infer<typeof CreateDeviceRequestSchema>;
export const CreateDeviceResponseSchema = DeviceRegistrationSchema
	.describe('Create device response schema');
export type CreateDeviceResponse = z.infer<typeof CreateDeviceResponseSchema>;

export const CreateDeviceAgentRequestSchema = AgentBaseSchema
	.describe('Create device agent request schema');
export type CreateDeviceAgentRequest = z.infer<typeof CreateDeviceAgentRequestSchema>;
export const CreateDeviceAgentResponseSchema = AgentRegistrationSchema
	.describe('Create device agent response schema');
export type CreateDeviceAgentResponse = z.infer<typeof CreateDeviceAgentResponseSchema>;
// #endregion

// #region Agents
export const ListAgentsRequestSchema = z.object({})
	.describe('Agent enumeration request schema');
export type ListAgentsRequest = z.infer<typeof ListAgentsRequestSchema>;
export const ListAgentsResponseSchema = z.object({
	agents: z.array(AgentSchema),
	next_token: z.string().nullable(),
})
	.describe('Agent enumeration response schema');
export type ListAgentsResponse = z.infer<typeof ListAgentsResponseSchema>;

export const GetAgentSuggestionsRequestSchema = z.object({})
	.describe('Get agent suggestions request schema');
export type GetAgentSuggestionsRequest = z.infer<typeof GetAgentSuggestionsRequestSchema>;
export const GetAgentSuggestionsResponseSchema = z.object({
	c: z.string()
		.describe('Agent name auto-complete for given prefix'),
	s: z.array(z.string())
		.describe('Agent name suggestions for given input'),
})
	.describe('Get agent suggestions response schema');
export type GetAgentSuggestionsResponse = z.infer<typeof GetAgentSuggestionsResponseSchema>;

export const GetAgentAvailabilityRequestSchema = z.object({})
	.describe('Get agent availability request schema');
export type GetAgentAvailabilityRequest = z.infer<typeof GetAgentAvailabilityRequestSchema>;
export const GetAgentAvailabilityResponseSchema = z.object({
	is_available: z.boolean()
		.describe('Indicates if the agent name is available'),
})
	.describe('Get agent availability response schema');
export type GetAgentAvailabilityResponse = z.infer<typeof GetAgentAvailabilityResponseSchema>;

export const UpdateAgentRequestSchema = AgentBaseSchema
	.describe('Agent update request schema');
export type UpdateAgentRequest = z.infer<typeof UpdateAgentRequestSchema>;
export const UpdateAgentResponseSchema = AgentSchema
	.describe('Agent update response schema');
export type UpdateAgentResponse = z.infer<typeof UpdateAgentResponseSchema>;

export const PatchAgentRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Agent patch request schema');
export type PatchAgentRequest = z.infer<typeof PatchAgentRequestSchema>;
export const PatchAgentResponseSchema = AgentSchema
	.describe('Agent patch response schema');
export type PatchAgentResponse = z.infer<typeof PatchAgentResponseSchema>;

export const GetAgentRequestSchema = z.object({})
	.describe('Agent retrieval request schema');
export type GetAgentRequest = z.infer<typeof GetAgentRequestSchema>;
export const GetAgentResponseSchema = AgentSchema
	.describe('Agent retrieval response schema');
export type GetAgentResponse = z.infer<typeof GetAgentResponseSchema>;

export const UpdateAgentStateRequestSchema = AgentStateBaseSchema
	.describe('Agent state request schema');
export type UpdateAgentStateRequest = z.infer<typeof UpdateAgentStateRequestSchema>;
export const UpdateAgentStateResponseSchema = AgentStateSchema
	.describe('Agent state response schema');
export type UpdateAgentStateResponse = z.infer<typeof UpdateAgentStateResponseSchema>;

export const PatchAgentStateRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Agent state patch request schema');
export type PatchAgentStateRequest = z.infer<typeof PatchAgentStateRequestSchema>;
export const PatchAgentStateResponseSchema = AgentStateSchema
	.describe('Agent state patch response schema');
export type PatchAgentStateResponse = z.infer<typeof PatchAgentStateResponseSchema>;

export const GetAgentStateRequestSchema = z.object({})
	.describe('Agent state retrieval request schema');
export type GetAgentStateRequest = z.infer<typeof GetAgentStateRequestSchema>;
export const GetAgentStateResponseSchema = AgentStateSchema
	.describe('Agent state retrieval response schema');
export type GetAgentStateResponse = z.infer<typeof GetAgentStateResponseSchema>;

export const GetAgentStatusRequestSchema = z.object({})
	.describe('Agent status retrieval request schema');
export type GetAgentStatusRequest = z.infer<typeof GetAgentStatusRequestSchema>;
export const GetAgentStatusResponseSchema = AgentStatusSchema
	.describe('Agent status retrieval response schema');
export type GetAgentStatusResponse = z.infer<typeof GetAgentStatusResponseSchema>;

export const UpdateAgentStatusRequestSchema = AgentStatusBaseSchema
	.describe('Agent status request schema');
export type UpdateAgentStatusRequest = z.infer<typeof UpdateAgentStatusRequestSchema>;
export const UpdateAgentStatusResponseSchema = AgentStatusSchema
	.describe('Agent status response schema');
export type UpdateAgentStatusResponse = z.infer<typeof UpdateAgentStatusResponseSchema>;

export const PatchAgentStatusRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Agent status patch request schema');
export type PatchAgentStatusRequest = z.infer<typeof PatchAgentStatusRequestSchema>;
export const PatchAgentStatusResponseSchema = AgentStatusSchema
	.describe('Agent status patch response schema');
export type PatchAgentStatusResponse = z.infer<typeof PatchAgentStatusResponseSchema>;
// #endregion

// #region API
export const RmmRequestSchema = z.union([
	ListDevicesRequestSchema,
	GetDeviceSuggestionsRequestSchema,
	GetDeviceAvailabilityRequestSchema,
	GetDeviceRequestSchema,
	PatchDeviceRequestSchema,
	GetDeviceStateRequestSchema,
	UpdateDeviceStateRequestSchema,
	PatchDeviceStateRequestSchema,
	GetDeviceStatusRequestSchema,
	UpdateDeviceStatusRequestSchema,
	PatchDeviceStatusRequestSchema,
	CreateDeviceRequestSchema,
	CreateDeviceAgentRequestSchema,
	ListAgentsRequestSchema,
	GetAgentSuggestionsRequestSchema,
	GetAgentAvailabilityRequestSchema,
	UpdateAgentRequestSchema,
	PatchAgentRequestSchema,
	GetAgentRequestSchema,
	UpdateAgentStateRequestSchema,
	PatchAgentStateRequestSchema,
	GetAgentStateRequestSchema,
	GetAgentStatusRequestSchema,
	UpdateAgentStatusRequestSchema,
	PatchAgentStatusRequestSchema,
])
	.describe('RMM request schema');
export type RmmRequest = z.infer<typeof RmmRequestSchema>;

export const RmmResponseSchema = z.union([
	ListDevicesResponseSchema,
	GetDeviceSuggestionsResponseSchema,
	GetDeviceAvailabilityResponseSchema,
	GetDeviceResponseSchema,
	PatchDeviceResponseSchema,
	GetDeviceStateResponseSchema,
	UpdateDeviceStateResponseSchema,
	PatchDeviceStateResponseSchema,
	GetDeviceStatusResponseSchema,
	UpdateDeviceStatusResponseSchema,
	PatchDeviceStatusResponseSchema,
	CreateDeviceResponseSchema,
	CreateDeviceAgentResponseSchema,
	ListAgentsResponseSchema,
	GetAgentSuggestionsResponseSchema,
	GetAgentAvailabilityResponseSchema,
	UpdateAgentResponseSchema,
	PatchAgentResponseSchema,
	GetAgentResponseSchema,
	UpdateAgentStateResponseSchema,
	PatchAgentStateResponseSchema,
	GetAgentStateResponseSchema,
	GetAgentStatusResponseSchema,
	UpdateAgentStatusResponseSchema,
	PatchAgentStatusResponseSchema,
	ErrorResponseSchema,
])
	.describe('RMM response schema');
export type RmmResponse = z.infer<typeof RmmResponseSchema>;
// #endregion
