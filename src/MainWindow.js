import React from "react";

import Database from "./Database";

export default class MainWindow extends React.Component {
  constructor(props) {
    super(props);
    Database.getSome();
  }

  render() {
    return (
      <div>
        <h1>MainWindow</h1>
      </div>
    );
  }
}
