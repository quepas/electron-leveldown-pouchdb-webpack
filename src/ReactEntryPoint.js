import React from "react";
import ReactDOM from "react-dom";

import MainWindow from "./MainWindow";

window.onload = function() {
  ReactDOM.render(
    <MainWindow />,
    document.getElementById("react-content-placeholder")
  );
};
