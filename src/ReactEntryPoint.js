import React from "react";
import * as ReactDOMClient from 'react-dom/client';

import MainWindow from "./MainWindow";

window.onload = function() {
  const container = document.getElementById("react-content-placeholder")
  const root = ReactDOMClient.createRoot(container)
  root.render(<MainWindow />)
};
