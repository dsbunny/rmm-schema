import { z } from 'zod';
export declare const ScreenOrientation: z.ZodObject<{
    angle: z.ZodNumber;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    angle: number;
}, {
    type: string;
    angle: number;
}>;
export type ScreenOrientation = z.infer<typeof ScreenOrientation>;
export declare const ScreenDetailed: z.ZodObject<{
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
}>;
export type ScreenDetailed = z.infer<typeof ScreenDetailed>;
export declare const ScreenDetails: z.ZodObject<{
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
}>;
export type ScreenDetails = z.infer<typeof ScreenDetails>;
