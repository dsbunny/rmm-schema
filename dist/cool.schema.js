// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// REF: https://www.circitor.fr/Mibs/Mib/C/CISCO-OUTAGE-MONITOR-MIB.mib
import { z } from 'zod';
export const HistoryEntry = z.object({
    index: z.number()
        .describe('An arbitrary non-zero integer value that uniquely identifies an entry in the history array'),
    status: z.enum(["UP", "DOWN"])
        .describe('The type of outage related event'),
    time: z.string()
        .describe('The date and time of the event was generated'),
    // If the event type is up, the interval time from the last down time is
    // TTR (Time To Recovery). Otherwise, the interval time from the last up
    // is TTF (Time To Failure).
    interval: z.number()
        .describe('The time duration between transitions in available state of a component'),
})
    .describe('An entry in the event history table');
export const EventHistory = z.object({
    history_size: z.number()
        .describe('The upper limit on the number of entries that the outage history array may contain'),
    history_msgs_flushed: z.number()
        .describe('The number of entries that have been removed from the history array in order to make room for new entries'),
    // Entries are stored in FIFO order.  When the maximum number of entries
    // has been reached in the table, the oldest entry in the table is
    // removed immediately.
    history: z.array(HistoryEntry)
        .describe('A table of outage related events generated by this router. Conceptual row entries are dynamically added into this table when outage related events occur'),
})
    .describe('The event history of the outage monitoring');
export const ObjectOutage = z.object({
    status: z.enum(["UP", "DOWN"])
        .describe('The current operational state of the monitored object'),
    time: z.string()
        .describe('The date and time of the object to start outage recording'),
    aot: z.number()
        .describe('The total outage time in second of a component from the beginning of the measurement'),
    naf: z.number()
        .describe('The total number of failure instances from the beginning of the measurement. Every failure event of a component adds 1 to this object'),
})
    .describe('The object outage information');
export const CoolReport = z.object({
    eventHistory: EventHistory,
    objectOutage: ObjectOutage,
})
    .describe('The report of the outage monitoring');
//# sourceMappingURL=cool.schema.js.map