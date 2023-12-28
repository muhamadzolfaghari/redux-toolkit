import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  num: number;
}

const initialState: State = {
  num: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    numChanged(state, action: PayloadAction<number>) {
      state.num = action.payload;
    },
  },
});

export const { numChanged } = appSlice.actions;
export default appSlice.reducer;