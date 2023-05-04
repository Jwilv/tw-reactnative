// const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

import { createSlice } from "@reduxjs/toolkit"

// export const toggleDarkMode = () => ({ type: TOGGLE_DARK_MODE });

// const initialState = {
//   isDarkMode: false,
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_DARK_MODE:
//       return { ...state, isDarkMode: !state.isDarkMode };
//     default:
//       return state;
//   }
// };

// export default rootReducer;


const initialState = {
  isDarkMode: false,
}

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      }
    },

  }

})

export const {changeMode} = darkModeSlice.actions;

export default darkModeSlice.reducer;