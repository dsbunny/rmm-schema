import { z } from 'zod';
export declare const AgentRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
}, {}>;
export type AgentRegistration = z.infer<typeof AgentRegistration>;
export declare const AgentBase: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, {}>;
export type AgentBase = z.infer<typeof AgentBase>;
export declare const AgentMetadata: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}>;
export type AgentMetadata = z.infer<typeof AgentMetadata>;
export declare const AgentStateMetadata: z.ZodObject<{
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}>;
export type AgentStateMetadata = z.infer<typeof AgentStateMetadata>;
export declare const AgentStatusMetadata: z.ZodObject<{
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}>;
export type AgentStatusMetadata = z.infer<typeof AgentStatusMetadata>;
export declare const AgentStateBase: z.ZodObject<{
    url: z.ZodNullable<z.ZodURL>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodAny>;
}, {}>;
export type AgentStateBase = z.infer<typeof AgentStateBase>;
export declare const AgentState: z.ZodObject<{
    url: z.ZodNullable<z.ZodURL>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodAny>;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}>;
export type AgentState = z.infer<typeof AgentState>;
export declare const AgentStatusBase: z.ZodObject<{
    url: z.ZodNullable<z.ZodURL>;
    detail: z.ZodNullable<z.ZodAny>;
}, {}>;
export type AgentStatusBase = z.infer<typeof AgentStatusBase>;
export declare const AgentStatus: z.ZodObject<{
    url: z.ZodNullable<z.ZodURL>;
    detail: z.ZodNullable<z.ZodAny>;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}>;
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
        url: z.ZodNullable<z.ZodURL>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}>>;
    runtime_state: z.ZodNullable<z.ZodObject<{
        url: z.ZodNullable<z.ZodURL>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        url: z.ZodNullable<z.ZodURL>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}>>;
}, {}>;
export type Agent = z.infer<typeof Agent>;
export declare const DbDtoToAgentState: z.ZodPipe<z.ZodObject<{
    url: z.ZodNullable<z.ZodURL>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}>, z.ZodTransform<{
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: any;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    url: string | null;
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
    url: z.ZodNullable<z.ZodURL>;
    detail: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}>, z.ZodTransform<{
    url: string | null;
    detail: any;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    url: string | null;
    detail: string | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
}>>;
export declare const DbDtoFromAgentBase: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, {}>, z.ZodTransform<{
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
        url: z.ZodNullable<z.ZodURL>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}>>;
    runtime_state: z.ZodNullable<z.ZodObject<{
        url: z.ZodNullable<z.ZodURL>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        url: z.ZodNullable<z.ZodURL>;
        detail: z.ZodNullable<z.ZodAny>;
        create_timestamp: z.iso.ZodISODateTime;
        modify_timestamp: z.iso.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, {}>>;
}, {}>, z.ZodTransform<{
    tags: string;
    name: string;
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        url: string | null;
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
        url: string | null;
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
        url: string | null;
        detail: any;
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
        url: string | null;
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
        url: string | null;
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
        url: string | null;
        detail: any;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}>>;
export declare const DbDtoToAgentBase: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodString;
}, {}>, z.ZodTransform<{
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
    desired_state_url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    desired_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desired_state_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    desired_state_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    desired_state_is_deleted: z.ZodDefault<z.ZodNumber>;
    runtime_state_url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    runtime_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_state_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_state_is_deleted: z.ZodDefault<z.ZodNumber>;
    runtime_status_url: z.ZodOptional<z.ZodNullable<z.ZodURL>>;
    runtime_status_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_status_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_status_is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}>, z.ZodTransform<{
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        url: string | null;
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
        url: string | null;
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
        url: string | null;
        detail: any;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}, {
    desired_state_url?: string | null | undefined;
    desired_state_pull_interval?: number | null | undefined;
    desired_state_push_interval?: number | null | undefined;
    desired_state_min_backoff_interval?: number | null | undefined;
    desired_state_max_backoff_interval?: number | null | undefined;
    desired_state_detail?: string | null | undefined;
    desired_state_create_timestamp?: string | undefined;
    desired_state_modify_timestamp?: string | undefined;
    runtime_state_url?: string | null | undefined;
    runtime_state_pull_interval?: number | null | undefined;
    runtime_state_push_interval?: number | null | undefined;
    runtime_state_min_backoff_interval?: number | null | undefined;
    runtime_state_max_backoff_interval?: number | null | undefined;
    runtime_state_detail?: string | null | undefined;
    runtime_state_create_timestamp?: string | undefined;
    runtime_state_modify_timestamp?: string | undefined;
    runtime_status_url?: string | null | undefined;
    runtime_status_detail?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
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
}>>;
