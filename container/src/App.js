import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import ErrorBoundary from "./ErrorBoundary";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

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
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/auth" component={AuthLazy} />
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
