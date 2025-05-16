// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const ScreenOrientation = z.object({
    angle: z.number()
        .describe('The angle of the screen orientation'),
    type: z.string()
        .describe('The type of the screen orientation'),
})
    .describe('The screen orientation');
export const ScreenDetailed = z.object({
    label: z.string()
        .describe('The label of the screen details'),
    left: z.number()
        .describe('The left of the screen details'),
    top: z.number()
        .describe('The top of the screen details'),
    width: z.number()
        .describe('The width of the screen details'),
    height: z.number()
        .describe('The height of the screen details'),
    devicePixelRatio: z.number()
        .describe('The device pixel ratio of the screen details'),
    orientation: ScreenOrientation
        .describe('The orientation of the screen details'),
})
    .describe('The screen details');
export const ScreenDetails = z.object({
    screens: z.array(ScreenDetailed),
})
    .describe('Details of all screens available to the device');
//# sourceMappingURL=screen-details.schema.js.map