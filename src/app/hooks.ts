import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const selfSelector = (state: RootState) => state;

export const appNumSelector = createSelector(
  selfSelector,
  (state) => state.app.num
);
