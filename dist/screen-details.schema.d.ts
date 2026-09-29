import * as z from "zod";
export declare const ScreenOrientationSchema: z.ZodObject<{
    angle: z.ZodNumber;
    type: z.ZodString;
}, z.core.$strip>;
export type ScreenOrientation = z.infer<typeof ScreenOrientationSchema>;
export declare const ScreenDetailedSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type ScreenDetailed = z.infer<typeof ScreenDetailedSchema>;
export declare const ScreenDetailsSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type ScreenDetails = z.infer<typeof ScreenDetailsSchema>;
