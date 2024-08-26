import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./features/walletSlice";
import { loadState, saveState } from "./localStorageutils";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
