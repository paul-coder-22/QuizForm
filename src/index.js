import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Redirect from "./Redirect";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <Redirect />
  </StrictMode>,
  rootElement
);
