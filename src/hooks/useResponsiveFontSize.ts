import { useEffect, useState } from "react";

import { fontSizeMultiplier } from "../theme/config";
import { viewToFontSize, setDocumentFontSize } from "../utils/fontSize";
import { useWindowSize } from "./useWindowSize";
import { WindowType } from "../types";

const useResponsiveFontSize = (): number => {
  const size: WindowType = useWindowSize();
  const [font, setFontSize] = useState(fontSizeMultiplier);

  setDocumentFontSize();

  useEffect(() => {
    const fontSize: number = viewToFontSize();

    if (!Number.isNaN(fontSize)) {
      setFontSize(fontSize);
      setDocumentFontSize(font);
    }
  }, [size.width, size.height]);

  return font;
};

export default useResponsiveFontSize;
