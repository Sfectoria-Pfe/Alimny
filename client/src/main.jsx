import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router.jsx";
import { store } from "./store/index.js";
import ThemeProvider from './theme/index.jsx';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Provider store={store}>
    <ThemeProvider>
      <Router /> 
      </ThemeProvider> 
    </Provider>
    </LocalizationProvider>
  </React.StrictMode>
);
