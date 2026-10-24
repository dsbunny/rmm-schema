// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';

export const ScreenOrientationSchema = z.object({
	angle: z.number()
		.describe('The angle of the screen orientation'),
	type: z.string()
		.describe('The type of the screen orientation'),
}).register(dsbunnyRegistry, {
	id: 'ScreenOrientationSchema',
	description: 'The screen orientation'
});
export type ScreenOrientation = z.infer<typeof ScreenOrientationSchema>;

export const ScreenDetailedSchema = z.object({
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
	orientation: ScreenOrientationSchema
		.describe('The orientation of the screen details'),
}).register(dsbunnyRegistry, {
	id: 'ScreenDetailedSchema',
	description: 'The screen details'
});
export type ScreenDetailed = z.infer<typeof ScreenDetailedSchema>;

export const ScreenDetailsSchema = z.object({
	screens: z.array(ScreenDetailedSchema),
}).register(dsbunnyRegistry, {
	id: 'ScreenDetailsSchema',
	description: 'Details of all screens available to the device'
});
export type ScreenDetails = z.infer<typeof ScreenDetailsSchema>;
