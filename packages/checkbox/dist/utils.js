import { palette } from 'monorepo-design-system-tokens';

// import styles from "./styles.module.scss";

const sizeMap = {
  // small: styles.root__small,
  normal: ""
  // large: styles.root__large,
};
const stateMap = {
  normal: palette.primary,
  success: palette.secondary
};

export { sizeMap as default, sizeMap, stateMap };
