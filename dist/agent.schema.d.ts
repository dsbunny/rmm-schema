import { z } from 'zod/v4';
export declare const AgentRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type AgentRegistration = z.infer<typeof AgentRegistration>;
export declare const AgentBase: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type AgentBase = z.infer<typeof AgentBase>;
export declare const AgentMetadata: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    is_in_desired_state: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AgentMetadata = z.infer<typeof AgentMetadata>;
export declare const AgentStateMetadata: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AgentStateMetadata = z.infer<typeof AgentStateMetadata>;
export declare const AgentStatusMetadata: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AgentStatusMetadata = z.infer<typeof AgentStatusMetadata>;
export declare const AgentStateBase: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
}, z.core.$strip>;
export type AgentStateBase = z.infer<typeof AgentStateBase>;
export declare const AgentState: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AgentState = z.infer<typeof AgentState>;
export declare const AgentStatusBase: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AgentStatusBase = z.infer<typeof AgentStatusBase>;
export declare const AgentStatus: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type AgentStatus = z.infer<typeof AgentStatus>;
export declare const Agent: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    is_in_desired_state: z.ZodDefault<z.ZodBoolean>;
    desired_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Agent = z.infer<typeof Agent>;
export declare const DbDtoToAgentState: z.ZodPipe<z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<z.core.util.JSONType, string | null>>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
}, z.core.$strip>, z.ZodTransform<{
    uri: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: z.core.util.JSONType;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    uri: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: z.core.util.JSONType;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}>>;
export declare const DbDtoToAgentStatus: z.ZodPipe<z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodString>;
    has_error: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
}, z.core.$strip>, z.ZodTransform<{
    uri: string | null;
    detail: z.core.util.JSONType;
    has_error: boolean;
    error_stack: string | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    uri: string | null;
    detail: string | null;
    has_error: boolean;
    error_stack: string | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}>>;
export declare const DbDtoFromAgentBase: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodTransform<{
    tags: string;
    name: string;
}, {
    name: string;
    tags: string[];
}>>;
export declare const DbDtoFromAgent: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    is_in_desired_state: z.ZodDefault<z.ZodBoolean>;
    desired_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        detail: z.ZodCodec<z.ZodString, z.ZodJSONSchema>;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodTransform<{
    tags: string;
    name: string;
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    is_in_desired_state: boolean;
    desired_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: z.core.util.JSONType;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: z.core.util.JSONType;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        detail: z.core.util.JSONType;
        has_error: boolean;
        error_stack: string | null;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}, {
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    is_in_desired_state: boolean;
    desired_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: z.core.util.JSONType;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: z.core.util.JSONType;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        detail: z.core.util.JSONType;
        has_error: boolean;
        error_stack: string | null;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}>>;
export declare const DbDtoToAgentBase: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
}, z.core.$strip>, z.ZodTransform<{
    name: string;
    tags: string[];
}, {
    name: string;
    tags: string[];
}>>;
export declare const DbDtoToAgent: z.ZodPipe<z.ZodObject<{
    tenant_id: z.ZodUUID;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    name: z.ZodString;
    tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
    is_in_desired_state: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
    desired_state_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desired_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_detail: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<z.core.util.JSONType, string | null>>>;
    desired_state_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    desired_state_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    desired_state_is_deleted: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
    runtime_state_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_detail: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<z.core.util.JSONType, string | null>>>;
    runtime_state_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_state_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_state_is_deleted: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
    runtime_status_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_detail: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<z.core.util.JSONType, string | null>>>;
    runtime_status_has_error: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
    runtime_status_error_stack: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_status_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_status_is_deleted: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
}, z.core.$strip>, z.ZodTransform<{
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    is_in_desired_state: boolean;
    desired_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: z.core.util.JSONType;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: z.core.util.JSONType;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        detail: z.core.util.JSONType;
        has_error: boolean;
        error_stack: string | null;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    name: string;
    tags: string[];
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    is_in_desired_state: boolean;
    desired_state_uri?: string | null | undefined;
    desired_state_pull_interval?: number | null | undefined;
    desired_state_push_interval?: number | null | undefined;
    desired_state_min_backoff_interval?: number | null | undefined;
    desired_state_max_backoff_interval?: number | null | undefined;
    desired_state_detail?: z.core.util.JSONType | undefined;
    desired_state_create_timestamp?: string | undefined;
    desired_state_modify_timestamp?: string | undefined;
    desired_state_is_deleted?: boolean | undefined;
    runtime_state_uri?: string | null | undefined;
    runtime_state_pull_interval?: number | null | undefined;
    runtime_state_push_interval?: number | null | undefined;
    runtime_state_min_backoff_interval?: number | null | undefined;
    runtime_state_max_backoff_interval?: number | null | undefined;
    runtime_state_detail?: z.core.util.JSONType | undefined;
    runtime_state_create_timestamp?: string | undefined;
    runtime_state_modify_timestamp?: string | undefined;
    runtime_state_is_deleted?: boolean | undefined;
    runtime_status_uri?: string | null | undefined;
    runtime_status_detail?: z.core.util.JSONType | undefined;
    runtime_status_has_error?: boolean | undefined;
    runtime_status_error_stack?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
    runtime_status_is_deleted?: boolean | undefined;
}>>;
