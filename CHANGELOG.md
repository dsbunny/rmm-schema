# Changelog
## v6.7.13
- Add API for name availability.

## v6.6.12
- Bump to `zod@4.1.11`.
- Set limit on number of tags (64).
- Set limit on number of agents per device (64).
- Add new _device_ and _agent_ generated field `is_in_desired_state`.
- Migrate to Zod 4.1 codecs to improve definition of SQLite booleans, dates, and JSON values.
- Add support for agent auto-complete and auto-suggest.
- Move Zod to `peerDependencies` so users can bring their own Zod.

## v6.5.11
- Omit `user_tags` and `system_tags` from `CreateDeviceRequest` to enable simplified `tags`.

## v6.4.10
- Add explicit `user_tags` and `system_tags` fields.

## v6.3.9
- Add `GetDeviceSuggestionsRequest`/`GetDeviceSuggestionsResponse` for auto-complete and auto-suggest support.

## v6.2.8
- Expose `JsonPatchOperation` schema.
- Correct fall through on `ZodError` discovery.

## v6.2.7
- Add `is_maintenance` to track a manual initiated _maintenance mode_.
- Add missing `GetAgentRequest` and `GetAgentResponse` API schema.
- Add `has_error` and `error_stack` to `agent.runtime_status` for UI feedback.

## v6.1.6
- Add API endpoint schema.

## v6.0.5
- Promote `url` field to `uri` to enable use of URNs.

## v5.0.4
- Bump to `zod@next` with `zod/v4` imports.

## v5.0.3
- Bump to `zod@4.0.0-beta`.

## v4.0.2
- Introduce new `AgentStateMetadata`, `AgentStatusMetadata`, `DeviceStateMetadata`, and `DeviceStatusMetadata`.
- Replace `type` in `detail` with `url` in _state_ or _status_ objects.

## v3.2.1
- Add `DeviceRegistration` as response to _device registration_ endpoint.
- Add `AgentRegistration` as response to _create agent_ endpoint.

## v3.1.0
- Initial release, derived from `rmm` service hence the starting version number.
