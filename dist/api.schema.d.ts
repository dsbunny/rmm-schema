import * as z from "zod";
export declare const ListDevicesRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type ListDevicesRequest = z.infer<typeof ListDevicesRequestSchema>;
export declare const ListDevicesResponseSchema: z.ZodObject<{
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
export type ListDevicesResponse = z.infer<typeof ListDevicesResponseSchema>;
export declare const GetDeviceSuggestionsRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceSuggestionsRequest = z.infer<typeof GetDeviceSuggestionsRequestSchema>;
export declare const GetDeviceSuggestionsResponseSchema: z.ZodObject<{
    c: z.ZodString;
    s: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type GetDeviceSuggestionsResponse = z.infer<typeof GetDeviceSuggestionsResponseSchema>;
export declare const GetDeviceAvailabilityRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceAvailabilityRequest = z.infer<typeof GetDeviceAvailabilityRequestSchema>;
export declare const GetDeviceAvailabilityResponseSchema: z.ZodObject<{
    is_available: z.ZodBoolean;
}, z.core.$strip>;
export type GetDeviceAvailabilityResponse = z.infer<typeof GetDeviceAvailabilityResponseSchema>;
export declare const GetDeviceRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceRequest = z.infer<typeof GetDeviceRequestSchema>;
export declare const GetDeviceResponseSchema: z.ZodObject<{
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
export type GetDeviceResponse = z.infer<typeof GetDeviceResponseSchema>;
export declare const PatchDeviceRequestSchema: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type PatchDeviceRequest = z.infer<typeof PatchDeviceRequestSchema>;
export declare const PatchDeviceResponseSchema: z.ZodObject<{
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
export type PatchDeviceResponse = z.infer<typeof PatchDeviceResponseSchema>;
export declare const GetDeviceStateRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceStateRequest = z.infer<typeof GetDeviceStateRequestSchema>;
export declare const GetDeviceStateResponseSchema: z.ZodObject<{
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
export type GetDeviceStateResponse = z.infer<typeof GetDeviceStateResponseSchema>;
export declare const UpdateDeviceStateRequestSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
    is_maintenance: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateDeviceStateRequest = z.infer<typeof UpdateDeviceStateRequestSchema>;
export declare const UpdateDeviceStateResponseSchema: z.ZodObject<{
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
export type UpdateDeviceStateResponse = z.infer<typeof UpdateDeviceStateResponseSchema>;
export declare const PatchDeviceStateRequestSchema: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type PatchDeviceStateRequest = z.infer<typeof PatchDeviceStateRequestSchema>;
export declare const PatchDeviceStateResponseSchema: z.ZodObject<{
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
export type PatchDeviceStateResponse = z.infer<typeof PatchDeviceStateResponseSchema>;
export declare const GetDeviceStatusRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetDeviceStatusRequest = z.infer<typeof GetDeviceStatusRequestSchema>;
export declare const GetDeviceStatusResponseSchema: z.ZodObject<{
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
export type GetDeviceStatusResponse = z.infer<typeof GetDeviceStatusResponseSchema>;
export declare const UpdateDeviceStatusRequestSchema: z.ZodObject<{
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
export type UpdateDeviceStatusRequest = z.infer<typeof UpdateDeviceStatusRequestSchema>;
export declare const UpdateDeviceStatusResponseSchema: z.ZodObject<{
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
export type UpdateDeviceStatusResponse = z.infer<typeof UpdateDeviceStatusResponseSchema>;
export declare const PatchDeviceStatusRequestSchema: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type PatchDeviceStatusRequest = z.infer<typeof PatchDeviceStatusRequestSchema>;
export declare const PatchDeviceStatusResponseSchema: z.ZodObject<{
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
export type PatchDeviceStatusResponse = z.infer<typeof PatchDeviceStatusResponseSchema>;
export declare const CreateDeviceRequestSchema: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateDeviceRequest = z.infer<typeof CreateDeviceRequestSchema>;
export declare const CreateDeviceResponseSchema: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreateDeviceResponse = z.infer<typeof CreateDeviceResponseSchema>;
export declare const CreateDeviceAgentRequestSchema: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateDeviceAgentRequest = z.infer<typeof CreateDeviceAgentRequestSchema>;
export declare const CreateDeviceAgentResponseSchema: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreateDeviceAgentResponse = z.infer<typeof CreateDeviceAgentResponseSchema>;
export declare const ListAgentsRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type ListAgentsRequest = z.infer<typeof ListAgentsRequestSchema>;
export declare const ListAgentsResponseSchema: z.ZodObject<{
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
export type ListAgentsResponse = z.infer<typeof ListAgentsResponseSchema>;
export declare const GetAgentSuggestionsRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetAgentSuggestionsRequest = z.infer<typeof GetAgentSuggestionsRequestSchema>;
export declare const GetAgentSuggestionsResponseSchema: z.ZodObject<{
    c: z.ZodString;
    s: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type GetAgentSuggestionsResponse = z.infer<typeof GetAgentSuggestionsResponseSchema>;
export declare const GetAgentAvailabilityRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetAgentAvailabilityRequest = z.infer<typeof GetAgentAvailabilityRequestSchema>;
export declare const GetAgentAvailabilityResponseSchema: z.ZodObject<{
    is_available: z.ZodBoolean;
}, z.core.$strip>;
export type GetAgentAvailabilityResponse = z.infer<typeof GetAgentAvailabilityResponseSchema>;
export declare const UpdateAgentRequestSchema: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type UpdateAgentRequest = z.infer<typeof UpdateAgentRequestSchema>;
export declare const UpdateAgentResponseSchema: z.ZodObject<{
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
export type UpdateAgentResponse = z.infer<typeof UpdateAgentResponseSchema>;
export declare const PatchAgentRequestSchema: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type PatchAgentRequest = z.infer<typeof PatchAgentRequestSchema>;
export declare const PatchAgentResponseSchema: z.ZodObject<{
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
export type PatchAgentResponse = z.infer<typeof PatchAgentResponseSchema>;
export declare const GetAgentRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetAgentRequest = z.infer<typeof GetAgentRequestSchema>;
export declare const GetAgentResponseSchema: z.ZodObject<{
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
export type GetAgentResponse = z.infer<typeof GetAgentResponseSchema>;
export declare const UpdateAgentStateRequestSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
}, z.core.$strip>;
export type UpdateAgentStateRequest = z.infer<typeof UpdateAgentStateRequestSchema>;
export declare const UpdateAgentStateResponseSchema: z.ZodObject<{
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
export type UpdateAgentStateResponse = z.infer<typeof UpdateAgentStateResponseSchema>;
export declare const PatchAgentStateRequestSchema: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type PatchAgentStateRequest = z.infer<typeof PatchAgentStateRequestSchema>;
export declare const PatchAgentStateResponseSchema: z.ZodObject<{
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
export type PatchAgentStateResponse = z.infer<typeof PatchAgentStateResponseSchema>;
export declare const GetAgentStateRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetAgentStateRequest = z.infer<typeof GetAgentStateRequestSchema>;
export declare const GetAgentStateResponseSchema: z.ZodObject<{
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
export type GetAgentStateResponse = z.infer<typeof GetAgentStateResponseSchema>;
export declare const GetAgentStatusRequestSchema: z.ZodObject<{}, z.core.$strip>;
export type GetAgentStatusRequest = z.infer<typeof GetAgentStatusRequestSchema>;
export declare const GetAgentStatusResponseSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type GetAgentStatusResponse = z.infer<typeof GetAgentStatusResponseSchema>;
export declare const UpdateAgentStatusRequestSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type UpdateAgentStatusRequest = z.infer<typeof UpdateAgentStatusRequestSchema>;
export declare const UpdateAgentStatusResponseSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateAgentStatusResponse = z.infer<typeof UpdateAgentStatusResponseSchema>;
export declare const PatchAgentStatusRequestSchema: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
export type PatchAgentStatusRequest = z.infer<typeof PatchAgentStatusRequestSchema>;
export declare const PatchAgentStatusResponseSchema: z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type PatchAgentStatusResponse = z.infer<typeof PatchAgentStatusResponseSchema>;
export declare const RmmRequestSchema: z.ZodUnion<readonly [z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>], "op">>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodArray<z.ZodString>>;
    is_maintenance: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>], "op">>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>], "op">>, z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>], "op">>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
}, z.core.$strip>, z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>], "op">>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strip>], "op">>]>;
export type RmmRequest = z.infer<typeof RmmRequestSchema>;
export declare const RmmResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
    c: z.ZodString;
    s: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    is_available: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>, z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodUUID;
    agent_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
    c: z.ZodString;
    s: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    is_available: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodJSONSchema;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    uri: z.ZodNullable<z.ZodString>;
    detail: z.ZodJSONSchema;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type RmmResponse = z.infer<typeof RmmResponseSchema>;
