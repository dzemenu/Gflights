import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
