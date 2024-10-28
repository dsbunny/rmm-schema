import { z } from 'zod';
export declare const HistoryEntry: z.ZodObject<{
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
}>;
export type HistoryEntry = z.infer<typeof HistoryEntry>;
export declare const EventHistory: z.ZodObject<{
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
export type EventHistory = z.infer<typeof EventHistory>;
export declare const ObjectOutage: z.ZodObject<{
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
export type ObjectOutage = z.infer<typeof ObjectOutage>;
export declare const CoolReport: z.ZodObject<{
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
}>;
export type CoolReport = z.infer<typeof CoolReport>;
