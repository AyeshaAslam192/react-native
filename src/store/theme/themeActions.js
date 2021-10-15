import { theme } from "./themeActionsTypes";

const switchTheme = (show) => ({
    type: theme,
    payload: show,
  });

export {
    switchTheme,
};