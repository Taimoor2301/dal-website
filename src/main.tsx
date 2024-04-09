import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { Provider } from "react-redux";
import store from "./store/index.ts";
// import I18nProvider from "./store/slices/i18n/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <I18nProvider> */}
      <App />
      {/* </I18nProvider> */}
    </Provider>
  </React.StrictMode>
);
