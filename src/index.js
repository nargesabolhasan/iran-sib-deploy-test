import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Theme from "./assets/Core-ui/Theme";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./redux/provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
        <StoreProvider>
          <Theme>
            <App />
          </Theme>
        </StoreProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); 
