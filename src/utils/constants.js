/* CSS Constants */
export const mainBlue = '#308CE0';
export const darkGrey = 'rgba(0, 0, 0, 0.75)';
export const lightGrey = 'rgba(0, 0, 0, 0.45)';

// Breakpoints
export const screenMobileOld = 0;
export const screenMobile = 350;
export const screenTablet = 600;
export const screenLaptop = 1024;
export const screenDesktop = 1536;

export const fadeTransitionProps = {
  easing: {
    enter: 'ease-in-out',
    exit: 'unset'
  },
  timeout: 800
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mainBlue,
  darkGrey,
  lightGrey,
  screenMobileOld,
  screenMobile,
  screenTablet,
  screenLaptop,
  screenDesktop,
  fadeTransitionProps
};
