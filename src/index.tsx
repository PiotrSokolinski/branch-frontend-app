import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import theme from "./theme";
import DEFAULT_LOCALE from "./utils/i18n";
import store from "./utils/store";
import reportWebVitals from "./reportWebVitals";
import history from "./utils/history";
import "./utils/axios";

import App from "./containers/App";
import GlobalStyles from "./theme/globalStyles";
import ResponsiveFontSize from "./components/ResponsiveFontSize";

const MOUNT_NODE: HTMLElement | null = document.getElementById("root");

const application = (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <Router history={history}>
            <>
              <GlobalStyles />
              <ResponsiveFontSize />
              <App />
            </>
          </Router>
        </IntlProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(application, MOUNT_NODE);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
