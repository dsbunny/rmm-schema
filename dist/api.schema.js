// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from '@dsbunny/patch-schema';
import { DeviceSchema, DeviceBaseSchema, DeviceRegistrationSchema, DeviceStateSchema, DeviceStateBaseSchema, DeviceStatusSchema, DeviceStatusBaseSchema, } from './device.schema.js';
import { AgentSchema, AgentBaseSchema, AgentRegistrationSchema, AgentStateSchema, AgentStateBaseSchema, AgentStatusSchema, AgentStatusBaseSchema, } from './agent.schema.js';
// #region Devices
export const ListDevicesRequestSchema = z.object({
    '@type': z.literal('ListDevicesRequest')
        .describe('Type of the list devices request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListDevicesRequestSchema',
    description: 'The request schema for listing devices',
});
export const ListDevicesResponseSchema = z.object({
    '@type': z.literal('ListDevicesResponse')
        .describe('Type of the list devices response object'),
    devices: z.array(DeviceSchema),
    agents: z.array(AgentSchema).optional(),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListDevicesResponseSchema',
    description: 'The response schema for listing devices',
});
export const GetDeviceSuggestionsRequestSchema = z.object({
    '@type': z.literal('GetDeviceSuggestionsRequest')
        .describe('Type of the get device suggestions request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetDeviceSuggestionsRequestSchema',
    description: 'The request schema for getting device suggestions',
});
export const GetDeviceSuggestionsResponseSchema = z.object({
    '@type': z.literal('GetDeviceSuggestionsResponse').optional()
        .describe('Type of the get device suggestions response object'),
    c: z.string()
        .describe('Device name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Device name suggestions for given input'),
}).register(dsbunnyRegistry, {
    id: 'GetDeviceSuggestionsResponseSchema',
    description: 'The response schema for getting device suggestions',
});
export const GetDeviceAvailabilityRequestSchema = z.object({
    '@type': z.literal('GetDeviceAvailabilityRequest')
        .describe('Type of the get device availability request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetDeviceAvailabilityRequestSchema',
    description: 'Get device availability request schema',
});
export const GetDeviceAvailabilityResponseSchema = z.object({
    '@type': z.literal('GetDeviceAvailabilityResponse')
        .describe('Type of the get device availability response object'),
    is_available: z.boolean()
        .describe('Indicates if the device name is available'),
}).register(dsbunnyRegistry, {
    id: 'GetDeviceAvailabilityResponseSchema',
    description: 'Get device availability response schema',
});
export const GetDeviceRequestSchema = z.object({
    '@type': z.literal('GetDeviceRequest')
        .describe('Type of the get device request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetDeviceRequestSchema',
    description: 'Device retrieval request schema',
});
export const GetDeviceResponseSchema = z.object({
    '@type': z.literal('GetDeviceResponse')
        .describe('Type of the get device response object'),
    device: DeviceSchema,
    agents: z.array(AgentSchema).optional(),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'GetDeviceResponseSchema',
    description: 'Device retrieval response schema',
});
export const PatchDeviceRequestSchema = z.object({
    '@type': z.literal('PatchDeviceRequest')
        .describe('Type of the patch device request object'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50)
        .describe('The list of JSON patch operations to apply to the device'),
}).register(dsbunnyRegistry, {
    id: 'PatchDeviceRequestSchema',
    description: 'Device patch request schema',
});
export const PatchDeviceResponseSchema = z.object({
    '@type': z.literal('PatchDeviceResponse')
        .describe('Type of the patch device response object'),
    device: DeviceSchema,
}).register(dsbunnyRegistry, {
    id: 'PatchDeviceResponseSchema',
    description: 'Device patch response schema',
});
export const GetDeviceStateRequestSchema = z.object({
    '@type': z.literal('GetDeviceStateRequest')
        .describe('Type of the get device state request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetDeviceStateRequestSchema',
    description: 'Device state retrieval request schema',
});
export const GetDeviceStateResponseSchema = z.object({
    '@type': z.literal('GetDeviceStateResponse')
        .describe('Type of the get device state response object'),
    device_state: DeviceStateSchema,
}).register(dsbunnyRegistry, {
    id: 'GetDeviceStateResponseSchema',
    description: 'Device state retrieval response schema',
});
export const UpdateDeviceStateRequestSchema = z.object({
    '@type': z.literal('UpdateDeviceStateRequest')
        .describe('Type of the update device state request object'),
    device_state: DeviceStateBaseSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateDeviceStateRequestSchema',
    description: 'Device state request schema',
});
export const UpdateDeviceStateResponseSchema = z.object({
    '@type': z.literal('UpdateDeviceStateResponse')
        .describe('Type of the update device state response object'),
    device_state: DeviceStateSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateDeviceStateResponseSchema',
    description: 'Device state response schema',
});
export const PatchDeviceStateRequestSchema = z.object({
    '@type': z.literal('PatchDeviceStateRequest')
        .describe('Type of the patch device state request object'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
    id: 'PatchDeviceStateRequestSchema',
    description: 'Device state patch request schema',
});
export const PatchDeviceStateResponseSchema = z.object({
    '@type': z.literal('PatchDeviceStateResponse')
        .describe('Type of the patch device state response object'),
    device_state: DeviceStateSchema,
}).register(dsbunnyRegistry, {
    id: 'PatchDeviceStateResponseSchema',
    description: 'Device state patch response schema',
});
export const GetDeviceStatusRequestSchema = z.object({
    '@type': z.literal('GetDeviceStatusRequest')
        .describe('Type of the get device status request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetDeviceStatusRequestSchema',
    description: 'Device status retrieval request schema',
});
export const GetDeviceStatusResponseSchema = z.object({
    '@type': z.literal('GetDeviceStatusResponse')
        .describe('Type of the get device status response object'),
    device_status: DeviceStatusSchema,
}).register(dsbunnyRegistry, {
    id: 'GetDeviceStatusResponseSchema',
    description: 'Device status retrieval response schema',
});
export const UpdateDeviceStatusRequestSchema = z.object({
    '@type': z.literal('UpdateDeviceStatusRequest')
        .describe('Type of the update device status request object'),
    device_status: DeviceStatusBaseSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateDeviceStatusRequestSchema',
    description: 'Device status request schema',
});
export const UpdateDeviceStatusResponseSchema = z.object({
    '@type': z.literal('UpdateDeviceStatusResponse')
        .describe('Type of the update device status response object'),
    device_status: DeviceStatusSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateDeviceStatusResponseSchema',
    description: 'Device status response schema',
});
export const PatchDeviceStatusRequestSchema = z.object({
    '@type': z.literal('PatchDeviceStatusRequest')
        .describe('Type of the patch device status request object'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
    id: 'PatchDeviceStatusRequestSchema',
    description: 'Device status patch request schema',
});
export const PatchDeviceStatusResponseSchema = z.object({
    '@type': z.literal('PatchDeviceStatusResponse')
        .describe('Type of the patch device status response object'),
    device_status: DeviceStatusSchema,
}).register(dsbunnyRegistry, {
    id: 'PatchDeviceStatusResponseSchema',
    description: 'Device status patch response schema',
});
export const CreateDeviceRequestSchema = z.object({
    '@type': z.literal('CreateDeviceRequest')
        .describe('Type of the create device request object'),
    device_data: DeviceBaseSchema.omit({ user_tags: true, system_tags: true }),
}).register(dsbunnyRegistry, {
    id: 'CreateDeviceRequestSchema',
    description: 'Create device request schema',
});
export const CreateDeviceResponseSchema = z.object({
    '@type': z.literal('CreateDeviceResponse')
        .describe('Type of the create device response object'),
    device_registration: DeviceRegistrationSchema,
}).register(dsbunnyRegistry, {
    id: 'CreateDeviceResponseSchema',
    description: 'Create device response schema',
});
export const CreateDeviceAgentRequestSchema = z.object({
    '@type': z.literal('CreateDeviceAgentRequest')
        .describe('Type of the create device agent request object'),
    agent_data: AgentBaseSchema,
}).register(dsbunnyRegistry, {
    id: 'CreateDeviceAgentRequestSchema',
    description: 'Create device agent request schema',
});
export const CreateDeviceAgentResponseSchema = z.object({
    '@type': z.literal('CreateDeviceAgentResponse')
        .describe('Type of the create device agent response object'),
    agent_registration: AgentRegistrationSchema,
}).register(dsbunnyRegistry, {
    id: 'CreateDeviceAgentResponseSchema',
    description: 'Create device agent response schema',
});
// #endregion
// #region Agents
export const ListAgentsRequestSchema = z.object({
    '@type': z.literal('ListAgentsRequest')
        .describe('Type of the list agents request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListAgentsRequestSchema',
    description: 'Agent enumeration request schema',
});
export const ListAgentsResponseSchema = z.object({
    '@type': z.literal('ListAgentsResponse')
        .describe('Type of the list agents response object'),
    agents: z.array(AgentSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListAgentsResponseSchema',
    description: 'Agent enumeration response schema',
});
export const GetAgentSuggestionsRequestSchema = z.object({
    '@type': z.literal('GetAgentSuggestionsRequest')
        .describe('Type of the get agent suggestions request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAgentSuggestionsRequestSchema',
    description: 'Get agent suggestions request schema',
});
export const GetAgentSuggestionsResponseSchema = z.object({
    '@type': z.literal('GetAgentSuggestionsResponse').optional()
        .describe('Type of the get agent suggestions response object'),
    c: z.string()
        .describe('Agent name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Agent name suggestions for given input'),
}).register(dsbunnyRegistry, {
    id: 'GetAgentSuggestionsResponseSchema',
    description: 'Get agent suggestions response schema',
});
export const GetAgentAvailabilityRequestSchema = z.object({
    '@type': z.literal('GetAgentAvailabilityRequest')
        .describe('Type of the get agent availability request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAgentAvailabilityRequestSchema',
    description: 'Get agent availability request schema',
});
export const GetAgentAvailabilityResponseSchema = z.object({
    '@type': z.literal('GetAgentAvailabilityResponse').optional()
        .describe('Type of the get agent availability response object'),
    is_available: z.boolean()
        .describe('Indicates if the agent name is available'),
}).register(dsbunnyRegistry, {
    id: 'GetAgentAvailabilityResponseSchema',
    description: 'Get agent availability response schema',
});
export const UpdateAgentRequestSchema = z.object({
    '@type': z.literal('UpdateAgentRequest')
        .describe('Type of the update agent request object'),
    agent_data: AgentBaseSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateAgentRequestSchema',
    description: 'Agent update request schema',
});
export const UpdateAgentResponseSchema = z.object({
    '@type': z.literal('UpdateAgentResponse')
        .describe('Type of the update agent response object'),
    agent_data: AgentSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateAgentResponseSchema',
    description: 'Agent update response schema',
});
export const PatchAgentRequestSchema = z.object({
    '@type': z.literal('PatchAgentRequest')
        .describe('Type of the patch agent request object'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
    id: 'PatchAgentRequestSchema',
    description: 'Agent patch request schema',
});
export const PatchAgentResponseSchema = z.object({
    '@type': z.literal('PatchAgentResponse')
        .describe('Type of the patch agent response object'),
    agent_data: AgentSchema,
}).register(dsbunnyRegistry, {
    id: 'PatchAgentResponseSchema',
    description: 'Agent patch response schema',
});
export const GetAgentRequestSchema = z.object({
    '@type': z.literal('GetAgentRequest')
        .describe('Type of the get agent request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAgentRequestSchema',
    description: 'Agent retrieval request schema',
});
export const GetAgentResponseSchema = z.object({
    '@type': z.literal('GetAgentResponse')
        .describe('Type of the get agent response object'),
    agent_data: AgentSchema,
}).register(dsbunnyRegistry, {
    id: 'GetAgentResponseSchema',
    description: 'Agent retrieval response schema',
});
export const UpdateAgentStateRequestSchema = z.object({
    '@type': z.literal('UpdateAgentStateRequest')
        .describe('Type of the update agent state request object'),
    agent_state: AgentStateBaseSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateAgentStateRequestSchema',
    description: 'Agent state request schema',
});
export const UpdateAgentStateResponseSchema = z.object({
    '@type': z.literal('UpdateAgentStateResponse')
        .describe('Type of the update agent state response object'),
    agent_state: AgentStateSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateAgentStateResponseSchema',
    description: 'Agent state response schema',
});
export const PatchAgentStateRequestSchema = z.object({
    '@type': z.literal('PatchAgentStateRequest')
        .describe('Type of the patch agent state request object'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
    id: 'PatchAgentStateRequestSchema',
    description: 'Agent state patch request schema',
});
export const PatchAgentStateResponseSchema = z.object({
    '@type': z.literal('PatchAgentStateResponse')
        .describe('Type of the patch agent state response object'),
    agent_state: AgentStateSchema,
}).register(dsbunnyRegistry, {
    id: 'PatchAgentStateResponseSchema',
    description: 'Agent state patch response schema',
});
export const GetAgentStateRequestSchema = z.object({
    '@type': z.literal('GetAgentStateRequest')
        .describe('Type of the get agent state request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAgentStateRequestSchema',
    description: 'Agent state retrieval request schema',
});
export const GetAgentStateResponseSchema = z.object({
    '@type': z.literal('GetAgentStateResponse')
        .describe('Type of the get agent state response object'),
    agent_state: AgentStateSchema,
}).register(dsbunnyRegistry, {
    id: 'GetAgentStateResponseSchema',
    description: 'Agent state retrieval response schema',
});
export const GetAgentStatusRequestSchema = z.object({
    '@type': z.literal('GetAgentStatusRequest')
        .describe('Type of the get agent status request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAgentStatusRequestSchema',
    description: 'Agent status retrieval request schema',
});
export const GetAgentStatusResponseSchema = z.object({
    '@type': z.literal('GetAgentStatusResponse')
        .describe('Type of the get agent status response object'),
    agent_status: AgentStatusSchema,
}).register(dsbunnyRegistry, {
    id: 'GetAgentStatusResponseSchema',
    description: 'Agent status retrieval response schema',
});
export const UpdateAgentStatusRequestSchema = z.object({
    '@type': z.literal('UpdateAgentStatusRequest')
        .describe('Type of the update agent status request object'),
    agent_status: AgentStatusBaseSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateAgentStatusRequestSchema',
    description: 'Agent status request schema',
});
export const UpdateAgentStatusResponseSchema = z.object({
    '@type': z.literal('UpdateAgentStatusResponse')
        .describe('Type of the update agent status response object'),
    agent_status: AgentStatusSchema,
}).register(dsbunnyRegistry, {
    id: 'UpdateAgentStatusResponseSchema',
    description: 'Agent status response schema',
});
export const PatchAgentStatusRequestSchema = z.object({
    '@type': z.literal('PatchAgentStatusRequest')
        .describe('Type of the patch agent status request object'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
    id: 'PatchAgentStatusRequestSchema',
    description: 'Agent status patch request schema',
});
export const PatchAgentStatusResponseSchema = z.object({
    '@type': z.literal('PatchAgentStatusResponse')
        .describe('Type of the patch agent status response object'),
    agent_status: AgentStatusSchema,
}).register(dsbunnyRegistry, {
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