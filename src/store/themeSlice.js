const initialState = {
  theme: "light",
  customColors: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    case "SET_CUSTOM_COLOR":
      return {
        ...state,
        customColors: {
          ...state.customColors,
          [action.payload.colorType]: action.payload.colorValue,
        },
      };
    default:
      return state;
  }
};

export const changeTheme = (theme) => ({
  type: "CHANGE_THEME",
  payload: theme,
});

export const setCustomColor = (colorType, colorValue) => ({
  type: "SET_CUSTOM_COLOR",
  payload: { colorType, colorValue },
});

export default themeReducer;
