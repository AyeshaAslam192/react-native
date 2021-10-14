import { TOGGLE_MENU } from "./appActionsTypes";

const toggleMenu = (show) => ({
    type: TOGGLE_MENU,
    payload: show,
  });

export {
    toggleMenu,
};