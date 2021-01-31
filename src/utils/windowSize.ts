import { desktop } from "../theme/config";
import { WindowType } from "../types";

export const windowExists: boolean = typeof window !== "undefined";

export const windowSize = (): WindowType =>
  !windowExists
    ? desktop
    : {
        width: Math.min(desktop.width, window.innerWidth),
        height: window.innerHeight,
      };

export const windowRealSize = (): WindowType =>
  !windowExists
    ? desktop
    : {
        width: window.innerWidth,
        height: window.innerHeight,
      };
