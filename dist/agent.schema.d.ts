import { z } from 'zod/v4';
export declare const AgentRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type AgentRegistration = z.infer<typeof AgentRegistration>;
export declare const AgentBase: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, {}, {}>;
export type AgentBase = z.infer<typeof AgentBase>;
export declare const AgentMetadata: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type AgentMetadata = z.infer<typeof AgentMetadata>;
export declare const AgentStateMetadata: z.ZodObject<{
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type AgentStateMetadata = z.infer<typeof AgentStateMetadata>;
export declare const AgentStatusMetadata: z.ZodObject<{
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type AgentStatusMetadata = z.infer<typeof AgentStatusMetadata>;
export declare const AgentStateBase: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodAny>;
}, {}, {}>;
export type AgentStateBase = z.infer<typeof AgentStateBase>;
export declare const AgentState: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodAny>;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type AgentState = z.infer<typeof AgentState>;
export declare const AgentStatusBase: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodAny>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, {}, {}>;
export type AgentStatusBase = z.infer<typeof AgentStatusBase>;
export declare const AgentStatus: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodAny>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type AgentStatus = z.infer<typeof AgentStatus>;
export declare const Agent: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    desired_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}, {}>>;
    runtime_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}, {}>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        detail: z.ZodNullable<z.ZodAny>;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}, {}>>;
}, {}, {}>;
export type Agent = z.infer<typeof Agent>;
export declare const DbDtoToAgentState: z.ZodPipe<z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}, {}>, z.ZodTransform<{
    uri: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: any;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    uri: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: string | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
}>>;
export declare const DbDtoToAgentStatus: z.ZodPipe<z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodString>;
    has_error: z.ZodDefault<z.ZodNumber>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}, {}>, z.ZodTransform<{
    uri: string | null;
    detail: any;
    has_error: boolean;
    error_stack: string | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    uri: string | null;
    detail: string | null;
    has_error: number;
    error_stack: string | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
}>>;
export declare const DbDtoFromAgentBase: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, {}, {}>, z.ZodTransform<{
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
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    desired_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}, {}>>;
    runtime_state: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}, {}>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        detail: z.ZodNullable<z.ZodAny>;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}, {}>>;
}, {}, {}>, z.ZodTransform<{
    tags: string;
    name: string;
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: any;
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
        detail: any;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        detail: any;
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
    desired_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: any;
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
        detail: any;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        detail: any;
        has_error: boolean;
        error_stack: string | null;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}>>;
export declare const DbDtoToAgentBase: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodString;
}, {}, {}>, z.ZodTransform<{
    name: string;
    tags: string[];
}, {
    name: string;
    tags: string;
}>>;
export declare const DbDtoToAgent: z.ZodPipe<z.ZodObject<{
    tenant_id: z.ZodUUID;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    name: z.ZodString;
    tags: z.ZodString;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
    desired_state_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desired_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desired_state_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    desired_state_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    desired_state_is_deleted: z.ZodDefault<z.ZodNumber>;
    runtime_state_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_state_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_state_is_deleted: z.ZodDefault<z.ZodNumber>;
    runtime_status_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_has_error: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    runtime_status_error_stack: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_status_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_status_is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}, {}>, z.ZodTransform<{
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        uri: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: any;
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
        detail: any;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        detail: any;
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
    tags: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    desired_state_is_deleted: number;
    runtime_state_is_deleted: number;
    runtime_status_is_deleted: number;
    desired_state_uri?: string | null | undefined;
    desired_state_pull_interval?: number | null | undefined;
    desired_state_push_interval?: number | null | undefined;
    desired_state_min_backoff_interval?: number | null | undefined;
    desired_state_max_backoff_interval?: number | null | undefined;
    desired_state_detail?: string | null | undefined;
    desired_state_create_timestamp?: string | undefined;
    desired_state_modify_timestamp?: string | undefined;
    runtime_state_uri?: string | null | undefined;
    runtime_state_pull_interval?: number | null | undefined;
    runtime_state_push_interval?: number | null | undefined;
    runtime_state_min_backoff_interval?: number | null | undefined;
    runtime_state_max_backoff_interval?: number | null | undefined;
    runtime_state_detail?: string | null | undefined;
    runtime_state_create_timestamp?: string | undefined;
    runtime_state_modify_timestamp?: string | undefined;
    runtime_status_uri?: string | null | undefined;
    runtime_status_detail?: string | null | undefined;
    runtime_status_has_error?: number | undefined;
    runtime_status_error_stack?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
}>>;
