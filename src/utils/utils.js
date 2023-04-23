import { screenTablet } from './constants';

// TODO: On somewhere (e.g. GitHub), the loading process might be longer,
// Should reduce the max height (e.g. 80%) to do the lazyLoad earlier

// A3 -> 0.70714
// A4 -> 0.70707
// 16:9 -> 0.5625
export const getWidthAndHeight = (windowWidth, dimensions = '16x9') => {
  const paddingAround = windowWidth >= screenTablet ? 0.18 : 0.08;
  const [width, height] = dimensions.split('x').map(parseFloat);
  const heightRatio = isNaN(height) || isNaN(width) ? 0.7071 : height / width;

  return {
    width: Math.floor(windowWidth * (1 - paddingAround)),
    height: Math.floor(windowWidth * (1 - paddingAround) * heightRatio)
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getWidthAndHeight
};
