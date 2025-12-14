// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { JsonPatchOperation } from './patch-operation.schema.js';
import { Device, DeviceBase, DeviceRegistration, DeviceState, DeviceStateBase, DeviceStatus, DeviceStatusBase, } from './device.schema.js';
import { Agent, AgentBase, AgentRegistration, AgentState, AgentStateBase, AgentStatus, AgentStatusBase, } from './agent.schema.js';
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
// #endregion
// #region WebHook
export const WebHookRequest = z.object({
    ref_id: z.string(),
    class: z.string(),
})
    .describe('WebHook request schema');
export const WebHookResponse = z.object({})
    .describe('WebHook response schema');
// #endregion
// #region Devices
export const ListDevicesRequest = z.object({})
    .describe('Device enumeration request schema');
export const ListDevicesResponse = z.object({
    devices: z.array(Device),
    agents: z.array(Agent).optional(),
    next_token: z.string().nullable(),
})
    .describe('Device enumeration response schema');
export const GetDeviceSuggestionsRequest = z.object({})
    .describe('Get device suggestions request schema');
export const GetDeviceSuggestionsResponse = z.object({
    c: z.string()
        .describe('Device name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Device name suggestions for given input'),
})
    .describe('Get device suggestions response schema');
export const GetDeviceAvailabilityRequest = z.object({})
    .describe('Get device availability request schema');
export const GetDeviceAvailabilityResponse = z.object({
    is_available: z.boolean()
        .describe('Indicates if the device name is available'),
})
    .describe('Get device availability response schema');
export const GetDeviceRequest = z.object({})
    .describe('Device retrieval request schema');
export const GetDeviceResponse = z.object({
    device: Device,
    agents: z.array(Agent).optional(),
    next_token: z.string().nullable(),
})
    .describe('Device retrieval response schema');
export const PatchDeviceRequest = z.array(JsonPatchOperation).max(50)
    .describe('Device patch request schema');
export const PatchDeviceResponse = Device
    .describe('Device patch response schema');
export const GetDeviceStateRequest = z.object({})
    .describe('Device state retrieval request schema');
export const GetDeviceStateResponse = DeviceState
    .describe('Device state retrieval response schema');
export const UpdateDeviceStateRequest = DeviceStateBase
    .describe('Device state request schema');
export const UpdateDeviceStateResponse = DeviceState
    .describe('Device state response schema');
export const PatchDeviceStateRequest = z.array(JsonPatchOperation).max(50)
    .describe('Device state patch request schema');
export const PatchDeviceStateResponse = DeviceState
    .describe('Device state patch response schema');
export const GetDeviceStatusRequest = z.object({})
    .describe('Device status retrieval request schema');
export const GetDeviceStatusResponse = DeviceStatus
    .describe('Device status retrieval response schema');
export const UpdateDeviceStatusRequest = DeviceStatusBase
    .describe('Device status request schema');
export const UpdateDeviceStatusResponse = DeviceStatus
    .describe('Device status response schema');
export const PatchDeviceStatusRequest = z.array(JsonPatchOperation).max(50)
    .describe('Device status patch request schema');
export const PatchDeviceStatusResponse = DeviceStatus
    .describe('Device status patch response schema');
export const CreateDeviceRequest = DeviceBase.omit({ user_tags: true, system_tags: true })
    .describe('Create device request schema');
export const CreateDeviceResponse = DeviceRegistration
    .describe('Create device response schema');
export const CreateDeviceAgentRequest = AgentBase
    .describe('Create device agent request schema');
export const CreateDeviceAgentResponse = AgentRegistration
    .describe('Create device agent response schema');
// #endregion
// #region Agents
export const ListAgentsRequest = z.object({})
    .describe('Agent enumeration request schema');
export const ListAgentsResponse = z.object({
    agents: z.array(Agent),
    next_token: z.string().nullable(),
})
    .describe('Agent enumeration response schema');
export const GetAgentSuggestionsRequest = z.object({})
    .describe('Get agent suggestions request schema');
export const GetAgentSuggestionsResponse = z.object({
    c: z.string()
        .describe('Agent name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Agent name suggestions for given input'),
})
    .describe('Get agent suggestions response schema');
export const GetAgentAvailabilityRequest = z.object({})
    .describe('Get agent availability request schema');
export const GetAgentAvailabilityResponse = z.object({
    is_available: z.boolean()
        .describe('Indicates if the agent name is available'),
})
    .describe('Get agent availability response schema');
export const UpdateAgentRequest = AgentBase
    .describe('Agent update request schema');
export const UpdateAgentResponse = Agent
    .describe('Agent update response schema');
export const PatchAgentRequest = z.array(JsonPatchOperation).max(50)
    .describe('Agent patch request schema');
export const PatchAgentResponse = Agent
    .describe('Agent patch response schema');
export const GetAgentRequest = z.object({})
    .describe('Agent retrieval request schema');
export const GetAgentResponse = Agent
    .describe('Agent retrieval response schema');
export const UpdateAgentStateRequest = AgentStateBase
    .describe('Agent state request schema');
export const UpdateAgentStateResponse = AgentState
    .describe('Agent state response schema');
export const PatchAgentStateRequest = z.array(JsonPatchOperation).max(50)
    .describe('Agent state patch request schema');
export const PatchAgentStateResponse = AgentState
    .describe('Agent state patch response schema');
export const GetAgentStateRequest = z.object({})
    .describe('Agent state retrieval request schema');
export const GetAgentStateResponse = AgentState
    .describe('Agent state retrieval response schema');
export const GetAgentStatusRequest = z.object({})
    .describe('Agent status retrieval request schema');
export const GetAgentStatusResponse = AgentStatus
    .describe('Agent status retrieval response schema');
export const UpdateAgentStatusRequest = AgentStatusBase
    .describe('Agent status request schema');
export const UpdateAgentStatusResponse = AgentStatus
    .describe('Agent status response schema');
export const PatchAgentStatusRequest = z.array(JsonPatchOperation).max(50)
    .describe('Agent status patch request schema');
export const PatchAgentStatusResponse = AgentStatus
    .describe('Agent status patch response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map