// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from './patch-operation.schema.js';
import { DeviceSchema, DeviceBaseSchema, DeviceRegistrationSchema, DeviceStateSchema, DeviceStateBaseSchema, DeviceStatusSchema, DeviceStatusBaseSchema, } from './device.schema.js';
import { AgentSchema, AgentBaseSchema, AgentRegistrationSchema, AgentStateSchema, AgentStateBaseSchema, AgentStatusSchema, AgentStatusBaseSchema, } from './agent.schema.js';
// #region Devices
export const ListDevicesRequestSchema = z.object({})
    .describe('Device enumeration request schema');
export const ListDevicesResponseSchema = z.object({
    devices: z.array(DeviceSchema),
    agents: z.array(AgentSchema).optional(),
    next_token: z.string().nullable(),
})
    .describe('Device enumeration response schema');
export const GetDeviceSuggestionsRequestSchema = z.object({})
    .describe('Get device suggestions request schema');
export const GetDeviceSuggestionsResponseSchema = z.object({
    c: z.string()
        .describe('Device name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Device name suggestions for given input'),
})
    .describe('Get device suggestions response schema');
export const GetDeviceAvailabilityRequestSchema = z.object({})
    .describe('Get device availability request schema');
export const GetDeviceAvailabilityResponseSchema = z.object({
    is_available: z.boolean()
        .describe('Indicates if the device name is available'),
})
    .describe('Get device availability response schema');
export const GetDeviceRequestSchema = z.object({})
    .describe('Device retrieval request schema');
export const GetDeviceResponseSchema = z.object({
    device: DeviceSchema,
    agents: z.array(AgentSchema).optional(),
    next_token: z.string().nullable(),
})
    .describe('Device retrieval response schema');
export const PatchDeviceRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Device patch request schema');
export const PatchDeviceResponseSchema = DeviceSchema
    .describe('Device patch response schema');
export const GetDeviceStateRequestSchema = z.object({})
    .describe('Device state retrieval request schema');
export const GetDeviceStateResponseSchema = DeviceStateSchema
    .describe('Device state retrieval response schema');
export const UpdateDeviceStateRequestSchema = DeviceStateBaseSchema
    .describe('Device state request schema');
export const UpdateDeviceStateResponseSchema = DeviceStateSchema
    .describe('Device state response schema');
export const PatchDeviceStateRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Device state patch request schema');
export const PatchDeviceStateResponseSchema = DeviceStateSchema
    .describe('Device state patch response schema');
export const GetDeviceStatusRequestSchema = z.object({})
    .describe('Device status retrieval request schema');
export const GetDeviceStatusResponseSchema = DeviceStatusSchema
    .describe('Device status retrieval response schema');
export const UpdateDeviceStatusRequestSchema = DeviceStatusBaseSchema
    .describe('Device status request schema');
export const UpdateDeviceStatusResponseSchema = DeviceStatusSchema
    .describe('Device status response schema');
export const PatchDeviceStatusRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Device status patch request schema');
export const PatchDeviceStatusResponseSchema = DeviceStatusSchema
    .describe('Device status patch response schema');
export const CreateDeviceRequestSchema = DeviceBaseSchema.omit({ user_tags: true, system_tags: true })
    .describe('Create device request schema');
export const CreateDeviceResponseSchema = DeviceRegistrationSchema
    .describe('Create device response schema');
export const CreateDeviceAgentRequestSchema = AgentBaseSchema
    .describe('Create device agent request schema');
export const CreateDeviceAgentResponseSchema = AgentRegistrationSchema
    .describe('Create device agent response schema');
// #endregion
// #region Agents
export const ListAgentsRequestSchema = z.object({})
    .describe('Agent enumeration request schema');
export const ListAgentsResponseSchema = z.object({
    agents: z.array(AgentSchema),
    next_token: z.string().nullable(),
})
    .describe('Agent enumeration response schema');
export const GetAgentSuggestionsRequestSchema = z.object({})
    .describe('Get agent suggestions request schema');
export const GetAgentSuggestionsResponseSchema = z.object({
    c: z.string()
        .describe('Agent name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Agent name suggestions for given input'),
})
    .describe('Get agent suggestions response schema');
export const GetAgentAvailabilityRequestSchema = z.object({})
    .describe('Get agent availability request schema');
export const GetAgentAvailabilityResponseSchema = z.object({
    is_available: z.boolean()
        .describe('Indicates if the agent name is available'),
})
    .describe('Get agent availability response schema');
export const UpdateAgentRequestSchema = AgentBaseSchema
    .describe('Agent update request schema');
export const UpdateAgentResponseSchema = AgentSchema
    .describe('Agent update response schema');
export const PatchAgentRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Agent patch request schema');
export const PatchAgentResponseSchema = AgentSchema
    .describe('Agent patch response schema');
export const GetAgentRequestSchema = z.object({})
    .describe('Agent retrieval request schema');
export const GetAgentResponseSchema = AgentSchema
    .describe('Agent retrieval response schema');
export const UpdateAgentStateRequestSchema = AgentStateBaseSchema
    .describe('Agent state request schema');
export const UpdateAgentStateResponseSchema = AgentStateSchema
    .describe('Agent state response schema');
export const PatchAgentStateRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Agent state patch request schema');
export const PatchAgentStateResponseSchema = AgentStateSchema
    .describe('Agent state patch response schema');
export const GetAgentStateRequestSchema = z.object({})
    .describe('Agent state retrieval request schema');
export const GetAgentStateResponseSchema = AgentStateSchema
    .describe('Agent state retrieval response schema');
export const GetAgentStatusRequestSchema = z.object({})
    .describe('Agent status retrieval request schema');
export const GetAgentStatusResponseSchema = AgentStatusSchema
    .describe('Agent status retrieval response schema');
export const UpdateAgentStatusRequestSchema = AgentStatusBaseSchema
    .describe('Agent status request schema');
export const UpdateAgentStatusResponseSchema = AgentStatusSchema
    .describe('Agent status response schema');
export const PatchAgentStatusRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Agent status patch request schema');
export const PatchAgentStatusResponseSchema = AgentStatusSchema
    .describe('Agent status patch response schema');
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
// #endregion
//# sourceMappingURL=api.schema.js.map