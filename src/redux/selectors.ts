import { RootState } from "./store";

export const selectSearched = (state: RootState) => state;
export const selectLoading = (state: RootState) => state.search.loading;
export const selectError = (state: RootState) => state.search.error;
