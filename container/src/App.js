import React from "react";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import ErrorBoundary from "./ErrorBoundary";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <ErrorBoundary>
            <MarketingApp />
          </ErrorBoundary>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
