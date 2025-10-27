import { z } from 'zod/v4';
export declare const DeviceRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type DeviceRegistration = z.infer<typeof DeviceRegistration>;
export declare const DeviceBase: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type DeviceBase = z.infer<typeof DeviceBase>;
export declare const DeviceMetadata: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    is_in_desired_state: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceMetadata = z.infer<typeof DeviceMetadata>;
export declare const DeviceStateMetadata: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceStateMetadata = z.infer<typeof DeviceStateMetadata>;
export declare const DeviceStatusMetadata: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceStatusMetadata = z.infer<typeof DeviceStatusMetadata>;
export declare const DeviceStateBase: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
    is_maintenance: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceStateBase = z.infer<typeof DeviceStateBase>;
export declare const DeviceState: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
    is_maintenance: z.ZodDefault<z.ZodBoolean>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceState = z.infer<typeof DeviceState>;
export declare const DeviceStatusBase: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    user_agent: z.ZodNullable<z.ZodString>;
    device_memory: z.ZodNullable<z.ZodNumber>;
    hardware_concurrency: z.ZodNullable<z.ZodNumber>;
    vendor_webgl: z.ZodNullable<z.ZodString>;
    renderer_webgl: z.ZodNullable<z.ZodString>;
    screen_details: z.ZodNullable<z.ZodObject<{
        screens: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            left: z.ZodNumber;
            top: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            devicePixelRatio: z.ZodNumber;
            orientation: z.ZodObject<{
                angle: z.ZodNumber;
                type: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    cool: z.ZodNullable<z.ZodObject<{
        eventHistory: z.ZodObject<{
            history_size: z.ZodNumber;
            history_msgs_flushed: z.ZodNumber;
            history: z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                status: z.ZodEnum<{
                    UP: "UP";
                    DOWN: "DOWN";
                }>;
                time: z.ZodString;
                interval: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        objectOutage: z.ZodObject<{
            status: z.ZodEnum<{
                UP: "UP";
                DOWN: "DOWN";
            }>;
            time: z.ZodString;
            aot: z.ZodNumber;
            naf: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type DeviceStatusBase = z.infer<typeof DeviceStatusBase>;
export declare const DeviceStatus: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    user_agent: z.ZodNullable<z.ZodString>;
    device_memory: z.ZodNullable<z.ZodNumber>;
    hardware_concurrency: z.ZodNullable<z.ZodNumber>;
    vendor_webgl: z.ZodNullable<z.ZodString>;
    renderer_webgl: z.ZodNullable<z.ZodString>;
    screen_details: z.ZodNullable<z.ZodObject<{
        screens: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            left: z.ZodNumber;
            top: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
            devicePixelRatio: z.ZodNumber;
            orientation: z.ZodObject<{
                angle: z.ZodNumber;
                type: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    cool: z.ZodNullable<z.ZodObject<{
        eventHistory: z.ZodObject<{
            history_size: z.ZodNumber;
            history_msgs_flushed: z.ZodNumber;
            history: z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                status: z.ZodEnum<{
                    UP: "UP";
                    DOWN: "DOWN";
                }>;
                time: z.ZodString;
                interval: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        objectOutage: z.ZodObject<{
            status: z.ZodEnum<{
                UP: "UP";
                DOWN: "DOWN";
            }>;
            time: z.ZodString;
            aot: z.ZodNumber;
            naf: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceStatus = z.infer<typeof DeviceStatus>;
export declare const Device: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
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
        agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
        is_maintenance: z.ZodDefault<z.ZodBoolean>;
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
        agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
        is_maintenance: z.ZodDefault<z.ZodBoolean>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        user_agent: z.ZodNullable<z.ZodString>;
        device_memory: z.ZodNullable<z.ZodNumber>;
        hardware_concurrency: z.ZodNullable<z.ZodNumber>;
        vendor_webgl: z.ZodNullable<z.ZodString>;
        renderer_webgl: z.ZodNullable<z.ZodString>;
        screen_details: z.ZodNullable<z.ZodObject<{
            screens: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                left: z.ZodNumber;
                top: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                devicePixelRatio: z.ZodNumber;
                orientation: z.ZodObject<{
                    angle: z.ZodNumber;
                    type: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        cool: z.ZodNullable<z.ZodObject<{
            eventHistory: z.ZodObject<{
                history_size: z.ZodNumber;
                history_msgs_flushed: z.ZodNumber;
                history: z.ZodArray<z.ZodObject<{
                    index: z.ZodNumber;
                    status: z.ZodEnum<{
                        UP: "UP";
                        DOWN: "DOWN";
                    }>;
                    time: z.ZodString;
                    interval: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            objectOutage: z.ZodObject<{
                status: z.ZodEnum<{
                    UP: "UP";
                    DOWN: "DOWN";
                }>;
                time: z.ZodString;
                aot: z.ZodNumber;
                naf: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Device = z.infer<typeof Device>;
export declare const DbDtoToDeviceState: z.ZodPipe<z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<string[] | null, string | null>>;
    is_maintenance: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
}, z.core.$strip>, z.ZodTransform<{
    uri: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string[] | null;
    is_maintenance: boolean;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    uri: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string[] | null;
    is_maintenance: boolean;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}>>;
export declare const DbDtoToDeviceStatus: z.ZodPipe<z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    user_agent: z.ZodNullable<z.ZodString>;
    device_memory: z.ZodNullable<z.ZodNumber>;
    hardware_concurrency: z.ZodNullable<z.ZodNumber>;
    vendor_webgl: z.ZodNullable<z.ZodString>;
    renderer_webgl: z.ZodNullable<z.ZodString>;
    screen_details: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<{
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                angle: number;
                type: string;
            };
        }[];
    } | null, string | null>>;
    cool: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<{
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                index: number;
                status: "UP" | "DOWN";
                time: string;
                interval: number;
            }[];
        };
        objectOutage: {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        };
    } | null, string | null>>;
    has_error: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
}, z.core.$strip>, z.ZodTransform<{
    uri: string | null;
    user_agent: string | null;
    device_memory: number | null;
    hardware_concurrency: number | null;
    vendor_webgl: string | null;
    renderer_webgl: string | null;
    screen_details: {
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                angle: number;
                type: string;
            };
        }[];
    } | null;
    cool: {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                index: number;
                status: "UP" | "DOWN";
                time: string;
                interval: number;
            }[];
        };
        objectOutage: {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        };
    } | null;
    has_error: boolean;
    error_stack: string | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    uri: string | null;
    user_agent: string | null;
    device_memory: number | null;
    hardware_concurrency: number | null;
    vendor_webgl: string | null;
    renderer_webgl: string | null;
    screen_details: {
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                angle: number;
                type: string;
            };
        }[];
    } | null;
    cool: {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                index: number;
                status: "UP" | "DOWN";
                time: string;
                interval: number;
            }[];
        };
        objectOutage: {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        };
    } | null;
    has_error: boolean;
    error_stack: string | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}>>;
export declare const DbDtoFromDeviceBase: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodTransform<{
    tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    name: string;
    user_tags: string[];
    system_tags: string[];
}, {
    name: string;
    tags: string[];
    user_tags: string[];
    system_tags: string[];
}>>;
export declare const DbDtoFromDevice: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
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
        agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
        is_maintenance: z.ZodDefault<z.ZodBoolean>;
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
        agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
        is_maintenance: z.ZodDefault<z.ZodBoolean>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        user_agent: z.ZodNullable<z.ZodString>;
        device_memory: z.ZodNullable<z.ZodNumber>;
        hardware_concurrency: z.ZodNullable<z.ZodNumber>;
        vendor_webgl: z.ZodNullable<z.ZodString>;
        renderer_webgl: z.ZodNullable<z.ZodString>;
        screen_details: z.ZodNullable<z.ZodObject<{
            screens: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                left: z.ZodNumber;
                top: z.ZodNumber;
                width: z.ZodNumber;
                height: z.ZodNumber;
                devicePixelRatio: z.ZodNumber;
                orientation: z.ZodObject<{
                    angle: z.ZodNumber;
                    type: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        cool: z.ZodNullable<z.ZodObject<{
            eventHistory: z.ZodObject<{
                history_size: z.ZodNumber;
                history_msgs_flushed: z.ZodNumber;
                history: z.ZodArray<z.ZodObject<{
                    index: z.ZodNumber;
                    status: z.ZodEnum<{
                        UP: "UP";
                        DOWN: "DOWN";
                    }>;
                    time: z.ZodString;
                    interval: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            objectOutage: z.ZodObject<{
                status: z.ZodEnum<{
                    UP: "UP";
                    DOWN: "DOWN";
                }>;
                time: z.ZodString;
                aot: z.ZodNumber;
                naf: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodTransform<{
    tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    name: string;
    user_tags: string[];
    system_tags: string[];
    tenant_id: string;
    device_id: string;
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
        agent_ids: string[] | null;
        is_maintenance: boolean;
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
        agent_ids: string[] | null;
        is_maintenance: boolean;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        user_agent: string | null;
        device_memory: number | null;
        hardware_concurrency: number | null;
        vendor_webgl: string | null;
        renderer_webgl: string | null;
        screen_details: {
            screens: {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    angle: number;
                    type: string;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    index: number;
                    status: "UP" | "DOWN";
                    time: string;
                    interval: number;
                }[];
            };
            objectOutage: {
                status: "UP" | "DOWN";
                time: string;
                aot: number;
                naf: number;
            };
        } | null;
        has_error: boolean;
        error_stack: string | null;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}, {
    name: string;
    tags: string[];
    user_tags: string[];
    system_tags: string[];
    tenant_id: string;
    device_id: string;
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
        agent_ids: string[] | null;
        is_maintenance: boolean;
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
        agent_ids: string[] | null;
        is_maintenance: boolean;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        user_agent: string | null;
        device_memory: number | null;
        hardware_concurrency: number | null;
        vendor_webgl: string | null;
        renderer_webgl: string | null;
        screen_details: {
            screens: {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    angle: number;
                    type: string;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    index: number;
                    status: "UP" | "DOWN";
                    time: string;
                    interval: number;
                }[];
            };
            objectOutage: {
                status: "UP" | "DOWN";
                time: string;
                aot: number;
                naf: number;
            };
        } | null;
        has_error: boolean;
        error_stack: string | null;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}>>;
export declare const DbDtoToDeviceBase: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    user_tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    system_tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
}, z.core.$strip>, z.ZodTransform<{
    name: string;
    tags: string[];
    user_tags: string[];
    system_tags: string[];
}, {
    name: string;
    tags: string[];
    user_tags: string[];
    system_tags: string[];
}>>;
export declare const DbDtoToDevice: z.ZodPipe<z.ZodObject<{
    tenant_id: z.ZodUUID;
    device_id: z.ZodUUID;
    name: z.ZodString;
    tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    user_tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    system_tags: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
    is_in_desired_state: z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>;
    desired_state_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desired_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    desired_state_agent_ids: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<string[] | null, string | null>>;
    desired_state_is_maintenance: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
    desired_state_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    desired_state_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    desired_state_is_deleted: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
    runtime_state_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_agent_ids: z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<string[] | null, string | null>>;
    runtime_state_is_maintenance: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
    runtime_state_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_state_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_state_is_deleted: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
    runtime_status_uri: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_user_agent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_device_memory: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_status_hardware_concurrency: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_status_vendor_webgl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_renderer_webgl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_screen_details: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<{
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                angle: number;
                type: string;
            };
        }[];
    } | null, string | null>>>;
    runtime_status_cool: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>, z.ZodTransform<{
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                index: number;
                status: "UP" | "DOWN";
                time: string;
                interval: number;
            }[];
        };
        objectOutage: {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        };
    } | null, string | null>>>;
    runtime_status_has_error: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
    runtime_status_error_stack: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_create_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_status_modify_timestamp: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
    runtime_status_is_deleted: z.ZodOptional<z.ZodPipe<z.ZodNumber, z.ZodTransform<boolean, number>>>;
}, z.core.$strip>, z.ZodTransform<{
    name: string;
    tags: string[];
    user_tags: string[];
    system_tags: string[];
    tenant_id: string;
    device_id: string;
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
        agent_ids: string[] | null;
        is_maintenance: boolean;
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
        agent_ids: string[] | null;
        is_maintenance: boolean;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
    runtime_status: {
        uri: string | null;
        user_agent: string | null;
        device_memory: number | null;
        hardware_concurrency: number | null;
        vendor_webgl: string | null;
        renderer_webgl: string | null;
        screen_details: {
            screens: {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    angle: number;
                    type: string;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    index: number;
                    status: "UP" | "DOWN";
                    time: string;
                    interval: number;
                }[];
            };
            objectOutage: {
                status: "UP" | "DOWN";
                time: string;
                aot: number;
                naf: number;
            };
        } | null;
        has_error: boolean;
        error_stack: string | null;
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
    } | null;
}, {
    tenant_id: string;
    device_id: string;
    name: string;
    tags: string[];
    user_tags: string[];
    system_tags: string[];
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    is_in_desired_state: boolean;
    desired_state_agent_ids: string[] | null;
    runtime_state_agent_ids: string[] | null;
    desired_state_uri?: string | null | undefined;
    desired_state_pull_interval?: number | null | undefined;
    desired_state_push_interval?: number | null | undefined;
    desired_state_min_backoff_interval?: number | null | undefined;
    desired_state_max_backoff_interval?: number | null | undefined;
    desired_state_is_maintenance?: boolean | undefined;
    desired_state_create_timestamp?: string | undefined;
    desired_state_modify_timestamp?: string | undefined;
    desired_state_is_deleted?: boolean | undefined;
    runtime_state_uri?: string | null | undefined;
    runtime_state_pull_interval?: number | null | undefined;
    runtime_state_push_interval?: number | null | undefined;
    runtime_state_min_backoff_interval?: number | null | undefined;
    runtime_state_max_backoff_interval?: number | null | undefined;
    runtime_state_is_maintenance?: boolean | undefined;
    runtime_state_create_timestamp?: string | undefined;
    runtime_state_modify_timestamp?: string | undefined;
    runtime_state_is_deleted?: boolean | undefined;
    runtime_status_uri?: string | null | undefined;
    runtime_status_user_agent?: string | null | undefined;
    runtime_status_device_memory?: number | null | undefined;
    runtime_status_hardware_concurrency?: number | null | undefined;
    runtime_status_vendor_webgl?: string | null | undefined;
    runtime_status_renderer_webgl?: string | null | undefined;
    runtime_status_screen_details?: {
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                angle: number;
                type: string;
            };
        }[];
    } | null | undefined;
    runtime_status_cool?: {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                index: number;
                status: "UP" | "DOWN";
                time: string;
                interval: number;
            }[];
        };
        objectOutage: {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        };
    } | null | undefined;
    runtime_status_has_error?: boolean | undefined;
    runtime_status_error_stack?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
    runtime_status_is_deleted?: boolean | undefined;
}>>;
