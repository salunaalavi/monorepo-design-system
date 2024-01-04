import designTokens from "monorepo-design-system-tokens";  
// import styles from "./styles.module.scss";

export const sizeMap = {
  // small: styles.root__small,
  normal: "",
  // large: styles.root__large,
};

export const stateMap = {
  normal: designTokens.palette.primary as typeof designTokens.palette.primary,
  success: designTokens.palette.secondary as typeof designTokens.palette.secondary,
};

export default sizeMap;
