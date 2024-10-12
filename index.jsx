import React from "react";
import ReactDom from "react-dom";
import app from "./app.jsx";
ReactDom.render(<div>{app()}</div>, document.getElementById("root"));
