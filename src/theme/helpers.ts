import { fontSizeMultiplier } from "./config";

export const rem = (px: number): string => `${px / fontSizeMultiplier}rem`;
