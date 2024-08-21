import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Check if we are in development mode and if the element exists
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("marketing_dev_root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
