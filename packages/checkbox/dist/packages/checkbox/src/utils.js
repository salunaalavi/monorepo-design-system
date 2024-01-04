import designTokens from 'monorepo-design-system-tokens';

// import styles from "./styles.module.scss";

const sizeMap = {
  // small: styles.root__small,
  normal: ""
  // large: styles.root__large,
};
const stateMap = {
  normal: designTokens.palette.primary,
  success: designTokens.palette.secondary
};

export { sizeMap as default, sizeMap, stateMap };
