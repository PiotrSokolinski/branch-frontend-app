import { windowSize } from "./windowSize";
import {
  mobileBreakpoint,
  mobile,
  desktop,
  fontSizeMultiplier,
} from "../theme/config";
import { WindowType } from "../types";

export const viewToFontSize = (): number => {
  const size: WindowType = windowSize();
  const useWidth: boolean = mobileBreakpoint.width !== undefined;
  const { width, height }: WindowType =
    (useWidth && size.width >= mobileBreakpoint.width) ||
    (useWidth && size.height >= mobileBreakpoint.height)
      ? desktop
      : mobile;

  const scale: WindowType = {
    width: size.width / width,
    height: size.height / height,
  };

  return fontSizeMultiplier * (useWidth ? scale.width : scale.height);
};

export const setDocumentFontSize = (font: number = viewToFontSize()): void => {
  if (Number.isNaN(font) || typeof document === "undefined") return;
  document.documentElement.style.fontSize = `${font}px`;
};
