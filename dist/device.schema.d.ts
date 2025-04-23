import { z } from 'zod';
export declare const DeviceRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    create_timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
}, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
}>;
export type DeviceRegistration = z.infer<typeof DeviceRegistration>;
export declare const DeviceBase: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    tags: string[];
}, {
    name: string;
    tags: string[];
}>;
export type DeviceBase = z.infer<typeof DeviceBase>;
export declare const DeviceMetadata: z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type DeviceMetadata = z.infer<typeof DeviceMetadata>;
export declare const DeviceStateMetadata: z.ZodObject<{
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type DeviceStateMetadata = z.infer<typeof DeviceStateMetadata>;
export declare const DeviceStatusMetadata: z.ZodObject<{
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type DeviceStatusMetadata = z.infer<typeof DeviceStatusMetadata>;
export declare const DeviceStateBase: z.ZodObject<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string[] | null;
}, {
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string[] | null;
}>;
export type DeviceStateBase = z.infer<typeof DeviceStateBase>;
export declare const DeviceState: z.ZodObject<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
}, {
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>, "strip", z.ZodTypeAny, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string[] | null;
}, {
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string[] | null;
    is_deleted?: boolean | undefined;
}>;
export type DeviceState = z.infer<typeof DeviceState>;
export declare const DeviceStatusBase: z.ZodObject<{
    url: z.ZodNullable<z.ZodString>;
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
            }, "strip", z.ZodTypeAny, {
                type: string;
                angle: number;
            }, {
                type: string;
                angle: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                type: string;
                angle: number;
            };
        }, {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                type: string;
                angle: number;
            };
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                type: string;
                angle: number;
            };
        }[];
    }, {
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                type: string;
                angle: number;
            };
        }[];
    }>>;
    cool: z.ZodNullable<z.ZodObject<{
        eventHistory: z.ZodObject<{
            history_size: z.ZodNumber;
            history_msgs_flushed: z.ZodNumber;
            history: z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                status: z.ZodEnum<["UP", "DOWN"]>;
                time: z.ZodString;
                interval: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                status: "UP" | "DOWN";
                index: number;
                time: string;
                interval: number;
            }, {
                status: "UP" | "DOWN";
                index: number;
                time: string;
                interval: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
                time: string;
                interval: number;
            }[];
        }, {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
                time: string;
                interval: number;
            }[];
        }>;
        objectOutage: z.ZodObject<{
            status: z.ZodEnum<["UP", "DOWN"]>;
            time: z.ZodString;
            aot: z.ZodNumber;
            naf: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        }, {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
    }, {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
    }>>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url: string | null;
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
                type: string;
                angle: number;
            };
        }[];
    } | null;
    cool: {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
}, {
    url: string | null;
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
                type: string;
                angle: number;
            };
        }[];
    } | null;
    cool: {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
    error_stack: string | null;
    has_error?: boolean | undefined;
}>;
export type DeviceStatusBase = z.infer<typeof DeviceStatusBase>;
export declare const DeviceStatus: z.ZodObject<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
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
            }, "strip", z.ZodTypeAny, {
                type: string;
                angle: number;
            }, {
                type: string;
                angle: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                type: string;
                angle: number;
            };
        }, {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                type: string;
                angle: number;
            };
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                type: string;
                angle: number;
            };
        }[];
    }, {
        screens: {
            label: string;
            left: number;
            top: number;
            width: number;
            height: number;
            devicePixelRatio: number;
            orientation: {
                type: string;
                angle: number;
            };
        }[];
    }>>;
    cool: z.ZodNullable<z.ZodObject<{
        eventHistory: z.ZodObject<{
            history_size: z.ZodNumber;
            history_msgs_flushed: z.ZodNumber;
            history: z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                status: z.ZodEnum<["UP", "DOWN"]>;
                time: z.ZodString;
                interval: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                status: "UP" | "DOWN";
                index: number;
                time: string;
                interval: number;
            }, {
                status: "UP" | "DOWN";
                index: number;
                time: string;
                interval: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
                time: string;
                interval: number;
            }[];
        }, {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
                time: string;
                interval: number;
            }[];
        }>;
        objectOutage: z.ZodObject<{
            status: z.ZodEnum<["UP", "DOWN"]>;
            time: z.ZodString;
            aot: z.ZodNumber;
            naf: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        }, {
            status: "UP" | "DOWN";
            time: string;
            aot: number;
            naf: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
    }, {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
    }>>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
}, {
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>, "strip", z.ZodTypeAny, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    url: string | null;
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
                type: string;
                angle: number;
            };
        }[];
    } | null;
    cool: {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
}, {
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
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
                type: string;
                angle: number;
            };
        }[];
    } | null;
    cool: {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
    error_stack: string | null;
    is_deleted?: boolean | undefined;
    has_error?: boolean | undefined;
}>;
export type DeviceStatus = z.infer<typeof DeviceStatus>;
export declare const Device: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, {
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>, {
    desired_state: z.ZodNullable<z.ZodObject<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        agent_ids: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    }, {
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    }>>;
    runtime_state: z.ZodNullable<z.ZodObject<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        agent_ids: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    }, {
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    }>>;
    runtime_status: z.ZodNullable<z.ZodObject<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
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
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    angle: number;
                }, {
                    type: string;
                    angle: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    type: string;
                    angle: number;
                };
            }, {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    type: string;
                    angle: number;
                };
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            screens: {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    type: string;
                    angle: number;
                };
            }[];
        }, {
            screens: {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    type: string;
                    angle: number;
                };
            }[];
        }>>;
        cool: z.ZodNullable<z.ZodObject<{
            eventHistory: z.ZodObject<{
                history_size: z.ZodNumber;
                history_msgs_flushed: z.ZodNumber;
                history: z.ZodArray<z.ZodObject<{
                    index: z.ZodNumber;
                    status: z.ZodEnum<["UP", "DOWN"]>;
                    time: z.ZodString;
                    interval: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    status: "UP" | "DOWN";
                    index: number;
                    time: string;
                    interval: number;
                }, {
                    status: "UP" | "DOWN";
                    index: number;
                    time: string;
                    interval: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
                    time: string;
                    interval: number;
                }[];
            }, {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
                    time: string;
                    interval: number;
                }[];
            }>;
            objectOutage: z.ZodObject<{
                status: z.ZodEnum<["UP", "DOWN"]>;
                time: z.ZodString;
                aot: z.ZodNumber;
                naf: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                status: "UP" | "DOWN";
                time: string;
                aot: number;
                naf: number;
            }, {
                status: "UP" | "DOWN";
                time: string;
                aot: number;
                naf: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        }, {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        }>>;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
    }, {
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        error_stack: string | null;
        is_deleted?: boolean | undefined;
        has_error?: boolean | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string[];
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
    } | null;
}, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string[];
    modify_timestamp: string;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        error_stack: string | null;
        is_deleted?: boolean | undefined;
        has_error?: boolean | undefined;
    } | null;
    is_deleted?: boolean | undefined;
}>;
export type Device = z.infer<typeof Device>;
export declare const DbDtoToDeviceState: z.ZodEffects<z.ZodObject<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    agent_ids: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string | null;
}, {
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string | null;
    is_deleted?: number | undefined;
}>, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string[] | null;
}, {
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    agent_ids: string | null;
    is_deleted?: number | undefined;
}>;
export declare const DbDtoToDeviceStatus: z.ZodEffects<z.ZodObject<{
    url: z.ZodNullable<z.ZodString>;
    user_agent: z.ZodNullable<z.ZodString>;
    device_memory: z.ZodNullable<z.ZodNumber>;
    hardware_concurrency: z.ZodNullable<z.ZodNumber>;
    vendor_webgl: z.ZodNullable<z.ZodString>;
    renderer_webgl: z.ZodNullable<z.ZodString>;
    screen_details: z.ZodNullable<z.ZodString>;
    cool: z.ZodNullable<z.ZodString>;
    has_error: z.ZodDefault<z.ZodNumber>;
    error_stack: z.ZodNullable<z.ZodString>;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    url: string | null;
    user_agent: string | null;
    device_memory: number | null;
    hardware_concurrency: number | null;
    vendor_webgl: string | null;
    renderer_webgl: string | null;
    screen_details: string | null;
    cool: string | null;
    has_error: number;
    error_stack: string | null;
}, {
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
    user_agent: string | null;
    device_memory: number | null;
    hardware_concurrency: number | null;
    vendor_webgl: string | null;
    renderer_webgl: string | null;
    screen_details: string | null;
    cool: string | null;
    error_stack: string | null;
    is_deleted?: number | undefined;
    has_error?: number | undefined;
}>, {
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    url: string | null;
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
                type: string;
                angle: number;
            };
        }[];
    } | null;
    cool: {
        eventHistory: {
            history_size: number;
            history_msgs_flushed: number;
            history: {
                status: "UP" | "DOWN";
                index: number;
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
}, {
    create_timestamp: string;
    modify_timestamp: string;
    url: string | null;
    user_agent: string | null;
    device_memory: number | null;
    hardware_concurrency: number | null;
    vendor_webgl: string | null;
    renderer_webgl: string | null;
    screen_details: string | null;
    cool: string | null;
    error_stack: string | null;
    is_deleted?: number | undefined;
    has_error?: number | undefined;
}>;
export declare const DbDtoFromDeviceBase: z.ZodEffects<z.ZodObject<{
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
export declare const DbDtoFromDevice: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, {
    tenant_id: z.ZodString;
    device_id: z.ZodString;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>, {
    desired_state: z.ZodNullable<z.ZodObject<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        agent_ids: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    }, {
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    }>>;
    runtime_state: z.ZodNullable<z.ZodObject<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
        pull_interval: z.ZodNullable<z.ZodNumber>;
        push_interval: z.ZodNullable<z.ZodNumber>;
        min_backoff_interval: z.ZodNullable<z.ZodNumber>;
        max_backoff_interval: z.ZodNullable<z.ZodNumber>;
        agent_ids: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    }, {
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    }>>;
    runtime_status: z.ZodNullable<z.ZodObject<z.objectUtil.extendShape<{
        url: z.ZodNullable<z.ZodString>;
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
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    angle: number;
                }, {
                    type: string;
                    angle: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    type: string;
                    angle: number;
                };
            }, {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    type: string;
                    angle: number;
                };
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            screens: {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    type: string;
                    angle: number;
                };
            }[];
        }, {
            screens: {
                label: string;
                left: number;
                top: number;
                width: number;
                height: number;
                devicePixelRatio: number;
                orientation: {
                    type: string;
                    angle: number;
                };
            }[];
        }>>;
        cool: z.ZodNullable<z.ZodObject<{
            eventHistory: z.ZodObject<{
                history_size: z.ZodNumber;
                history_msgs_flushed: z.ZodNumber;
                history: z.ZodArray<z.ZodObject<{
                    index: z.ZodNumber;
                    status: z.ZodEnum<["UP", "DOWN"]>;
                    time: z.ZodString;
                    interval: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    status: "UP" | "DOWN";
                    index: number;
                    time: string;
                    interval: number;
                }, {
                    status: "UP" | "DOWN";
                    index: number;
                    time: string;
                    interval: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
                    time: string;
                    interval: number;
                }[];
            }, {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
                    time: string;
                    interval: number;
                }[];
            }>;
            objectOutage: z.ZodObject<{
                status: z.ZodEnum<["UP", "DOWN"]>;
                time: z.ZodString;
                aot: z.ZodNumber;
                naf: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                status: "UP" | "DOWN";
                time: string;
                aot: number;
                naf: number;
            }, {
                status: "UP" | "DOWN";
                time: string;
                aot: number;
                naf: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        }, {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        }>>;
        has_error: z.ZodDefault<z.ZodBoolean>;
        error_stack: z.ZodNullable<z.ZodString>;
    }, {
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }>, "strip", z.ZodTypeAny, {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
    }, {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        error_stack: string | null;
        is_deleted?: boolean | undefined;
        has_error?: boolean | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string[];
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
    } | null;
}, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string[];
    modify_timestamp: string;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        error_stack: string | null;
        is_deleted?: boolean | undefined;
        has_error?: boolean | undefined;
    } | null;
    is_deleted?: boolean | undefined;
}>, {
    tags: string;
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
    } | null;
}, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string[];
    modify_timestamp: string;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
        is_deleted?: boolean | undefined;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
        error_stack: string | null;
        is_deleted?: boolean | undefined;
        has_error?: boolean | undefined;
    } | null;
    is_deleted?: boolean | undefined;
}>;
export declare const DbDtoToDeviceBase: z.ZodEffects<z.ZodObject<{
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
export declare const DbDtoToDevice: z.ZodEffects<z.ZodObject<{
    tenant_id: z.ZodString;
    device_id: z.ZodString;
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
    desired_state_agent_ids: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desired_state_create_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    desired_state_modify_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    desired_state_is_deleted: z.ZodDefault<z.ZodNumber>;
    runtime_state_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_pull_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_push_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_min_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_max_backoff_interval: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_state_agent_ids: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_state_create_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    runtime_state_modify_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    runtime_state_is_deleted: z.ZodDefault<z.ZodNumber>;
    runtime_status_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_user_agent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_device_memory: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_status_hardware_concurrency: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    runtime_status_vendor_webgl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_renderer_webgl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_screen_details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_cool: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_has_error: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    runtime_status_error_stack: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    runtime_status_create_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    runtime_status_modify_timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    runtime_status_is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string;
    modify_timestamp: string;
    is_deleted: number;
    desired_state_is_deleted: number;
    runtime_state_is_deleted: number;
    runtime_status_is_deleted: number;
    desired_state_url?: string | null | undefined;
    desired_state_pull_interval?: number | null | undefined;
    desired_state_push_interval?: number | null | undefined;
    desired_state_min_backoff_interval?: number | null | undefined;
    desired_state_max_backoff_interval?: number | null | undefined;
    desired_state_create_timestamp?: string | undefined;
    desired_state_modify_timestamp?: string | undefined;
    runtime_state_url?: string | null | undefined;
    runtime_state_pull_interval?: number | null | undefined;
    runtime_state_push_interval?: number | null | undefined;
    runtime_state_min_backoff_interval?: number | null | undefined;
    runtime_state_max_backoff_interval?: number | null | undefined;
    runtime_state_create_timestamp?: string | undefined;
    runtime_state_modify_timestamp?: string | undefined;
    runtime_status_url?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
    desired_state_agent_ids?: string | null | undefined;
    runtime_state_agent_ids?: string | null | undefined;
    runtime_status_user_agent?: string | null | undefined;
    runtime_status_device_memory?: number | null | undefined;
    runtime_status_hardware_concurrency?: number | null | undefined;
    runtime_status_vendor_webgl?: string | null | undefined;
    runtime_status_renderer_webgl?: string | null | undefined;
    runtime_status_screen_details?: string | null | undefined;
    runtime_status_cool?: string | null | undefined;
    runtime_status_has_error?: number | undefined;
    runtime_status_error_stack?: string | null | undefined;
}, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string;
    modify_timestamp: string;
    is_deleted?: number | undefined;
    desired_state_url?: string | null | undefined;
    desired_state_pull_interval?: number | null | undefined;
    desired_state_push_interval?: number | null | undefined;
    desired_state_min_backoff_interval?: number | null | undefined;
    desired_state_max_backoff_interval?: number | null | undefined;
    desired_state_create_timestamp?: string | undefined;
    desired_state_modify_timestamp?: string | undefined;
    desired_state_is_deleted?: number | undefined;
    runtime_state_url?: string | null | undefined;
    runtime_state_pull_interval?: number | null | undefined;
    runtime_state_push_interval?: number | null | undefined;
    runtime_state_min_backoff_interval?: number | null | undefined;
    runtime_state_max_backoff_interval?: number | null | undefined;
    runtime_state_create_timestamp?: string | undefined;
    runtime_state_modify_timestamp?: string | undefined;
    runtime_state_is_deleted?: number | undefined;
    runtime_status_url?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
    runtime_status_is_deleted?: number | undefined;
    desired_state_agent_ids?: string | null | undefined;
    runtime_state_agent_ids?: string | null | undefined;
    runtime_status_user_agent?: string | null | undefined;
    runtime_status_device_memory?: number | null | undefined;
    runtime_status_hardware_concurrency?: number | null | undefined;
    runtime_status_vendor_webgl?: string | null | undefined;
    runtime_status_renderer_webgl?: string | null | undefined;
    runtime_status_screen_details?: string | null | undefined;
    runtime_status_cool?: string | null | undefined;
    runtime_status_has_error?: number | undefined;
    runtime_status_error_stack?: string | null | undefined;
}>, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string[];
    modify_timestamp: string;
    is_deleted: boolean;
    desired_state: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    } | null;
    runtime_state: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
        pull_interval: number | null;
        push_interval: number | null;
        min_backoff_interval: number | null;
        max_backoff_interval: number | null;
        agent_ids: string[] | null;
    } | null;
    runtime_status: {
        create_timestamp: string;
        modify_timestamp: string;
        is_deleted: boolean;
        url: string | null;
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
                    type: string;
                    angle: number;
                };
            }[];
        } | null;
        cool: {
            eventHistory: {
                history_size: number;
                history_msgs_flushed: number;
                history: {
                    status: "UP" | "DOWN";
                    index: number;
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
    } | null;
}, {
    tenant_id: string;
    device_id: string;
    create_timestamp: string;
    name: string;
    tags: string;
    modify_timestamp: string;
    is_deleted?: number | undefined;
    desired_state_url?: string | null | undefined;
    desired_state_pull_interval?: number | null | undefined;
    desired_state_push_interval?: number | null | undefined;
    desired_state_min_backoff_interval?: number | null | undefined;
    desired_state_max_backoff_interval?: number | null | undefined;
    desired_state_create_timestamp?: string | undefined;
    desired_state_modify_timestamp?: string | undefined;
    desired_state_is_deleted?: number | undefined;
    runtime_state_url?: string | null | undefined;
    runtime_state_pull_interval?: number | null | undefined;
    runtime_state_push_interval?: number | null | undefined;
    runtime_state_min_backoff_interval?: number | null | undefined;
    runtime_state_max_backoff_interval?: number | null | undefined;
    runtime_state_create_timestamp?: string | undefined;
    runtime_state_modify_timestamp?: string | undefined;
    runtime_state_is_deleted?: number | undefined;
    runtime_status_url?: string | null | undefined;
    runtime_status_create_timestamp?: string | undefined;
    runtime_status_modify_timestamp?: string | undefined;
    runtime_status_is_deleted?: number | undefined;
    desired_state_agent_ids?: string | null | undefined;
    runtime_state_agent_ids?: string | null | undefined;
    runtime_status_user_agent?: string | null | undefined;
    runtime_status_device_memory?: number | null | undefined;
    runtime_status_hardware_concurrency?: number | null | undefined;
    runtime_status_vendor_webgl?: string | null | undefined;
    runtime_status_renderer_webgl?: string | null | undefined;
    runtime_status_screen_details?: string | null | undefined;
    runtime_status_cool?: string | null | undefined;
    runtime_status_has_error?: number | undefined;
    runtime_status_error_stack?: string | null | undefined;
}>;
