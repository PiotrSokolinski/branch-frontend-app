/**
 * @param  {string} hex
 * @param {number} opacity
 */
const hexToRgba = (hex: string, opacity: number = 1): string => {
  const bigInt: number = parseInt(hex.substring(1), 16);

  const red: number = (bigInt >> 16) & 255;
  const green: number = (bigInt >> 8) & 255;
  const blue: number = bigInt & 255;
  const alpha: number = opacity >= 0 && opacity <= 1 ? opacity : 1;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export default hexToRgba;
