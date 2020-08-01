const breakpoints = {
  phone: 375,
  bigPhone: 576,
  tablet: 768,
  bigTablet: 992,
  desktop: 1200,
  bigDesktop: 1400,
};

export const Mq = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {});
