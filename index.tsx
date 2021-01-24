import React, { Component } from "react";
import { render } from "react-dom";
import { UIProvider } from "./src/my-context";
import App from "./src/App";

interface AppProps {}
interface AppState {
  name: string;
}

render(
  <UIProvider>
    <App />
  </UIProvider>,

  document.getElementById("root")
);
