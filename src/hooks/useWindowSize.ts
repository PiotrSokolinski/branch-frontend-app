import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

import { WindowType } from "../types";
import { windowSize, windowRealSize, windowExists } from "../utils/windowSize";

export const useWindowSize = (useReal: boolean = false): WindowType => {
  const getSize: () => WindowType = useReal ? windowRealSize : windowSize;
  const [size, setSize] = useState(getSize());

  const onResize: () => void = throttle(() => {
    setSize(getSize());
  }, 100);

  useEffect(() => {
    if (!windowExists) return undefined;
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return size;
};

export default useWindowSize;
