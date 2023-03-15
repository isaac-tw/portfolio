import { screenTablet } from './constants';

export const getMaxHeight = (windowWidth, ratio = '16:9') => {
    const paddingAround = (windowWidth >= screenTablet) ? 0.18 : 0.08;
    const heightRatio = (ratio === '4:3') ? 0.7071 : 0.5625;
    return ~~(windowWidth * (1 - paddingAround) * heightRatio);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getMaxHeight,
};
