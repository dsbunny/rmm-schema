# Changelog
## v6.2.7
- Add `start_timestamp` to track device uptime.
- Add `is_maintenance` to track a manual initiated _maintenance mode_.

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
