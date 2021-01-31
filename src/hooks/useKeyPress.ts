import { useEffect } from "react";

/**
 * @param {number} targetKey key code for which want to detect the click
 * @param {() => void} onKeyPress callback function to execute
 */
const useKeyPress = (targetKey: number, onKeyPress: () => void) => {
  const handleKeyUp = ({ keyCode }: { keyCode: number }) => {
    if (keyCode === targetKey) {
      if (onKeyPress) onKeyPress();
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp, false);
    return () => {
      document.removeEventListener("keyup", handleKeyUp, false);
    };
  }, []);
};

export default useKeyPress;
