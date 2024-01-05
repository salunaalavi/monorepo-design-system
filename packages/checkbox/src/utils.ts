import {
  palette
} from "monorepo-design-system-tokens";  
// import styles from "./styles.module.scss";

export const sizeMap = {
  // small: styles.root__small,
  normal: "",
  // large: styles.root__large,
};

export const stateMap = {
  normal: palette.primary as typeof palette.primary,
  success: palette.secondary as typeof palette.secondary,
};

export default sizeMap;
