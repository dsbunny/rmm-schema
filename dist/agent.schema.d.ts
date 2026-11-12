import * as z from "zod";
export declare const AgentRegistrationSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AgentRegistration">;
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type AgentRegistration = z.infer<typeof AgentRegistrationSchema>;
export declare const AgentBaseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AgentBase">;
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AgentBase = z.infer<typeof AgentBaseSchema>;
export declare const AgentMetadataSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AgentMetadata">;
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    is_in_desired_state: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AgentMetadata = z.infer<typeof AgentMetadataSchema>;
export declare const AgentStateMetadataSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AgentStateMetadata">;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AgentStateMetadata = z.infer<typeof AgentStateMetadataSchema>;
export declare const AgentStatusMetadataSchema: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    '@type': z.ZodLiteral<"AgentStatusMetadata">;
}, z.core.$strip>;
export type AgentStatusMetadata = z.infer<typeof AgentStatusMetadataSchema>;
export declare const AgentStateBaseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AgentStateBase">;
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
}, z.core.$strip>;
export type AgentStateBase = z.infer<typeof AgentStateBaseSchema>;
export declare const AgentStateSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    '@type': z.ZodLiteral<"AgentState">;
}, z.core.$strip>;
export type AgentState = z.infer<typeof AgentStateSchema>;
export declare const AgentStatusBaseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AgentStatusBase">;
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AgentStatusBase = z.infer<typeof AgentStatusBaseSchema>;
export declare const AgentStatusSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    '@type': z.ZodLiteral<"AgentStatus">;
}, z.core.$strip>;
export type AgentStatus = z.infer<typeof AgentStatusSchema>;
export declare const AgentSchema: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    is_in_desired_state: z.ZodDefault<z.ZodBoolean>;
    '@type': z.ZodLiteral<"Agent">;
    desired_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodJSONSchema;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        '@type': z.ZodLiteral<"AgentDesiredState">;
    }, z.core.$strip>>;
    runtime_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodJSONSchema;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        '@type': z.ZodLiteral<"AgentRuntimeState">;
    }, z.core.$strip>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        detail: z.ZodJSONSchema;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        '@type': z.ZodLiteral<"AgentRuntimeStatus">;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Agent = z.infer<typeof AgentSchema>;
