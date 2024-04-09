import { configureStore } from "@reduxjs/toolkit";
import locale from "./slices/i18n";

const store = configureStore({
  reducer: {
    locale,
  },
});

export default store;
