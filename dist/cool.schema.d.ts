import * as z from "zod";
export declare const HistoryEntry: z.ZodObject<{
    index: z.ZodNumber;
    status: z.ZodEnum<{
        UP: "UP";
        DOWN: "DOWN";
    }>;
    time: z.ZodString;
    interval: z.ZodNumber;
}, z.core.$strip>;
export type HistoryEntry = z.infer<typeof HistoryEntry>;
export declare const EventHistory: z.ZodObject<{
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
export type EventHistory = z.infer<typeof EventHistory>;
export declare const ObjectOutage: z.ZodObject<{
    status: z.ZodEnum<{
        UP: "UP";
        DOWN: "DOWN";
    }>;
    time: z.ZodString;
    aot: z.ZodNumber;
    naf: z.ZodNumber;
}, z.core.$strip>;
export type ObjectOutage = z.infer<typeof ObjectOutage>;
export declare const CoolReport: z.ZodObject<{
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
}, z.core.$strip>;
export type CoolReport = z.infer<typeof CoolReport>;
