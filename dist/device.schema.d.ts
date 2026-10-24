import * as z from "zod";
export declare const DeviceRegistrationSchema: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type DeviceRegistration = z.infer<typeof DeviceRegistrationSchema>;
export declare const DeviceBaseSchema: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type DeviceBase = z.infer<typeof DeviceBaseSchema>;
export declare const DeviceMetadataSchema: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    is_in_desired_state: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceMetadata = z.infer<typeof DeviceMetadataSchema>;
export declare const DeviceStateMetadataSchema: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceStateMetadata = z.infer<typeof DeviceStateMetadataSchema>;
export declare const DeviceStatusMetadataSchema: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceStatusMetadata = z.infer<typeof DeviceStatusMetadataSchema>;
export declare const DeviceStateBaseSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
    is_maintenance: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type DeviceStateBase = z.infer<typeof DeviceStateBaseSchema>;
export declare const DeviceStateSchema: z.ZodObject<{
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
export type DeviceState = z.infer<typeof DeviceStateSchema>;
export declare const DeviceStatusBaseSchema: z.ZodObject<{
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
export type DeviceStatusBase = z.infer<typeof DeviceStatusBaseSchema>;
export declare const DeviceStatusSchema: z.ZodObject<{
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
export type DeviceStatus = z.infer<typeof DeviceStatusSchema>;
export declare const DeviceSchema: z.ZodObject<{
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
export type Device = z.infer<typeof DeviceSchema>;
