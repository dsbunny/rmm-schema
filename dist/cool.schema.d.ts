import * as z from "zod";
export declare const HistoryEntrySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"HistoryEntry">;
    index: z.ZodNumber;
    status: z.ZodEnum<{
        UP: "UP";
        DOWN: "DOWN";
    }>;
    time: z.ZodString;
    interval: z.ZodNumber;
}, z.core.$strip>;
export type HistoryEntry = z.infer<typeof HistoryEntrySchema>;
export declare const EventHistorySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"EventHistory">;
    history_size: z.ZodNumber;
    history_msgs_flushed: z.ZodNumber;
    history: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"HistoryEntry">;
        index: z.ZodNumber;
        status: z.ZodEnum<{
            UP: "UP";
            DOWN: "DOWN";
        }>;
        time: z.ZodString;
        interval: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EventHistory = z.infer<typeof EventHistorySchema>;
export declare const ObjectOutageSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ObjectOutage">;
    status: z.ZodEnum<{
        UP: "UP";
        DOWN: "DOWN";
    }>;
    time: z.ZodString;
    aot: z.ZodNumber;
    naf: z.ZodNumber;
}, z.core.$strip>;
export type ObjectOutage = z.infer<typeof ObjectOutageSchema>;
export declare const CoolReportSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CoolReport">;
    eventHistory: z.ZodObject<{
        '@type': z.ZodLiteral<"EventHistory">;
        history_size: z.ZodNumber;
        history_msgs_flushed: z.ZodNumber;
        history: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"HistoryEntry">;
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
        '@type': z.ZodLiteral<"ObjectOutage">;
        status: z.ZodEnum<{
            UP: "UP";
            DOWN: "DOWN";
        }>;
        time: z.ZodString;
        aot: z.ZodNumber;
        naf: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CoolReport = z.infer<typeof CoolReportSchema>;
//# sourceMappingURL=cool.schema.d.ts.map