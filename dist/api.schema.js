// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from '@dsbunny/patch-schema';
import { DeviceSchema, DeviceBaseSchema, DeviceRegistrationSchema, DeviceStateSchema, DeviceStateBaseSchema, DeviceStatusSchema, DeviceStatusBaseSchema, } from './device.schema.js';
import { AgentSchema, AgentBaseSchema, AgentRegistrationSchema, AgentStateSchema, AgentStateBaseSchema, AgentStatusSchema, AgentStatusBaseSchema, } from './agent.schema.js';
// #region Devices
export const ListDevicesRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'ListDevicesRequestSchema',
    description: 'The request schema for listing devices',
});
export const ListDevicesResponseSchema = z.object({
    devices: z.array(DeviceSchema),
    agents: z.array(AgentSchema).optional(),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListDevicesResponseSchema',
    description: 'The response schema for listing devices',
});
export const GetDeviceSuggestionsRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetDeviceSuggestionsRequestSchema',
    description: 'The request schema for getting device suggestions',
});
export const GetDeviceSuggestionsResponseSchema = z.object({
    c: z.string()
        .describe('Device name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Device name suggestions for given input'),
}).register(dsbunnyRegistry, {
    id: 'GetDeviceSuggestionsResponseSchema',
    description: 'The response schema for getting device suggestions',
});
export const GetDeviceAvailabilityRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetDeviceAvailabilityRequestSchema',
    description: 'Get device availability request schema',
});
export const GetDeviceAvailabilityResponseSchema = z.object({
    is_available: z.boolean()
        .describe('Indicates if the device name is available'),
}).register(dsbunnyRegistry, {
    id: 'GetDeviceAvailabilityResponseSchema',
    description: 'Get device availability response schema',
});
export const GetDeviceRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetDeviceRequestSchema',
    description: 'Device retrieval request schema',
});
export const GetDeviceResponseSchema = z.object({
    device: DeviceSchema,
    agents: z.array(AgentSchema).optional(),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'GetDeviceResponseSchema',
    description: 'Device retrieval response schema',
});
export const PatchDeviceRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
    id: 'PatchDeviceRequestSchema',
    description: 'Device patch request schema',
});
export const PatchDeviceResponseSchema = DeviceSchema.register(dsbunnyRegistry, {
    id: 'PatchDeviceResponseSchema',
    description: 'Device patch response schema',
});
export const GetDeviceStateRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetDeviceStateRequestSchema',
    description: 'Device state retrieval request schema',
});
export const GetDeviceStateResponseSchema = DeviceStateSchema.register(dsbunnyRegistry, {
    id: 'GetDeviceStateResponseSchema',
    description: 'Device state retrieval response schema',
});
export const UpdateDeviceStateRequestSchema = DeviceStateBaseSchema.register(dsbunnyRegistry, {
    id: 'UpdateDeviceStateRequestSchema',
    description: 'Device state request schema',
});
export const UpdateDeviceStateResponseSchema = DeviceStateSchema.register(dsbunnyRegistry, {
    id: 'UpdateDeviceStateResponseSchema',
    description: 'Device state response schema',
});
export const PatchDeviceStateRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
    id: 'PatchDeviceStateRequestSchema',
    description: 'Device state patch request schema',
});
export const PatchDeviceStateResponseSchema = DeviceStateSchema.register(dsbunnyRegistry, {
    id: 'PatchDeviceStateResponseSchema',
    description: 'Device state patch response schema',
});
export const GetDeviceStatusRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetDeviceStatusRequestSchema',
    description: 'Device status retrieval request schema',
});
export const GetDeviceStatusResponseSchema = DeviceStatusSchema.register(dsbunnyRegistry, {
    id: 'GetDeviceStatusResponseSchema',
    description: 'Device status retrieval response schema',
});
export const UpdateDeviceStatusRequestSchema = DeviceStatusBaseSchema.register(dsbunnyRegistry, {
    id: 'UpdateDeviceStatusRequestSchema',
    description: 'Device status request schema',
});
export const UpdateDeviceStatusResponseSchema = DeviceStatusSchema.register(dsbunnyRegistry, {
    id: 'UpdateDeviceStatusResponseSchema',
    description: 'Device status response schema',
});
export const PatchDeviceStatusRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
    id: 'PatchDeviceStatusRequestSchema',
    description: 'Device status patch request schema',
});
export const PatchDeviceStatusResponseSchema = DeviceStatusSchema.register(dsbunnyRegistry, {
    id: 'PatchDeviceStatusResponseSchema',
    description: 'Device status patch response schema',
});
export const CreateDeviceRequestSchema = DeviceBaseSchema.omit({ user_tags: true, system_tags: true }).register(dsbunnyRegistry, {
    id: 'CreateDeviceRequestSchema',
    description: 'Create device request schema',
});
export const CreateDeviceResponseSchema = DeviceRegistrationSchema.register(dsbunnyRegistry, {
    id: 'CreateDeviceResponseSchema',
    description: 'Create device response schema',
});
export const CreateDeviceAgentRequestSchema = AgentBaseSchema.register(dsbunnyRegistry, {
    id: 'CreateDeviceAgentRequestSchema',
    description: 'Create device agent request schema',
});
export const CreateDeviceAgentResponseSchema = AgentRegistrationSchema.register(dsbunnyRegistry, {
    id: 'CreateDeviceAgentResponseSchema',
    description: 'Create device agent response schema',
});
// #endregion
// #region Agents
export const ListAgentsRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'ListAgentsRequestSchema',
    description: 'Agent enumeration request schema',
});
export const ListAgentsResponseSchema = z.object({
    agents: z.array(AgentSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListAgentsResponseSchema',
    description: 'Agent enumeration response schema',
});
export const GetAgentSuggestionsRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetAgentSuggestionsRequestSchema',
    description: 'Get agent suggestions request schema',
});
export const GetAgentSuggestionsResponseSchema = z.object({
    c: z.string()
        .describe('Agent name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Agent name suggestions for given input'),
}).register(dsbunnyRegistry, {
    id: 'GetAgentSuggestionsResponseSchema',
    description: 'Get agent suggestions response schema',
});
export const GetAgentAvailabilityRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetAgentAvailabilityRequestSchema',
    description: 'Get agent availability request schema',
});
export const GetAgentAvailabilityResponseSchema = z.object({
    is_available: z.boolean()
        .describe('Indicates if the agent name is available'),
}).register(dsbunnyRegistry, {
    id: 'GetAgentAvailabilityResponseSchema',
    description: 'Get agent availability response schema',
});
export const UpdateAgentRequestSchema = AgentBaseSchema.register(dsbunnyRegistry, {
    id: 'UpdateAgentRequestSchema',
    description: 'Agent update request schema',
});
export const UpdateAgentResponseSchema = AgentSchema.register(dsbunnyRegistry, {
    id: 'UpdateAgentResponseSchema',
    description: 'Agent update response schema',
});
export const PatchAgentRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
    id: 'PatchAgentRequestSchema',
    description: 'Agent patch request schema',
});
export const PatchAgentResponseSchema = AgentSchema.register(dsbunnyRegistry, {
    id: 'PatchAgentResponseSchema',
    description: 'Agent patch response schema',
});
export const GetAgentRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetAgentRequestSchema',
    description: 'Agent retrieval request schema',
});
export const GetAgentResponseSchema = AgentSchema.register(dsbunnyRegistry, {
    id: 'GetAgentResponseSchema',
    description: 'Agent retrieval response schema',
});
export const UpdateAgentStateRequestSchema = AgentStateBaseSchema.register(dsbunnyRegistry, {
    id: 'UpdateAgentStateRequestSchema',
    description: 'Agent state request schema',
});
export const UpdateAgentStateResponseSchema = AgentStateSchema.register(dsbunnyRegistry, {
    id: 'UpdateAgentStateResponseSchema',
    description: 'Agent state response schema',
});
export const PatchAgentStateRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
    id: 'PatchAgentStateRequestSchema',
    description: 'Agent state patch request schema',
});
export const PatchAgentStateResponseSchema = AgentStateSchema.register(dsbunnyRegistry, {
    id: 'PatchAgentStateResponseSchema',
    description: 'Agent state patch response schema',
});
export const GetAgentStateRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetAgentStateRequestSchema',
    description: 'Agent state retrieval request schema',
});
export const GetAgentStateResponseSchema = AgentStateSchema.register(dsbunnyRegistry, {
    id: 'GetAgentStateResponseSchema',
    description: 'Agent state retrieval response schema',
});
export const GetAgentStatusRequestSchema = z.object({}).register(dsbunnyRegistry, {
    id: 'GetAgentStatusRequestSchema',
    description: 'Agent status retrieval request schema',
});
export const GetAgentStatusResponseSchema = AgentStatusSchema.register(dsbunnyRegistry, {
    id: 'GetAgentStatusResponseSchema',
    description: 'Agent status retrieval response schema',
});
export const UpdateAgentStatusRequestSchema = AgentStatusBaseSchema.register(dsbunnyRegistry, {
    id: 'UpdateAgentStatusRequestSchema',
    description: 'Agent status request schema',
});
export const UpdateAgentStatusResponseSchema = AgentStatusSchema.register(dsbunnyRegistry, {
    id: 'UpdateAgentStatusResponseSchema',
    description: 'Agent status response schema',
});
export const PatchAgentStatusRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
    id: 'PatchAgentStatusRequestSchema',
    description: 'Agent status patch request schema',
});
export const PatchAgentStatusResponseSchema = AgentStatusSchema.register(dsbunnyRegistry, {
    id: 'PatchAgentStatusResponseSchema',
    description: 'Agent status patch response schema',
});
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
]).register(dsbunnyRegistry, {
    id: 'RmmRequestSchema',
    description: 'RMM request schema',
});
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
]).register(dsbunnyRegistry, {
    id: 'RmmResponseSchema',
    description: 'RMM response schema',
});
// #endregion
//# sourceMappingURL=api.schema.js.map