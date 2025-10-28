import * as z from "zod";
export declare const ErrorResponse: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type ErrorResponse = z.infer<typeof ErrorResponse>;
export declare const WebHookRequest: z.ZodObject<{
    ref_id: z.ZodString;
    class: z.ZodString;
}, z.core.$strip>;
export type WebHookRequest = z.infer<typeof WebHookRequest>;
export declare const WebHookResponse: z.ZodObject<{}, z.core.$strip>;
export type WebHookResponse = z.infer<typeof WebHookResponse>;
export declare const ListDevicesRequest: z.ZodObject<{}, z.core.$strip>;
export type ListDevicesRequest = z.infer<typeof ListDevicesRequest>;
export declare const ListDevicesResponse: z.ZodObject<{
    devices: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    agents: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            detail: z.ZodJSONSchema;
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
            detail: z.ZodJSONSchema;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            is_deleted: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
        runtime_status: z.ZodNullable<z.ZodObject<{
            uri: z.ZodNullable<z.ZodString>;
            detail: z.ZodJSONSchema;
            has_error: z.ZodDefault<z.ZodBoolean>;
            error_stack: z.ZodNullable<z.ZodString>;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            is_deleted: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListDevicesResponse = z.infer<typeof ListDevicesResponse>;
export declare const GetDeviceSuggestionsRequest: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceSuggestionsRequest = z.infer<typeof GetDeviceSuggestionsRequest>;
export declare const GetDeviceSuggestionsResponse: z.ZodObject<{
    c: z.ZodString;
    s: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type GetDeviceSuggestionsResponse = z.infer<typeof GetDeviceSuggestionsResponse>;
export declare const GetDeviceRequest: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceRequest = z.infer<typeof GetDeviceRequest>;
export declare const GetDeviceResponse: z.ZodObject<{
    device: z.ZodObject<{
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
    agents: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            detail: z.ZodJSONSchema;
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
            detail: z.ZodJSONSchema;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            is_deleted: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
        runtime_status: z.ZodNullable<z.ZodObject<{
            uri: z.ZodNullable<z.ZodString>;
            detail: z.ZodJSONSchema;
            has_error: z.ZodDefault<z.ZodBoolean>;
            error_stack: z.ZodNullable<z.ZodString>;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            is_deleted: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type GetDeviceResponse = z.infer<typeof GetDeviceResponse>;
export declare const UpdateDeviceRequest: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>;
export type UpdateDeviceRequest = z.infer<typeof UpdateDeviceRequest>;
export declare const UpdateDeviceResponse: z.ZodObject<{
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
export type UpdateDeviceResponse = z.infer<typeof UpdateDeviceResponse>;
export declare const GetDeviceStateRequest: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceStateRequest = z.infer<typeof GetDeviceStateRequest>;
export declare const GetDeviceStateResponse: z.ZodObject<{
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
export type GetDeviceStateResponse = z.infer<typeof GetDeviceStateResponse>;
export declare const UpdateDeviceStateRequest: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
    is_maintenance: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateDeviceStateRequest = z.infer<typeof UpdateDeviceStateRequest>;
export declare const UpdateDeviceStateResponse: z.ZodObject<{
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
export type UpdateDeviceStateResponse = z.infer<typeof UpdateDeviceStateResponse>;
export declare const PatchDeviceStateRequest: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>;
export type PatchDeviceStateRequest = z.infer<typeof PatchDeviceStateRequest>;
export declare const PatchDeviceStateResponse: z.ZodObject<{
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
export type PatchDeviceStateResponse = z.infer<typeof PatchDeviceStateResponse>;
export declare const GetDeviceStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceStatusRequest = z.infer<typeof GetDeviceStatusRequest>;
export declare const GetDeviceStatusResponse: z.ZodObject<{
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
export type GetDeviceStatusResponse = z.infer<typeof GetDeviceStatusResponse>;
export declare const UpdateDeviceStatusRequest: z.ZodObject<{
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
export type UpdateDeviceStatusRequest = z.infer<typeof UpdateDeviceStatusRequest>;
export declare const UpdateDeviceStatusResponse: z.ZodObject<{
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
export type UpdateDeviceStatusResponse = z.infer<typeof UpdateDeviceStatusResponse>;
export declare const PatchDeviceStatusRequest: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>;
export type PatchDeviceStatusRequest = z.infer<typeof PatchDeviceStatusRequest>;
export declare const PatchDeviceStatusResponse: z.ZodObject<{
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
export type PatchDeviceStatusResponse = z.infer<typeof PatchDeviceStatusResponse>;
export declare const CreateDeviceRequest: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateDeviceRequest = z.infer<typeof CreateDeviceRequest>;
export declare const CreateDeviceResponse: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreateDeviceResponse = z.infer<typeof CreateDeviceResponse>;
export declare const CreateDeviceAgentRequest: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateDeviceAgentRequest = z.infer<typeof CreateDeviceAgentRequest>;
export declare const CreateDeviceAgentResponse: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreateDeviceAgentResponse = z.infer<typeof CreateDeviceAgentResponse>;
export declare const ListAgentsRequest: z.ZodObject<{}, z.core.$strip>;
export type ListAgentsRequest = z.infer<typeof ListAgentsRequest>;
export declare const ListAgentsResponse: z.ZodObject<{
    agents: z.ZodArray<z.ZodObject<{
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
            detail: z.ZodJSONSchema;
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
            detail: z.ZodJSONSchema;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            is_deleted: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
        runtime_status: z.ZodNullable<z.ZodObject<{
            uri: z.ZodNullable<z.ZodString>;
            detail: z.ZodJSONSchema;
            has_error: z.ZodDefault<z.ZodBoolean>;
            error_stack: z.ZodNullable<z.ZodString>;
            create_timestamp: z.ZodISODateTime;
            modify_timestamp: z.ZodISODateTime;
            is_deleted: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListAgentsResponse = z.infer<typeof ListAgentsResponse>;
export declare const GetAgentSuggestionsRequest: z.ZodObject<{}, z.core.$strip>;
export type GetAgentSuggestionsRequest = z.infer<typeof GetAgentSuggestionsRequest>;
export declare const GetAgentSuggestionsResponse: z.ZodObject<{
    c: z.ZodString;
    s: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type GetAgentSuggestionsResponse = z.infer<typeof GetAgentSuggestionsResponse>;
export declare const UpdateAgentRequest: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type UpdateAgentRequest = z.infer<typeof UpdateAgentRequest>;
export declare const UpdateAgentResponse: z.ZodObject<{
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
        detail: z.ZodJSONSchema;
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
        detail: z.ZodJSONSchema;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        detail: z.ZodJSONSchema;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type UpdateAgentResponse = z.infer<typeof UpdateAgentResponse>;
export declare const PatchAgentRequest: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>;
export type PatchAgentRequest = z.infer<typeof PatchAgentRequest>;
export declare const PatchAgentResponse: z.ZodObject<{
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
        detail: z.ZodJSONSchema;
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
        detail: z.ZodJSONSchema;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        detail: z.ZodJSONSchema;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PatchAgentResponse = z.infer<typeof PatchAgentResponse>;
export declare const GetAgentRequest: z.ZodObject<{}, z.core.$strip>;
export type GetAgentRequest = z.infer<typeof GetAgentRequest>;
export declare const GetAgentResponse: z.ZodObject<{
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
        detail: z.ZodJSONSchema;
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
        detail: z.ZodJSONSchema;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    runtime_status: z.ZodNullable<z.ZodObject<{
        uri: z.ZodNullable<z.ZodString>;
        detail: z.ZodJSONSchema;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetAgentResponse = z.infer<typeof GetAgentResponse>;
export declare const UpdateAgentStateRequest: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
}, z.core.$strip>;
export type UpdateAgentStateRequest = z.infer<typeof UpdateAgentStateRequest>;
export declare const UpdateAgentStateResponse: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateAgentStateResponse = z.infer<typeof UpdateAgentStateResponse>;
export declare const PatchAgentStateRequest: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>;
export type PatchAgentStateRequest = z.infer<typeof PatchAgentStateRequest>;
export declare const PatchAgentStateResponse: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type PatchAgentStateResponse = z.infer<typeof PatchAgentStateResponse>;
export declare const GetAgentStateRequest: z.ZodObject<{}, z.core.$strip>;
export type GetAgentStateRequest = z.infer<typeof GetAgentStateRequest>;
export declare const GetAgentStateResponse: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type GetAgentStateResponse = z.infer<typeof GetAgentStateResponse>;
export declare const GetAgentStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type GetAgentStatusRequest = z.infer<typeof GetAgentStatusRequest>;
export declare const GetAgentStatusResponse: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type GetAgentStatusResponse = z.infer<typeof GetAgentStatusResponse>;
export declare const UpdateAgentStatusRequest: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type UpdateAgentStatusRequest = z.infer<typeof UpdateAgentStatusRequest>;
export declare const UpdateAgentStatusResponse: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateAgentStatusResponse = z.infer<typeof UpdateAgentStatusResponse>;
export declare const PatchAgentStatusRequest: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>;
export type PatchAgentStatusRequest = z.infer<typeof PatchAgentStatusRequest>;
export declare const PatchAgentStatusResponse: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type PatchAgentStatusResponse = z.infer<typeof PatchAgentStatusResponse>;
