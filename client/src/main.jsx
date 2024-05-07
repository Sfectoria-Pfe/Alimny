import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router.jsx";
import { store } from "./store/index.js";
import ThemeProvider from './theme/index.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
      <Router /> 
      </ThemeProvider> 
    </Provider>
  </React.StrictMode>
);
