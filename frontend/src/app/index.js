import React from "react";
import { persistStore } from "redux-persist";
import { ConnectedRouter } from "connected-react-router";
import Provider from "react-redux/es/components/Provider";
import { PersistGate } from "redux-persist/es/integration/react";
import { withStyles } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { configureStore, history } from "../store";
import AppRoutes from "../routes";

import styles from "./styles";
import theme from "./theme";

export const store = configureStore();
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <AppRoutes />
          </MuiThemeProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default withStyles(styles)(App);
