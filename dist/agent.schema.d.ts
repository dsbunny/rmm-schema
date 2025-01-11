import { z } from 'zod';
export declare const AgentBase: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    tags: string[];
}, {
    name: string;
    tags: string[];
}>;
export type AgentBase = z.infer<typeof AgentBase>;
export declare const AgentRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    create_timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
}>;
export type AgentRegistration = z.infer<typeof AgentRegistration>;
export declare const AgentMetadata: z.ZodObject<z.objectUtil.extendShape<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    create_timestamp: z.ZodString;
}, {
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type AgentMetadata = z.infer<typeof AgentMetadata>;
export declare const AgentStateBase: z.ZodObject<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: Record<string, any> | null;
}, {
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: Record<string, any> | null;
}>;
export type AgentStateBase = z.infer<typeof AgentStateBase>;
export declare const AgentState: z.ZodObject<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.objectUtil.extendShape<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    create_timestamp: z.ZodString;
}, {
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>>, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: Record<string, any> | null;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: Record<string, any> | null;
    is_deleted?: boolean | undefined;
}>;
export type AgentState = z.infer<typeof AgentState>;
export declare const AgentStatusBase: z.ZodObject<{
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    detail: Record<string, any> | null;
}, {
    detail: Record<string, any> | null;
}>;
export type AgentStatusBase = z.infer<typeof AgentStatusBase>;
export declare const AgentStatus: z.ZodObject<z.objectUtil.extendShape<{
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.objectUtil.extendShape<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    create_timestamp: z.ZodString;
}, {
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>>, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    detail: Record<string, any> | null;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    detail: Record<string, any> | null;
    is_deleted?: boolean | undefined;
}>;
export type AgentStatus = z.infer<typeof AgentStatus>;
export declare const Agent: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, z.objectUtil.extendShape<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    create_timestamp: z.ZodString;
}, {
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>>, {
    desired_state: z.ZodNullable<z.ZodObject<Omit<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        device_id: z.ZodString;
        agent_id: z.ZodString;
        create_timestamp: z.ZodString;
    }, {
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>>, "tenant_id" | "device_id" | "agent_id" | "is_deleted">, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    }>>;
    runtime_state: z.ZodNullable<z.ZodObject<Omit<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        device_id: z.ZodString;
        agent_id: z.ZodString;
        create_timestamp: z.ZodString;
    }, {
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>>, "tenant_id" | "device_id" | "agent_id" | "is_deleted">, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    }>>;
    runtime_status: z.ZodNullable<z.ZodObject<Omit<z.objectUtil.extendShape<{
        detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        device_id: z.ZodString;
        agent_id: z.ZodString;
        create_timestamp: z.ZodString;
    }, {
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>>, "tenant_id" | "device_id" | "agent_id" | "is_deleted">, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    }>>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    } | null;
}, {
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    } | null;
    is_deleted?: boolean | undefined;
}>;
export type Agent = z.infer<typeof Agent>;
export declare const DbDtoToAgentState: z.ZodEffects<z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: string | null;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: string | null;
    is_deleted?: number | undefined;
}>, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: Record<string, any> | null;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    detail: string | null;
    is_deleted?: number | undefined;
}>;
export declare const DbDtoToAgentStatus: z.ZodEffects<z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    detail: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    detail: string | null;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    detail: string | null;
    is_deleted?: number | undefined;
}>, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    detail: Record<string, any> | null;
}, {
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    detail: string | null;
    is_deleted?: number | undefined;
}>;
export declare const DbDtoFromAgentBase: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    tags: string[];
}, {
    name: string;
    tags: string[];
}>, {
    tags: string;
    name: string;
}, {
    name: string;
    tags: string[];
}>;
export declare const DbDtoFromAgent: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, z.objectUtil.extendShape<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    create_timestamp: z.ZodString;
}, {
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>>, {
    desired_state: z.ZodNullable<z.ZodObject<Omit<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        device_id: z.ZodString;
        agent_id: z.ZodString;
        create_timestamp: z.ZodString;
    }, {
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>>, "tenant_id" | "device_id" | "agent_id" | "is_deleted">, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    }>>;
    runtime_state: z.ZodNullable<z.ZodObject<Omit<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        device_id: z.ZodString;
        agent_id: z.ZodString;
        create_timestamp: z.ZodString;
    }, {
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>>, "tenant_id" | "device_id" | "agent_id" | "is_deleted">, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    }>>;
    runtime_status: z.ZodNullable<z.ZodObject<Omit<z.objectUtil.extendShape<{
        detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        device_id: z.ZodString;
        agent_id: z.ZodString;
        create_timestamp: z.ZodString;
    }, {
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>>, "tenant_id" | "device_id" | "agent_id" | "is_deleted">, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    }>>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    } | null;
}, {
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    } | null;
    is_deleted?: boolean | undefined;
}>, {
    tags: string;
    name: string;
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    } | null;
}, {
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    } | null;
    is_deleted?: boolean | undefined;
}>;
export declare const DbDtoToAgentBase: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    tags: string;
}, {
    name: string;
    tags: string;
}>, {
    name: string;
    tags: string[];
}, {
    name: string;
    tags: string;
}>;
export declare const DbDtoToAgent: z.ZodEffects<z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    agent_id: z.ZodString;
    name: z.ZodString;
    tags: z.ZodString;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
    desired_state_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desired_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desired_state_create_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    desired_state_modify_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    runtime_state_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_create_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    runtime_state_modify_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    runtime_status_detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_create_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    runtime_status_modify_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    tags: string;
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
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
    runtime_status_detail?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
}, {
    name: string;
    tags: string;
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: number | undefined;
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
    runtime_status_detail?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
}>, {
    name: string;
    tags: string[];
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        detail: Record<string, any> | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        detail: Record<string, any> | null;
    } | null;
}, {
    name: string;
    tags: string;
    tenant_id: string;
    device_id: string;
    agent_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: number | undefined;
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
    runtime_status_detail?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
}>;
